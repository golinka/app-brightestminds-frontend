<template>
  <div class="page products">
    <div class="row">
      <div class="col-12">
        <h2 class="page__title">Products</h2>
      </div>
      <div class="col-12">
        <div class="row">
          <Product v-for="(product, index) in products" :key="index" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from '../components/ProductBlock'

export default {
  computed: mapGetters({
    products: 'getProducts'
  }),
  components: {
    Product
  },
  created () {
    this.$store.dispatch('GET_PRODUCTS')
  }
}
</script>
