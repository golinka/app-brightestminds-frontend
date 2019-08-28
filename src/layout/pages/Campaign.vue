<template>
  <div class="page mt-4 mt-sm-0">
    <div class="row">
      <div
        v-if="campaign"
        class="col-12"
      >
        <div class="page__panel top">
          <h2
            class="page__panel-title mb-3 status"
            :status="campaign.status"
          >
            <span>{{ campaign.name }}</span>
          </h2>
          <div class="page__panel-bolder">
            {{ campaign.from_name }}
          </div>
          <div class="page__panel-smaller">
            <p>{{ campaign.from_email }}</p>
            <p>{{ campaign.created | moment('LLL') }}</p>
          </div>
        </div>
        <CampaignCharts :stats="campaign.stats" />
        <CampaignProspects :cid="cid" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CampaignCharts from '../components/Campaign/CampaignCharts'
  import CampaignProspects from '../components/Campaign/CampaignProspects'

  export default {
    components: {
      CampaignCharts,
      CampaignProspects
    },
    props: {
      cid: {
        type: String,
        required: true
      }
    },
    computed: mapGetters({
      campaign: 'getCampaign'
    }),
    created () {
      this.$store.dispatch('GET_CAMPAIGN', this.cid)
    }
  }
</script>
