import axios from '@/config/axios'

export default {
  state: {
    products: [],
    product: null
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product,
    getCurrency: (state) => state.product.currency === 'eur' ? '€' : '$',
    getPrice: (state, getters) => `${getters.getCurrency}${state.product.price}`,
    getPriceWithInterval: (state, getters) => `${getters.getPrice} ${state.product.currency} / ${state.product.interval}`,
    getDate: (state) => state.product.created_at.split(' ')[0],
    getDescription: (state) => state.product.description.split('\n'),
    getProductLink: (state) => `/products/${state.product.slug}`,
    isPrivate: (state) => state.product.is_private
  },
  actions: {
    async GET_PRODUCTS ({ commit }) {
      const { data: products } = await axios.get('/products?all=true')
      commit('SET_PRODUCTS', products)
    },
    async GET_PRODUCT ({ commit }, slug) {
      const { data } = await axios.get(`/products/${slug}`)
      commit('SET_PRODUCT', data)
    }
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_PRODUCT (state, product) {
      state.product = product
    }
  }
}
