import Vue from 'vue'
import App from './layout/App.vue'
import store from './store/store'
import moment from 'vue-moment'
import { router } from './router'
import { ClientTable } from 'vue-tables-2'

import Icon from './layout/components/Icon'

/* eslint-disable */
import "@/assets/scss/app.scss"
import "bootstrap/scss/bootstrap.scss"

Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.use(moment)
Vue.use(ClientTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
