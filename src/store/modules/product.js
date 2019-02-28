import axios from '@/config/axios'

export default {
  state: {
    products: [],
    product: {}
  },
  getters: {
    getProducts: (state) => state.products,
    getProduct: (state) => state.product
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
