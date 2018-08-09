<template>
    <div class="container">

        <div class="navigationbar">
            <!-- 返回按钮 -->
            <Icon class="goback-btn" v-if="goback" type="chevron-left" @click = "gobackclick"></Icon>
            <h3 class="title">
           <!-- {{title}} -->
           {{this.$store.state.title}}
           </h3>
    </div>
    </div>
</template>
<script>
export default {
    name:'navigationbar',
    data(){
        return{
         
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
    // props:{
    //     title:{
    //         type:String,
    //         required:true
    //     }
    // }
}
</script>
<style scoped>
  .navigationbar{
      height:64px;
      background:#333;
      color:#fff;
      position:relative
  }
    .navigationbar .title{
        text-align:center;
        line-height:64px;
        letter-spacing: 5px;
    }
    .goback-btn{
      position: absolute;
      top:50%;
      transform: translateY(-50%);
      cursor: pointer;
      left:16px;
    }
</style>


