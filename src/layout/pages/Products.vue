<template>
  <div class="row">
    <div class="page products">
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
import Product from '../components/Product'

export default {
  data () {
    return {
      products: [0, 1, 2, 3, 4, 5]
    }
  },
  components: {
    Product
  }
}
</script>
