import Vue from 'vue'

export default {
  state: {
    loader: false
  },
  getters: {
    isLoader: (state) => state.loader
  },
  actions: {
    DISABLE_LOADER ({ commit }) {
      setTimeout(() => {
        commit('DISABLE_LOADER')
      }, 1000)
    },
    FLASH_MESSAGE ({ commit }, { message, type }) {
      Vue.prototype.$flashStorage.flash(message, type, {
        timeout: 7000
      })
    }
  },
  mutations: {
    ENABLE_LOADER (state) {
      state.loader = true
    },
    DISABLE_LOADER (state) {
      state.loader = false
    }
  }
}
