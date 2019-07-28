import Cookie from 'js-cookie'
import axios from '@/config/axios'
import router from '@/router'

export default {
  state: {
    isAuth: !!Cookie.get('appbm-token'),
    user: null,
    services: null,
    loginMessage: null,
    signupMessage: null
  },
  getters: {
    isAuth: (state) => state.isAuth,
    getUser: (state) => state.user,
    isAdmin: (state) => state.user.role === 'admin',
    loginMessage: (state) => state.loginMessage,
    signupMessage: (state) => state.signupMessage,
    getUserServicesForUpdate: (state) => {
      if (state.services) {
        return state.services.map(service => {
          return {
            id: service.id,
            token: service.pivot.token
          }
        })
      }
    }
  },
  actions: {
    async LOGIN ({ dispatch, commit }, user) {
      const { data } = await axios.post('/login', user)
      if (data.error) {
        return dispatch('FORM_MESSAGE', {
          name: 'login',
          message: data.error.message
        })
      }
      Cookie.set('appbm-token', data.token)
      Cookie.set('appbm-refresh', data.refreshToken)
      commit('LOGIN')
      commit('SET_USER', data.user)
      router.push({ name: 'dashboard' })
    },
    async REFRESH_TOKEN ({ dispatch, commit }) {
      const { data } = await axios.post('/refresh', {
        refreshToken: Cookie.get('appbm-refresh')
      })
      if (data.error) {
        commit('LOGOUT')
        Cookie.remove('appbm-token')
        Cookie.remove('appbm-refresh')
        router.push({ name: 'login' })
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
    async SIGNUP ({ dispatch }, userDetails) {
      const { data } = await axios.post('/users', userDetails)
      if (data.error) {
        return dispatch('FORM_MESSAGE', {
          name: 'signup',
          message: data.error.message
        })
      }
      router.push({ name: 'login' })
    },
    async LOGOUT ({ commit }) {
      Cookie.remove('appbm-token')
      Cookie.remove('appbm-refresh')
      window.location.reload()
      commit('LOGOUT')
    },
    FORM_MESSAGE ({ commit }, payload) {
      commit('FORM_MESSAGE', payload)
      setTimeout(() => {
        commit('FORM_MESSAGE', {
          name: payload.name,
          message: null
        })
      }, 3500)
    },
    async UPDATE_USER ({ state, dispatch, commit }, user) {
      const { data } = await axios.post(`/users/${user.id}`, user)
      if (data.error) {
        dispatch('FLASH_MESSAGE', {
          message: data.error.message,
          type: 'error'
        })
      }
      commit('UPDATE_USER', user)
    }
  },
  mutations: {
    LOGIN (state) {
      state.isAuth = true
    },
    SET_USER (state, { services, ...user }) {
      state.user = user
      state.services = services
    },
    UPDATE_USER (state, user) {
      state.user = Object.assign({}, state.user, user)
    },
    FORM_MESSAGE (state, { name, message }) {
      state[`${name}Message`] = message
    },
    LOGOUT (state) {
      state.isAuth = false
      state.user = null
    }
  }
}
