<template>
  <div class="row mt-3 mt-md-5">
    <div class="col-12">
      <h4>Campaign summary</h4>
    </div>
    <div class="col-12 mt-3 mt-md-4">
      <v-client-table :data="prospects" :columns="columns" :options="options">
        <template slot="interest" slot-scope="props">
          <Icon :name="iconName(props.row.interest)"/>
        </template>
      </v-client-table>
    </div>
  </div>
</template>

<script>
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
    iconName () {
      return (interest) => `${interest ? interest.toLowerCase() : 'not-reaction'}-icon`
    }
  },
  mounted () {
    this.$store.dispatch('GET_PROSPECTS', this.cid)
  }
}
</script>
