// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'



import App from './App'
import router from './router'

import '@/styles/index.scss' // global css

import Cookies from 'js-cookie'
import Element from 'element-ui'

import './icons' // icon

Vue.config.productionTip = false

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
