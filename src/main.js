import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {Style} from 'vux-components'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App, Style }
})

Vue.use(VueRouter)
Vue.use(VueResource)
