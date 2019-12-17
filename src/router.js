import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import(/* webpackChunkName: "reactivity" */ './views/Reactivity.vue')
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import(/* webpackChunkName: "todo" */ './views/Todo.vue')
    },
    {
      path: '/todo-vuex',
      name: 'todo-vuex',
      component: () => import(/* webpackChunkName: "todo-vuex" */ './views/TodoVuex.vue')
    }
  ]
})
