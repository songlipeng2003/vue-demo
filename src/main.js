import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home'
import Nodes from './components/Nodes'
import Node from './components/Node'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = 'https://ruby-china.org/api/v3'

Vue.config.devtools = true

var router = new VueRouter({
  history: true
})

router.map({
  '/home': {
    component: Home
  },
  '/nodes': {
    component: Nodes
  },
  '/node/:id': {
    name: 'node',
    component: Node
  }
})

router.redirect({
  '*': 'home'
})

router.start(App, '#app')
