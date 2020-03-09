import axios from 'axios'

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

// instance.interceptors.request(function (config) {
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

export default instance
