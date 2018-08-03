<template>
   <div class="content-top">
    
       <img class="goback-btn" src="../assets/return.png" alt="" v-if="goback" type="chevron-left" @click = "gobackclick">
       <h3>{{this.$store.state.title}}</h3>
   </div>
</template>
<script>
    export default {
        name:'Classify',
        data(){
            return{
              title:'首页'
            }
        },
         methods:{
        gobackclick(){
            this.$router.go(-1)
        }
    },
        props:{
        goback:{
            type:Boolean,
            default:false
        }
    }
    }
</script>
<style scoped>
  .content-top{
      width:100%;
      height:58px;
      font-size:16px;
      background:rgb(235, 110, 61);
      position: relative;
  }
  .content-top>h3{
      line-height: 64px;
      color:#fff;
      font-weight: 500;
  }
  .goback-btn{
      width:30px;
      height:30px;
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      cursor: pointer;
      left:16px;
      z-index:99;
    }
</style>

