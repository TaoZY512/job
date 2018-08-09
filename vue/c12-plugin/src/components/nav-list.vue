<template>
    <div>  
        <ul class="menu-list">
            <li v-for="(link,index) in links" :key="index">
                <router-link :to="link.url" exact>{{link.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'NavList',
    data(){
        return{
           links:[
               {
                   title:'自定义指令',
                   url:'/'
               },
               {
                   title:'ElementUI',
                   url:'/element-ui'
               },
               {
                   title:'Iview',
                   url:'/iview'
               },
               {
                   title:'Lazyload',
                   url:'/lazyload'
               },
               {
                   title:'Swiper',
                   url:'/swiper'
               },
               {
                   title:'Echarts',
                   url:'/echarts'
               }
           ]
               
           
        }
    }
}
</script>
<style scoped>
   .menu-list{
       list-style: none;
       padding:0;
   }
   .menu-list li{
       margin:0 16px;
       display: inline-block;
   }
    .menu-list li a{
        text-decoration: none
    }
    .menu-list li a:hover{
        text-decoration: underline;
        /* color:red; */
    }
    .router-link-active{
        color:red;
    }
</style>


