import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/emp_view',
    name: 'All Employees',
    component: () => import('../views/AllEmployees.vue')
  },
  {
    path: '/emp_add',
    name: 'Add Employees',
    component: () => import('../views/AddEmployee.vue')
  },
  {
    path: '/dept_view',
    name: 'All Departments',
    component: () => import('../views/AllDepartments.vue')
  },
  {
    path: '/dept_add',
    name: 'Add Department',
    component: () => import('../views/AddDepartment.vue')
  },
  {
    path: '/staff_leaves',
    name: 'Staff Leaves',
    component: () => import('../views/StaffLeaves.vue')
  },
  {
    path: '/sn_new',
    name: 'New Notice',
    component: () => import('../views/NewNotice.vue')
  },
  {
    path: '/sn_past',
    name: 'Past Notices',
    component: () => import('../views/PastNotices.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
