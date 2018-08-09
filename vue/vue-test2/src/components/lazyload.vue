<template>
    <div>
    <ul>
  <li v-for="(img,index) in list" :key="index">
    <img v-lazy="img" >
  </li>
</ul>
    </div>
</template>
<script>
export default {
    name:'Lazyload',
    data(){
        return{
          list:[
              require('../assets/logo.png')
          ]
        }
    }
}
</script>
<style scoped>

</style>

