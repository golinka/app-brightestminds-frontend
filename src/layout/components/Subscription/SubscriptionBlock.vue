<template>
  <tr
    class="table__row"
    :class="{ 'canceled': isCanceled }"
  >
    <td
      class="table__status"
      data-label="Status"
    >
      <div class="cell py-sm-2">
        <Icon :name="iconName" />
        <span>{{ subscription.status }}</span>
      </div>
    </td>
    <td
      class="table__details"
      data-label="Product"
    >
      <div class="cell">
        <router-link :to="productLink">
          {{ subscription.product.title }}
        </router-link>
      </div>
    </td>
    <td data-label="Price">
      <div class="cell">
        {{ price }}
      </div>
    </td>
    <td data-label="Created">
      <div class="cell">
        {{ subscription.created_at | moment('LL') }}
      </div>
    </td>
    <td class="table__actions">
      <div
        v-if="!isCanceled"
        class="cell d-flex"
      >
        <button
          v-if="!isActive"
          class="btn btn--table"
          title="Resume"
          @click="changeStatus('resume')"
        >
          <span>Resume</span>
          <Icon name="play-solid-icon" />
        </button>
        <button
          v-if="isActive"
          class="btn btn--table"
          title="Pause"
          @click="changeStatus('pause')"
        >
          <span>Pause</span>
          <Icon name="pause-solid-icon" />
        </button>
        <button
          v-if="isActive"
          class="btn btn--table"
          title="Stop"
          @click="cancelSubscription"
        >
          <span>Stop</span>
          <Icon name="stop-solid-icon" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    subscription: {
      type: Object,
      required: true
    }
  },
  computed: {
    isActive () {
      return this.subscription.status === 'active'
    },
    isCanceled () {
      return this.subscription.status === 'canceled'
    },
    currency () {
      return this.subscription.product.currency === 'eur' ? '€' : '$'
    },
    price () {
      return `${this.currency + this.subscription.product.price}/${this.subscription.product.interval}`
    },
    productLink () {
      return {
        name: 'product',
        params: {
          slug: this.subscription.product.slug
        }
      }
    },
    iconName () {
      switch (this.subscription.status) {
        case 'active':
          return 'running-icon'
        case 'paused':
          return 'paused-icon'
        default:
          return 'stopped-icon'
      }
    }
  },
  methods: {
    getPayload (type) {
      return {
        type,
        id: this.id,
        sid: this.subscription.id
      }
    },
    changeStatus (type) {
      this.$store.dispatch('CHANGE_STATUS_SUBSCRIPTION', this.getPayload(type))
    },
    cancelSubscription () {
      this.$store.dispatch('CANCEL_SUBSCRIPTION', this.getPayload(null))
    }
  }
}
</script>
