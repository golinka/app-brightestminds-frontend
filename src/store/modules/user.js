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
        try {
          const { data } = await axios.post('/login', { ...user })
          Cookie.set('appbm-token', data.token)
          dispatch('GET_USER_DETAILS')
          commit('LOGIN')
          router.push('/')
        } catch ({ response }) {
          reject(response.data.error.message.split(': ')[1])
        }
      })
    },
    async GET_USER_DETAILS ({ commit }) {
      const { data: user } = await axios.get('/user')
      commit('SET_USER', user)
    },
    async LOGOUT ({ commit }) {
      Cookie.remove('appbm-token')
      commit('LOGOUT')
      router.push('/products')
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
