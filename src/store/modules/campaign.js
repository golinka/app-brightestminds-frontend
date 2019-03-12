import axios from '@/config/axios'

export default {
  state: {
    campaigns: [],
    campaign: null
  },
  getters: {
    getCampaigns: (state) => state.campaigns,
    getCampaign: (state) => state.campaign
  },
  actions: {
    async GET_CAMPAIGNS ({ state, commit }) {
      if (!state.campaigns.length) {
        const { data } = await axios.get('/campaigns')
        commit('SET_CAMPAIGNS', data)
      }
    }
  },
  mutations: {
    SET_CAMPAIGNS (state, campaigns) {
      state.campaigns = campaigns
    }
  }
}
