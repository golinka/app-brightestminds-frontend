import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Dashboard from './layout/pages/Dashboard'
import Campaign from './layout/pages/Campaign'
import Products from './layout/pages/Products'
import Product from './layout/pages/Product'
import Subscriptions from './layout/pages/Subscriptions'
import Login from './layout/pages/Login'
import Signup from './layout/pages/Signup'

Vue.use(Router)

const router = new Router({
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
      path: '/campaign/:cid',
      name: 'campaign',
      component: Campaign,
      props: true,
      meta: {
        auth: true
      }
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/products/:slug',
      name: 'product',
      props: true,
      component: Product
    },
    {
      path: '/subscriptions',
      name: 'subscriptions',
      component: Subscriptions
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '*',
      redirect: { name: 'products' }
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

export default router
