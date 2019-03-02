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
