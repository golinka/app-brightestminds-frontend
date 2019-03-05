<template>
  <div class="products__block col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
    <div class="product">
      <router-link tag="a" class="product__head" :to="{ name: 'product', params: {slug: product.slug} }">
        <div class="product__title">{{ product.title }}</div>
      </router-link>
      <div class="product__body">
        <div class="product__details">
          <div class="price">
            <span>{{ getPrice }}</span>
            <div class="price__interval">/ {{ product.interval }}</div>
          </div>
          <div class="date">
            <Icon name="date-icon" />
            <span>{{ getDate }}</span>
          </div>
        </div>
        <div class="product__description">
          <ul>
            <li v-for="(line, index) in getDescription" :key="index">{{ line }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from '@/mixins'

export default {
  mixins: [productMixin],
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
