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
                  title:'Echarts',
                  url:'/echarts'
              },
               {
                  title:'ElementUi',
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
              }
          ]
        }
    }
}
</script>
<style scoped>
   .menu-list{

   }
   .menu-list li{
      display:inline-block;
      list-style:none;
      margin:0 20px;
   }
   .menu-list li a{
       text-decoration: none;
       color:000;
   }
   .router-link-active{
       color:red;
   }
</style>

