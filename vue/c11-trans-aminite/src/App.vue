<template>
  <div id="app">
    <ul class="menu-list">
      <li data-page="Home" @click="btnClick" key="home">主页</li>
      <li data-page="News" @click="btnClick" key="news">新闻</li>
      <li data-page="About" @click="btnClick" key="about">关于</li>
    </ul>
    <div class="container">
      <transition name="slide" mode="out-in">
       <component :is="page"></component>
      </transition>
    </div>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Home from './components/home'
import About from './components/about'
import News from './components/news'
export default {
  name: 'App',
  data(){
    return{
      page:'Home'
    }
  },
  components:{
    Home,
    News,
    About

  },
  methods:{
    btnClick(e){
      this.page = e.target.dataset.page;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu-list li{
  list-style:none;
  cursor:pointer;
  display:inline;
}
.menu-list li:hover{
  text-decoration: underline
}
.content{
  width: 300px;
  height: 100px;
  padding:8px;
  box-sizing: border-box;
  position:absolute;
  left:0;
  top:0;
}
.slide-enter-active,.slide-leave-active{
    transition:all .5s linear 
}
.slide-leave,
.slide-enter-to{
    transform: translate(0);
    color:#000;
}
.slide-leave-to,
.slide-enter{
    transform: translate(200px);
    color:blue;
}
.container{
  width: 300px;
  height: 100px;
  position:relative;
  margin:0 auto;
}

</style>
