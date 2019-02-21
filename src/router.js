import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Buy from './views/Buy.vue'
import Tickets from './views/Tickets.vue'
import Events from './views/Events.vue'
import Staff from './views/Staff.vue'
import Admin from './views/Admin.vue'
import AdminLJ from './views/AdminLJ.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/adminLJ',
      name: 'adminLJ',
      component: AdminLJ
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
      path: '/verify',
      name: 'verify',
      component: Staff
    },
    {
      path: '*',
      redirect: '/'
    },
  ]
})
