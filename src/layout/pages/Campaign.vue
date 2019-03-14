<template>
  <div class="page mt-4 mt-sm-0">
    <div class="row">
      <div class="col-12" v-if="campaign">
        <div class="product-page__panel top">
          <h2 class="product-page__title mb-3 status" :status="campaign.status">
            <span>{{ campaign.name }}</span>
          </h2>
          <div class="product-page__price">
            {{ campaign.from_name }}
          </div>
          <div class="product-page__date">
            <p>{{ campaign.from_email }}</p>
            <p>{{ campaign.created }}</p>
          </div>
        </div>
        <CampaignCharts :stats="campaign.stats"/>
        <CampaignProspects :cid="campaign.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CampaignCharts from '../components/Campaign/CampaignCharts'
import CampaignProspects from '../components/Campaign/CampaignProspects'

export default {
  computed: mapGetters({
    campaign: 'getCampaign'
  }),
  components: {
    CampaignCharts,
    CampaignProspects
  },
  created () {
    this.$store.dispatch('GET_CAMPAIGN', this.$route.params.cid)
  }
}
</script>
