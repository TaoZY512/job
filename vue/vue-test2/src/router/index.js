import Vue from 'vue'
import Router from 'vue-router'
import Directive from '@/components/directive'
import ElementUi from '@/components/element-ui'
import Swiper from '@/components/swiper'
import LazyLoad from '@/components/lazyload'
import IView from '@/components/iview'
import Echarts from '@/components/echarts'
Vue.use(Router)

export default new Router({
    routes:[
        { 
          path:'/',
          name:'Directive',
          component:Directive
        },
        { 
            path:'/element-ui',
            name:'ElementUi',
            component:ElementUi
          },
          { 
            path:'/swiper',
            name:'Swiper',
            component:Swiper
          },
          { 
            path:'/lazyload',
            name:'LazyLoad',
            component:LazyLoad
          },
          { 
            path:'/iview',
            name:'IView',
            component:IView
          },
          { 
            path:'/echarts',
            name:'Echarts',
            component:Echarts
          }
    ]
})