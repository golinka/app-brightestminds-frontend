import axios from '@/config/axios'

export default {
  state: {
    products: []
  },
  getters: {
    getProducts: (state) => state.products
  },
  actions: {
    async GET_PRODUCTS ({ commit }) {
      const { data: products } = await axios.get('/products?all=true')
      commit('SET_PRODUCTS', products)
    }
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    }
  }
}
