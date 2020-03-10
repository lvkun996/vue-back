
import submenu from './submenu'

import breadcrumb from './breadcurmb'
export default {
  install (Vue) {
    Vue.component('submenu', submenu)
    Vue.component('breadcrumb', breadcrumb)
  }
}
