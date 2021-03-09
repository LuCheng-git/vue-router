import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    linkExactActiveClass: 'vue-acitve-class',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/brazil',
        name: 'brazil',
        component: () => import(/* webpackChunkName:'brazil' */'./views/Brazil.vue')
      },
      {
        path: '/hawaii',
        name: 'hawaii',
        component: () => import(/* webpackChunkName: 'hawaii' */'./views/Hawaii.vue')
      },
      {
        path: '/panama',
        name: 'panama',
        component: () => import(/* webpackChunkName: 'panama' */'./views/Panama.vue')
      },
      {
        path: '/jamaica',
        name: 'jamaica',
        component: () => import(/* webpackChunkName: 'jamaica' */'./views/Jamaica.vue')
      },
      {
        path: '/details/:id',
        name: 'DestinationDetails',
        component: () => import(/* webpackChunkName: 'DestinationDetails' */'./views/DestinationDetails.vue')
      },
    ]
})