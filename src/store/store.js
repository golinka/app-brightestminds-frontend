import Vue from 'vue'
import Vuex from 'vuex'

import general from './modules/general'
import product from './modules/product'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    general,
    product,
    user
  }
})
