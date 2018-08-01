// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { TweenMax } from 'gsap/TweenMax'
import VueLodash from 'vue-lodash'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  TweenMax,
  VueLodash,
  components: {
    App
  },
  template: '<App/>'
})

const options = { name: 'lodash' } // customize the way you 
Vue.use(VueLodash, options) // options is optional