<template>
    <div class="contetn">
      <ul>
          <li><router-link :to="links.HomeCt1">我是内容1</router-link></li>
          <li><router-link :to="links.HomeCt2">我是内容2</router-link></li>
      </ul>
      <router-view />
    </div>
</template>
<script>
    export default {
        name:'News',
        data(){
            return{
              links:{
                  HomeCt1:'/home-ct-1',
                  HomeCt2:'/home-ct-2'
              }
            }
        }
    }
</script>
<style scoped>

</style>

