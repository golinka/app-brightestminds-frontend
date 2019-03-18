import Vue from 'vue'
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
    getProspects: (state) => {
      return state.prospects.map(prospect => {
        return {
          when: prospect.last_contacted
            ? Vue.moment(prospect.last_contacted).format('LLL')
            : 'Not contacted yet',
          email: prospect.email,
          name: prospect.first_name,
          emails: prospect.sent_mails,
          status: prospect.status.toLowerCase(),
          interest: prospect.interested
        }
      })
    }
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
