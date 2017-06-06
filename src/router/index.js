import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import storeList from '../components/storeList'
import shopList from '../components/shopList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Hello/:helloId',
      name: 'Hello',
      component: Hello,
      /*subRoutes: {
	      path: '/storeList/:storeId',
      	name: 'storeList',
      	component: storeList
	    }*/
    },
    {
      path: '/storeList/:storeId',
      name: 'storeList',
      component: storeList
    },
    {
      path: '/shopList/:listId',
      name: 'shopList',
      component: shopList
    }
  ]
})
