<template>
    <ul class="menu-list">
      <li>
        <router-link :to="links.home" >主页</router-link>
      </li>
      <li>
        <router-link :to="links.course">课程</router-link>
      </li>
      <li>
        <!-- <router-link to="/news/cc/21/前端工程师">新闻</router-link> -->
        <!-- <router-link :to="links.news">新闻</router-link> -->
        <!-- 注意：使用path会忽略params参数 -->
        <router-link :to="{name: 'news', params: {name:'xiaoxiao', age:21, job: 'Web前端工程师'}}">新闻</router-link>
        

      </li>
      <li>
          <router-link :to="{path:links.about,query:{weather:'成都-26℃-33℃'}}">关于</router-link>
        <!-- <router-link :to="links.about">关于</router-link> -->
      </li>
    </ul>
</template>
<script>
    export default {
        name:'menu-nav',
        data(){
            return{
                // 集中管理路由跳转链接
              links:{
                  home:'/',
                  course:'/course',
                  news:'/news',
                  about:'/about'
              }
            }
        }
    }
</script>
<style scoped>
    .menu-list{
        background: pink;
    }
  .menu-list li{
      display: inline-block;
      margin:0 16px;
  }
  .menu-list li a{
      color:#fff
  }
  .menu-list li:hover{
      text-decoration: underline;
  }
  .active{
  color:red;
}
</style>

