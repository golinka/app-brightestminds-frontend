<template>
  <div class="page subscriptions">
    <div class="row">
      <div class="col-12">
        <h2 class="page__title">Subscriptions</h2>
      </div>
      <div class="subscriptions__table col-12">
        <table class="table table--subscriptions col-12" v-if="subscriptions.length">
          <thead>
            <tr class="table__head">
              <th scope="col" class="text-center">STATUS</th>
              <th scope="col">PRODUCT</th>
              <th scope="col">PRICE</th>
              <th scope="col">CREATED</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <Subscription
              v-for="(subscription, index) in subscriptions"
              :key="index + subscription.status"
              :id="index"
              :subscription="subscription"/>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Subscription from '../components/Subscription/SubscriptionBlock'

export default {
  computed: {
    ...mapGetters({
      user: 'getUser',
      subscriptions: 'getSubscriptions'
    })
  },
  methods: mapActions({
    getSubscriptions: 'GET_SUBSCRIPTIONS'
  }),
  created () {
    if (this.user) this.getSubscriptions(this.user.id)
  },
  watch: {
    user () {
      this.getSubscriptions(this.user.id)
    }
  },
  components: {
    Subscription
  }
}
</script>
