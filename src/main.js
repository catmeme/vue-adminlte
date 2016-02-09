import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import NotFound from './components/NotFound.vue'
import Dashboard from './components/Dashboard.vue'
import PageGeneral from './components/pages/General.vue'
import PageIcons from './components/pages/Icons.vue'
import PageButtons from './components/pages/Buttons.vue'
import PageSliders from './components/pages/Sliders.vue'
import PageTimeline from './components/pages/Timeline.vue'
import PageModals from './components/pages/Modals.vue'

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
  '/ui/general': {
    component: PageGeneral
  },
  '/ui/icons': {
    component: PageIcons
  },
  '/ui/buttons': {
    component: PageButtons
  },
  '/ui/sliders': {
    component: PageSliders
  },
  '/ui/timeline': {
    component: PageTimeline
  },
  '/ui/modals': {
    component: PageModals
  }
})

router.start(App, 'body')
