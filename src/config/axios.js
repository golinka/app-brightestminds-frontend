import axios from 'axios'
import Cookie from 'js-cookie'

export default axios.create({
  baseURL: `${process.env.VUE_APP_BACKEND}/api/v1`,
  headers: { 'X-Custom-Authorization': `Bearer ${Cookie.get('appbm-token')}` }
})
