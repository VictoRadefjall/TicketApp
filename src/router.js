import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Buy from './views/Buy.vue'
import Tickets from './views/Tickets.vue'
import Events from './views/Events.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/:name',
      name: 'name',
      component: Buy
    },
  ]
})
