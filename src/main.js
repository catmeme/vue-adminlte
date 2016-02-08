import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import NotFound from './components/NotFound.vue'
import Dashboard from './components/Dashboard.vue'
import Hello from './components/Hello.vue'

// install router
Vue.use(VueRouter)

// routing
export var router = new VueRouter({ linkActiveClass: 'active', history: true })

router.map({
  '*': {
    component: NotFound
  },
  '/': {
    component: Dashboard
  },
  '/hello': {
    component: Hello
  }
})

router.start(App, 'body')
