<template>
  <div class="page mt-4 mt-sm-0">
    <div class="row">
      <div class="col-12">
        <h2 class="page__title">Dashboard</h2>
      </div>
      <div class="col-12" v-if="campaigns.length">
        <table class="table table--subscriptions col-12">
          <thead>
            <tr class="table__head">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">PROSPECTS</th>
              <th scope="col">DELIVERED</th>
              <th scope="col">OPENED</th>
              <th scope="col">REPLIED</th>
              <th scope="col" class="text-center">INTEREST</th>
            </tr>
          </thead>
          <tbody>
            <CampaignBlock v-for="(campaign, index) in campaigns" :key="index" :campaign="campaign" />
          </tbody>
        </table>
      </div>
      <div class="col-12" v-else>
        <div class="page__message d-flex align-items-center flex-column my-3">
          <Icon name="time-icon" />
          <p>Please wait while your manager adds statistics to your Dashboard.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CampaignBlock from '../components/Campaign/CampaignBlock'

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
