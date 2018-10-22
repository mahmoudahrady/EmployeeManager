import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/New',
      name: 'new-employee',
      component: () => import('@/components/NewEmployee.vue')
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: () => import('@/components/EditEmployee.vue')
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: () => import('@/components/ViewEmployee.vue')
    },
  ]
})
