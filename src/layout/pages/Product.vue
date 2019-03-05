<template>
  <div class="row" v-if="product">
    <div class="product-page col-12 mt-4 mt-sm-0">
      <!-- TOP PRODUCT PANEL -->
      <div class="row">
        <div class="col-12">
          <div class="product-page__panel top">
            <h2 class="product-page__title mb-3" :class="{ 'private' : isPrivate }">
              <span>{{ product.title }}</span>
            </h2>
            <div class="product-page__price">
              {{ getPriceWithInterval }}
            </div>
            <div class="product-page__date">
              {{ getDate }}
            </div>
            <div class="product-page__buy">
              <button class="btn btn-secondary btn--default">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <!-- END -->
      <!-- DETAILS PANEL -->
      <div class="row">
        <div class="col-12">
          <div class="product-page__panel w-100">
            <p class="product-page__subtitle">Description</p>
            <p class="product-page__description">
              <ul>
                <li v-for="(line, index) in getDescription" :key="index">{{ line }}</li>
              </ul>
            </p>
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
  computed: mapGetters({
    product: 'getProduct'
  }),
  created () {
    this.$store.dispatch('GET_PRODUCT', this.$route.params.slug)
  }
}
</script>
