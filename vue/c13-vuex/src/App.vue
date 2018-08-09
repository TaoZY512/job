<template>
  <div id="app">
    <!-- :title -->
    
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
   return{
    title:'主页'
   }
  },
  
  components: {
     
  }
}
</script>

<style>
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:16px;
}
  .container{
    height:65.5%;
  }
.content{
  height:calc(100% - 49px - 64px);
  overflow-y: scroll
  }

</style>
