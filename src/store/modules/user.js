import Cookie from 'js-cookie'
import axios from '@/config/axios'
import { router } from '@/router'

export default {
  state: {
    isAuth: !!Cookie.get('appbm-token'),
    user: null
  },
  getters: {
    isAuth: (state) => state.isAuth,
    getUser: (state) => state.user,
    isAdmin: (state) => state.user.role === 'admin'
  },
  actions: {
    async LOGIN ({ dispatch, commit }, user) {
      return new Promise(async (resolve, reject) => {
        const { data } = await axios.post('/login', { ...user })
        if (data.error) {
          reject(data.error.message)
        } else {
          Cookie.set('appbm-token', data.token)
          Cookie.set('appbm-refresh', data.refreshToken)
          commit('LOGIN')
          commit('SET_USER', data.user)
          router.push('/dashboard')
        }
      })
    },
    async REFRESH_TOKEN ({ dispatch, commit }) {
      const { data } = await axios.post('/refresh', {
        refreshToken: Cookie.get('appbm-refresh')
      })
      if (data.error) {
        commit('LOGOUT')
        Cookie.remove('appbm-token')
        Cookie.remove('appbm-refresh')
        router.push('/login')
      } else {
        Cookie.set('appbm-token', data.token)
        Cookie.set('appbm-refresh', data.refreshToken)
        dispatch('GET_USER_DETAILS')
      }
    },
    async GET_USER_DETAILS ({ commit }) {
      const { data: user } = await axios.get('/user')
      commit('SET_USER', user)
    },
    async SIGNUP ({ commit }, userDetails) {
      return new Promise(async (resolve, reject) => {
        const { data } = await axios.post('/users', { ...userDetails })
        if (data.error) {
          reject(data.error.message)
        } else {
          router.push('/login')
        }
      })
    },
    async LOGOUT ({ commit }) {
      Cookie.remove('appbm-token')
      Cookie.remove('appbm-refresh')
      window.location.reload()
      commit('LOGOUT')
    }
  },
  mutations: {
    LOGIN (state) {
      state.isAuth = true
    },
    SET_USER (state, user) {
      state.user = user
    },
    LOGOUT (state) {
      state.isAuth = false
      state.user = null
    }
  }
}
