import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Person from '@/components/person'
import Search from '@/components/search'
import Shopping from '@/components/shopping'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/person',
            name:'person',
            component:Person
        },
        {
            path:'/search',
            name:'search',
            component:Search
        },
        {
            path:'/shopping',
            name:'shopping',
            component:Shopping
        }
    ]
})