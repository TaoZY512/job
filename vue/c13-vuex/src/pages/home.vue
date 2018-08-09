<template>
    <div class="container">
         <NavigationBar/>
        <div class="content">
            <Input class="input" v-model="val" placeholder="Enter something..." clearable style="width: 200px"></Input>
            <Button @click="goDetails">前往详情页</Button>
        </div>
        <Tabbar />
     </div>
</template>
<script>
 import Tabbar from '../components/tabbar'
 import NavigationBar from '../components/navigationbar'
export default {
    name:'Home',
   
    data(){
        return{
            val:'金钗雪里埋'
        }
    },
     components: {
     Tabbar,
     NavigationBar
  },
    methods:{
        goDetails(){
        
           this.$router.push({
               name: 'details',
                params: {msg:this.val}
               })
          
           
        }
    }
}
</script>
<style scoped>
   .content{
       text-align: center;
   }
  .input{
    margin:20 auto;
  }
  p{
    margin-bottom:20px;
  }
</style>


