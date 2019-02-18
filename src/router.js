import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Buy from './views/Buy.vue'
import Tickets from './views/Tickets.vue'
import Events from './views/Events.vue'
import Staff from './views/Staff.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/events/:name',
      name: 'name',
      component: Buy
    },
    {
      path: '/:name/tickets',
      name: 'tickets',
      component: Tickets
    },
    {
      path: '/staff/verify',
      name: 'staff',
      component: Staff
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
