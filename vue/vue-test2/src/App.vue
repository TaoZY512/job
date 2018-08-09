<template>
  <div id="app">
    <Navlist />
    <router-view />
  </div>
</template>

<script>

import Navlist from './components/nav-list'
export default {
  name: 'App',
  components: {
     Navlist
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
