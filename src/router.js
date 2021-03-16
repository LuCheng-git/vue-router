import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

import store from './store'

Vue.use(Router)

export default new Router({
    mode:'history',
    linkExactActiveClass: 'vue-acitve-class',
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
        path: "/404",
        alias: '*',
        name: "notFound",
        component: () => import(/*webpackChunkName: 'NotFound'*/ './views/NotFound.vue')
      }
    ]
})