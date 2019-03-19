import axios from '@/config/axios'

export default {
  state: {
    subscriptions: []
  },
  getters: {
    getSubscriptions: (state) => state.subscriptions
  },
  actions: {
    async GET_SUBSCRIPTIONS ({ state, commit }, userId) {
      if (!state.subscriptions.length) {
        const { data } = await axios.get(`/users/${userId}/subscriptions`)
        commit('SET_SUBSCRIPTIONS', data)
      }
    },
    async CHANGE_STATUS_SUBSCRIPTION ({ state, commit }, { type, id, sid }) {
      const { data } = await axios.get(`/subscriptions/${sid}/${type}`)
      if (!data.error) {
        commit('CHANGE_STATUS_SUBSCRIPTION', { type, id })
      }
    },
    async CANCEL_SUBSCRIPTION ({ state, commit }, { type, id, sid }) {
      const { data } = await axios.delete(`/subscriptions/${sid}`)
      if (!data.error) {
        commit('CANCEL_SUBSCRIPTION', id)
      }
    }
  },
  mutations: {
    SET_SUBSCRIPTIONS (state, subscriptions) {
      state.subscriptions = subscriptions
    },
    CHANGE_STATUS_SUBSCRIPTION (state, { id, type }) {
      state.subscriptions[id].status = type === 'resume'
        ? 'active'
        : 'paused'
    },
    CANCEL_SUBSCRIPTION (state, id) {
      state.subscriptions[id].status = 'canceled'
    }
  }
}
