import axios from 'axios'

import { getItem } from '@/utils/storeage.js'
const instance = axios.create({
  baseURL: 'http://47.115.124.102:8888/api/private/v1/'
})

export const createAPI = (url, method, data) => {
  const config = {}
  if (method === 'GET') {
    config.params = data
  } else {
    config.data = data
  }
  return instance({
    url,
    method,
    ...config
  })
}

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = getItem('token')

  return config
}, function (error) {
  return Promise.reject(error)
})

export default instance
