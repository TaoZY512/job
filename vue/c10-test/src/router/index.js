import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import News from '@/pages/News'
import About from '@/pages/About'
import HomeCt1 from '@/pages/home-ct-1'
import HomeCt2 from '@/pages/home-ct-2'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            components:{
                default:Home,
                HomeCt1,
                HomeCt2
            }
        },
        {
            path:'/news',
            name:'news',
            component:News
        },
        {
            path:'/about',
            name:'about',
            component:About,
            alias:'guanyu',
            props: (route) => ({ query: route.query.q })
        }
    ]
});