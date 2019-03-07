import Vue from 'vue'
import Vuex from 'vuex'

import general from './modules/general'
import product from './modules/product'
import campaign from './modules/campaign'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    general,
    product,
    campaign,
    user
  }
})
