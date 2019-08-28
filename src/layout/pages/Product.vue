<template>
  <div
    v-if="product"
    class="row"
  >
    <div class="page col-12 mt-4 mt-sm-0">
      <!-- TOP PRODUCT PANEL -->
      <div class="row">
        <div class="col-12">
          <div class="page__panel top">
            <h2
              class="page__panel-title mb-3"
              :class="{ 'private' : isPrivate }"
            >
              <span>{{ product.title }}</span>
            </h2>
            <div class="page__panel-bolder">
              {{ getPriceWithInterval }}
            </div>
            <div class="page__panel-smaller">
              {{ product.created_at | moment('LLL') }}
            </div>
            <div class="page__panel-actions">
              <button class="btn btn-secondary btn--default">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- END -->
      <!-- DETAILS PANEL -->
      <div class="row">
        <div class="col-12">
          <div class="page__panel">
            <p class="page__panel-subtitle">
              Description
            </p>
            <ul class="page__panel-list">
              <li
                v-for="(line, index) in getDescription"
                :key="index"
              >
                {{ line }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- END -->
    </div>
  </div>
</template>

<script>
  import { productMixin } from '@/mixins'
  import { mapGetters } from 'vuex'

  export default {
    mixins: [productMixin],
    props: {
      slug: {
        type: String,
        required: true
      }
    },
    computed: mapGetters({
      product: 'getProduct'
    }),
    created () {
      this.$store.dispatch('GET_PRODUCT', this.slug)
    }
  }
</script>
