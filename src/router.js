import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Dashboard from './components/pages/Dashboard'
import Campaign from './components/pages/Campaign'
import Products from './components/pages/Products'
import Product from './components/pages/Product'
import Subscriptions from './components/pages/Subscriptions'
import Profile from './components/pages/Profile'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'

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
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        auth: true
      }
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
