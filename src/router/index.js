import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/list'
import Alist from '@/pages/a'
import Blist from '@/pages/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/a',
      name: 'Alist',
      component: Alist
    }, {
      path: '/b',
      name: 'Blist',
      component: Blist
    }
  ]
})
