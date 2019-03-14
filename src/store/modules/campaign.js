import axios from '@/config/axios'

export default {
  state: {
    campaigns: [],
    campaign: null,
    prospects: []
  },
  getters: {
    getCampaigns: (state) => state.campaigns,
    getCampaign: (state) => state.campaign,
    getProspects: (state) => state.prospects
  },
  actions: {
    async GET_CAMPAIGNS ({ state, commit }) {
      if (!state.campaigns.length) {
        const { data } = await axios.get('/campaigns')
        commit('SET_CAMPAIGNS', data)
      }
    },
    async GET_CAMPAIGN ({ commit }, cid) {
      const { data } = await axios.get(`/campaigns/${cid}`)
      commit('SET_CAMPAIGN', data)
    },
    async GET_PROSPECTS ({ commit }, cid) {
      const { data } = await axios.get(`/campaigns/${cid}/prospects`)
      commit('SET_PROSPECTS', data)
    }
  },
  mutations: {
    SET_CAMPAIGNS (state, campaigns) {
      state.campaigns = campaigns
    },
    SET_CAMPAIGN (state, campaign) {
      state.campaign = campaign
    },
    SET_PROSPECTS (state, prospects) {
      state.prospects = prospects
    }
  }
}
