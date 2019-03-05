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
    async GET_USER_DETAILS ({ commit }) {
      const { data: user } = await axios.get('/user')
      commit('SET_USER', user)
    },
    async LOGOUT ({ commit }) {
      Cookie.remove('appbm-token')
      Cookie.remove('appbm-refresh')
      router.push('/products')
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
