<template>
    <div class="content-bottom">
        <ul class="content-bottom-list">
            <!-- 游标 -->
            <div class="cursor" :style="{'left':this.$store.state.left}"></div>
            <li class="item" v-for="(link,index) in links" :key="index">
                <Icon class="icon" :type="types[index]" size='22'/>
               <router-link class="bottom-href" :to='link.url' >{{link.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name:'Classify',
        data(){
            return{
             types:[
            "ios-home-outline",
            "ios-apps-outline",
            "ios-cart-outline",
            // "ios-person-outline"
            "md-person"

              ],
              links:[
                  {
                      url:'/',
                      title:'首页'
                  },
                   {
                      url:'/classify',
                      title:'分类'
                  },
                   {
                      url:'/shoppingcar',
                      title:'购物车'
                  },
                   {
                      url:'/mine',
                      title:'个人中心'
                  },
              ]
            }
        },
        methods:{
           
        }
    }
</script>
<style scoped>  
  .content-bottom{
      width:100%;
      border-top:1px solid #aaa;
      height:49px;
      padding:2px 15px;
      box-sizing: border-box;
      background:#fff;
      position: fixed;
      bottom:0;
      left:0;
      z-index: 4;
  }
  .cursor{
    width:24%;
    height:49px;
    position:absolute;
    top:0;
    transition: all .5s linear;
    background: rgb(235, 110, 61)
}
  .content-bottom-list{
      height: 100%;
      display: flex;
      justify-content: space-between;
  }
  .item{
      width:25%;
      height:100%;
      position:relative;
  }
   .bottom-href{
       display: flex;
       align-items: flex-end;
       justify-content: center;
       width:100%;
       height:100%;
       font-size:14px;
       color:rgb(97, 96, 96);
       z-index: 10;
       position:relative;
   }
   .icon{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        color:rgb(97, 96, 96);
   }
.bottom-hrefO{
       display: flex;
       align-items: flex-end;
       justify-content: center;
       width:100%;
       height:100%;
       font-size:14px;
       color:rgb(216, 97, 97);
       z-index: 10;
       position:relative;
   }
   .iconO{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        color:rgb(216, 97, 97);
   }

</style>

