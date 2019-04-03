import Vue from 'vue'
import App from './layout/App.vue'
import store from './store/store'
import moment from 'vue-moment'
import VeeValidate from 'vee-validate'
import router from './router'
import { ClientTable } from 'vue-tables-2'
import VueFlashMessage from 'vue-flash-message'

import Icon from './layout/components/Icon'

/* eslint-disable */
import "bootstrap/scss/bootstrap.scss"
import "vue-flash-message/dist/vue-flash-message.min.css"
import "@/assets/scss/app.scss"

Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.use(moment)
Vue.use(ClientTable)
Vue.use(VeeValidate)
Vue.use(VueFlashMessage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
