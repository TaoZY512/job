<template>
 <div>
   父亲{{str}}
   <div>
        <input type="text" v-model="tmp">
        <button type="button" @click="send">发送数据</button>
   </div>
   
   <Son @send="getStr" msg ="我是从父组件过来的数据" 
            :birth = "birth"
            :num   = "num * 1"/>
 </div>
</template>
<script>
import Son from './Son'
export default {
    name: 'Parent',
    data(){
    return{
       num:'10',
       birth:'',
       tmp:'',
       str:''
    }
  },
    components: {
       // 注册子组件
        Son
    },
    methods:{
        send(){
          this.birth = this.tmp
        },
        getStr(data){
            this.str = data;
            console.log(data);
        }
    },
    
}
 
</script>
<style scoped>
</style>