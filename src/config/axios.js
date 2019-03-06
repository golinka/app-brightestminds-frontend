import Axios from 'axios'
import Cookie from 'js-cookie'
import Store from '../store/store'
import { router } from '@/router'

const axios = Axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND}/api/v1`
})

axios.interceptors.request.use(config => {
  Store.commit('ENABLE_LOADER')
  const token = Cookie.get('appbm-token')
  if (token) config.headers = { 'Authorization': `Bearer ${token}` }
  return config
})

axios.interceptors.response.use(response => {
  Store.dispatch('DISABLE_LOADER')
  return response
}, async (error) => {
  Store.dispatch('DISABLE_LOADER')
  if (error.response.status === 401) {
    if (Cookie.get('appbm-token')) {
      await Store.dispatch('REFRESH_TOKEN')
      router.go(router.currentRoute)
    } else {
      router.push('/login')
    }
  }
  return error.response
})

export default axios
