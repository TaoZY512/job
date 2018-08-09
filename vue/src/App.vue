<template>
  <div id="app">
    <Countent :stock = '10' @numberChange="getNum" />
  </div>
</template>

<script>
import Countent from './components/router-countent'

export default {
  name: 'App',
  components: {
    Countent
  },
  methods:{
    getNum(num){
      console.log(`商品数量：${num}`);
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
</style>
