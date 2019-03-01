import Vue from 'vue'
import App from './layout/App.vue'
import store from './store/store'
import { router } from './router'

import Icon from './layout/components/Icon'

/* eslint-disable */
import "@/assets/scss/app.scss"
import "bootstrap/scss/bootstrap.scss"

Vue.config.productionTip = false
Vue.component('Icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
