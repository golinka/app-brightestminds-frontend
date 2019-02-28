const productMixin = {
  computed: {
    getCurrency () {
      return this.product.currency === 'eur' ? '€' : '$'
    },
    getPrice () {
      return `${this.getCurrency}${this.product.price}`
    },
    getPriceWithInterval () {
      return `${this.getPrice} ${this.product.currency.toUpperCase()} / ${this.product.interval}`
    },
    getDate () {
      return this.product.created_at.split(' ')[0]
    },
    getDescription () {
      return this.product.description.split('\n')
    },
    getProductLink () {
      return `/products/${this.product.slug}`
    },
    isPrivate () {
      return this.product.is_private
    }
  }
}

export { productMixin }
