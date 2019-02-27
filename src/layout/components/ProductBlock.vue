<template>
  <div class="products__block col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
    <div class="product">
      <a class="product__head" :href="getProductLink">
        <div class="product__title">{{ product.title }}</div>
      </a>
      <div class="product__body">
        <div class="product__details">
          <div class="price">
            <span>{{ getCurrency }}{{ product.price }}</span>
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
import { slugify } from '@/mixins'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    getCurrency () {
      return this.product.currency === 'eur' ? '€' : '$'
    },
    getDate () {
      return this.product.created_at.split(' ')[0]
    },
    getDescription () {
      return this.product.description.split('\n')
    },
    getProductLink () {
      return `/products/${slugify(this.product.title)}`
    }
  }
}
</script>
