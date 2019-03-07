<template>
  <div class="page mt-4 mt-sm-0">
    <div class="row">
      <div class="col-12">
        <h2 class="page__title">Dashboard</h2>
      </div>
      <div class="col-12">
        <table class="campaign-block col-12">
          <thead>
            <tr class="campaign-block__head">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">PROSPECTS</th>
              <th scope="col">DELIVERED</th>
              <th scope="col">OPENED</th>
              <th scope="col">REPLIED</th>
              <th scope="col">INTEREST</th>
            </tr>
          </thead>
          <tbody>
            <CampaignBlock v-for="(campaign, index) in campaigns" :key="index" :campaign="campaign" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CampaignBlock from '../components/CampaignBlock'

export default {
  computed: mapGetters({
    campaigns: 'getCampaigns'
  }),
  components: {
    CampaignBlock
  },
  created () {
    this.$store.dispatch('GET_CAMPAIGNS')
  }
}
</script>
