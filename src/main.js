import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import '@/style/global.css'

import customComponent from '@/components' // 注册全局组件

Vue.use(customComponent)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
