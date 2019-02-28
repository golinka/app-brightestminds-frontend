import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './layout/pages/Dashboard'
import Products from './layout/pages/Products'
import Product from './layout/pages/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/:slug',
      name: 'product',
      component: Product
    }
  ]
})
