import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Dashboard from './layout/pages/Dashboard'
import Products from './layout/pages/Products'
import Product from './layout/pages/Product'
import Login from './layout/pages/Login'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true
      }
    },
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/products/:slug',
      name: 'product',
      component: Product
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = Cookie.get('appbm-token')
  if (to.matched.some(record => record.meta.auth)) {
    typeof token === 'undefined' ? next('/login') : next()
  } else {
    next()
  }
  next()
})
