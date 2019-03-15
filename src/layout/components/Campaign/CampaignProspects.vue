<template>
  <div class="row mt-3 mt-md-5">
    <div class="col-12">
      <h4>Campaign summary</h4>
    </div>
    <div class="col-12 mt-3 mt-md-4">
      <v-client-table :data="tableData" :columns="columns" :options="options">
        <template slot="interest" slot-scope="props">
          <Icon :name="`${props.row.interest ? props.row.interest.toLowerCase() : 'not-reaction'}-icon`"/>
        </template>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  props: {
    cid: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      columns: ['when', 'email', 'name', 'emails', 'status', 'interest'],
      options: {
        fields: ['__slot:interest']
      }
    }
  },
  computed: {
    ...mapGetters({
      prospects: 'getProspects'
    }),
    tableData () {
      return this.prospects.map(prospect => {
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
  mounted () {
    this.$store.dispatch('GET_PROSPECTS', this.cid)
  }
}
</script>
