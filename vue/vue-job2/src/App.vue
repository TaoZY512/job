<template>
  <div id="app">
    <router-view/>
    <transition name="menuSkip">
       <ul class="menu-list">
        <li><router-link :to="links.home">主页</router-link></li>
        <li><router-link :to="links.search">搜索</router-link></li>
        <li><router-link :to="links.shopping">购物</router-link></li>
        <li><router-link :to="links.person">个人中心</router-link></li>
     </ul>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      links:{
        home:'/',
        shopping:'/shopping',
        search:'/search',
        person:'/person'
      }
    }
  }
}
</script>

<style>
.menuSkip-enter-active,.menuSkip-leave-active{
   transition:all .75s linear;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
} */

*{
  margin:0;
  padding:0;
}
a,li{
 text-decoration: none;
  list-style: none;
}
.menu-list{
  width:100%;
  height:50px;
  position:fixed;
  bottom:0;
  left:0;
  display: flex;
  justify-content: space-around;
  background: #2c3e50
}
.menu-list li{
  width:25%;
  height:100%;
  text-align: center
}
.menu-list li:hover{

  background: rgb(92, 95, 243);
}
.menu-list li a{
  line-height: 50px;
  color:#fff;
}
.content .top{
  width:100%;
  height:40px;
  background: #2c3e50;
  color:#fff;
  text-align:center;
  line-height: 40px;
}
</style>
