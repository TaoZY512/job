import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '@/pages/home'
import Classify from '@/pages/classify'
import Shoppingcar from '@/pages/shoppingcar'
import Mine from '@/pages/mine'
import Details from '@/pages/details'
import Top from '@/pages/top'
import Bottom from '@/pages/bottom'
import Person from '@/pages/person'
import Address from '@/pages/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:(to,from,next) => {
        store.commit('changeTitle','首页');
        store.commit('changeLeft','3%');
        next();
      }
    },
    {
      path: '/classify',
      name: 'classify',
      children:[
        {
          path: '/top',
          name: 'top',
          component: Top,
         
        },
        {
          path: '/bottom',
          name: 'bottom',
          component: Bottom,
         
        }
      ],redirect:'/top',
      component: Classify,
      beforeEnter:(to,from,next) => {
        store.commit('changeTitle','分类');
        store.commit('changeLeft','26.5%');
        next();
      }
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: Shoppingcar,
      beforeEnter:(to,from,next) => {
        store.commit('changeTitle','购物车');
        store.commit('changeLeft','49.5%');
        next();
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter:(to,from,next) => {
        store.commit('changeTitle','个人中心');
        store.commit('changeLeft','73%');
        next();
      }
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      beforeEnter:(to,from,next) => {
        store.commit('changeTitle','商品详情');
        next();
      }
    },
    {
      path: '/person',
      name: 'person',
      component: Person,
      beforeEnter:(to,from,next) => {
        store.commit('changeTitle','修改个人资料');
        next();
      }
    },
    {
      path: '/address',
      name: 'address',
      component: Address,
      beforeEnter:(to,from,next) => {
        store.commit('changeTitle','收货地址');
        next();
      }
    }
    
  ]
})
