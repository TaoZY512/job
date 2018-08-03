<template>
    <div class="content">
        <MenuTop />
        <div class="content-center">
            
                <ul class="classify-box">
                  <li v-for="(link,index) in links" :key="index">
                     <router-link :to="link.url">{{link.title}}</router-link>
                  </li>
                </ul>
          
       
        <div>
          <router-view />
        </div>
       </div>
       <MenuBottom />
    </div>
</template>
<script>
    import MenuTop from '../components/menu-top'
    import MenuBottom from '../components/menu-bottom'
    import Top from '../pages/top'
    import Bottom from '../pages/top'
    export default {
        name:'Classify',
        data(){
            return{
                 activeName: 'second',
               links:[
                  {
                      url:'/top',
                      title:'上装'
                  },
                   {
                      url:'/bottom',
                      title:'下装'
                  }
               ]
            }
        },
        components:{
          MenuTop,
          MenuBottom,
          Bottom,
          Top
        },
        methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
    }
</script>
<style scoped>
   .classify-box{
       width:100%;
       margin:20px auto;
       display: flex;
       justify-content: flex-start;
       border-bottom:1px solid #999;
   }
   .classify-box li{
        margin-right:20px;
   }
   .classify-box li a{
       font-size:16px;
       color:#333;
   }
   .list{
       width:100%;
       height:40px;
   }
   .list>button{
       padding:10px;
       border-radius:18px;
       background: linear-gradient(157deg,orange,#eb6e3d);
       outline:none;
       border:0;
       margin-left:10px;
   }
   .list>input{
       width:180px;
       height:34px;
       padding-left:6px;
   }
</style>

