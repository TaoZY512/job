<template>
  <div id="app">
    <img src="./assets/logo.png">
   <!-- <menuNav @menuClick ="tab"/>
   <component :is="curPage"></component>
   -->
  <Tea />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MenuNav from './components/dynamic/menuNav'
import Home from './components/dynamic/home'
import Mine from './components/dynamic/mine'
import News from './components/dynamic/news'

import Tea from './components/tea'

export default {
  name: 'App',
  methods:{
   tab(val){
     this.curPage = val;
   }
  },
  data(){
    return{
     curPage:"Home"
    }
  },
  components: {
    HelloWorld,
    MenuNav,
    Home,
    Mine,
    News,
    Tea
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
</style>
