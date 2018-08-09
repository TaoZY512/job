import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'  //@是设置路径
import Course from '@/pages/course'
import News from '@/pages/news'
import About from '@/pages/about'
import Html from '@/pages/html'
import Css from '@/pages/css'
import Js from '@/pages/js'
import HomeCt1 from '@/pages/home-ct-1'
import HomeCt2 from '@/pages/home-ct-2'
Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
    routes:[
      {
        path:'/',  //设置路由的路径
        name:'home', //设置路由名称
        components:{
          default:Home,
          HomeCt1,
          HomeCt2
        }
      },
      {
        path:'/course',  //设置路由的路径
        name:'course', //设置路由名称
        component:Course,
        redirect:'/course/html',
        children:[
          {
            path:'html',
            component:Html
          },
          {
            path:'css',
            component:Css
          },
          {
            path:'js',
            component:Js
          }
        ]
      },
      {
        path:'/news',  //设置路由的路径
        name:'news', //设置路由名称
        component:News
      },
      {
        path:'/about',  //设置路由的路径
        name:'about', //设置路由名称
        component:About,
        alias:'guanyu', //设置别名
        props: (route) => ({ query: route.query.q })
      }
    ]
  });