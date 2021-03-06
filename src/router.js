import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

import store from './store'

Vue.use(Router)

const router = new Router({
    mode:'history',
    linkExactActiveClass: 'vue-acitve-class',
    scrollBehavior(to, from, savedPosition){
      if(savedPosition){
        return savedPosition
      } else {
        const position = {};
        if(to.hash){
          position.selector = to.hash;
          if(to.hash === '#experience') {
            console.log('eee')
            position.offset = {y:140}
          }
          if(document.querySelector(to.hash)){
            return position;
          }
          return false
        }
      }
    },
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
        props: true,
      },
      {
        path: '/details/:slug',
        name: 'DestinationDetails',
        component: () => import(/* webpackChunkName: 'DestinationDetails' */'./views/DestinationDetails.vue'),
        props: true,
        children:[
          {
            path:":experienceSlug",
            name:'experienceDetails',
            props: true,
            component: () => import(/*webpackChunkName: 'ExperienceDetails' */ './views/ExperienceDetails.vue')
          }
        ],
        beforeEnter:(to, from, next) => {
          const exists = store.destinations.find(
            destination => destination.slug === to.params.slug
          ) 
          if(exists) {
            next()
          }else {
            next({name:"notFound"})
          }
        },
      },
      {
        path: "/user",
        name: "user",
        component: () => import(/*webpackChunkName: 'User'*/ './views/User.vue'),
        meta: {requiresAuth: true},
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/*webpackChunkName: 'Login'*/ './views/Login.vue')
      },
      {
        path: '/invoices',
        name: 'invoices',
        component: () => import(/*webpackChunkName: 'Invoice'*/ './views/Invoices.vue'),
        meta: {requiresAuth:true}
      },
      {
        path: "/404",
        alias: '*',
        name: "notFound",
        component: () => import(/*webpackChunkName: 'NotFound'*/ './views/NotFound.vue'),
      }
    ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.user){
      next({
        name:"login",
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  }else {
    next();
  }
})

export default router 