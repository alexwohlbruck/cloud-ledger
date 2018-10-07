import Vue from 'vue'
import Router from 'vue-router'
import Balance from './views/Balance'
import Register from './views/Register'
import Add from './views/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/balance',
      name: 'balance',
      component: Balance
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
  ]
})
