<template>
    <div class="content">
        <ul class="l-menu">
            <li><router-link :to="links.html">HTML</router-link></li>
            <li><router-link :to="links.css">CSS</router-link></li>
            <li><router-link :to="links.js">JS</router-link></li>
        </ul>
        <router-view />
    </div>
</template>
<script>
export default {
    name:'Course',
    data(){
         return{
            links:{
                html:'/course/html',
                css:'/course/css',
                js:'/course/js'
            }
        }
    }
}
</script>
<style scoped>
.content{
    width:100%;
    height: 300px;
    display:flex;
    justify-content: center;
    align-items: center;
}
  .l-menu{
      height:100%;
      width:10%;
      background: rgb(109, 99, 241);
  }
  .r-content{
      height:100%;
      width:90%;
      background: rgb(69, 190, 226);
  }
</style>


