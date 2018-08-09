<template>
 <div  class="tabBar">  
     <!-- 游标 -->
     <div class="cursor" :style="{'left':this.$store.state.left}"></div>

     <ul class="tabBar-list">
        <li class="item" v-for='(link,idx) in links' :key='idx'>
            <Icon class="icon" :type="types[idx]" size='25' color='#fff'></Icon>
            <router-link :to='link.href'>
                {{link.title}}
            </router-link>
        </li>
      </ul>
 </div>
</template>

<script>
export default {
    name:'TabBar',
    data(){
        return{
            types: [
                'ios-home',
                'ios-search-strong',
                'ios-cart',
                'ios-person'
            ],
            links:[
                {
                    title:'主页',
                    href:'/'
                },
                 {
                    title:'搜索',
                    href:'/search'
                },
                 {
                    title:'购物车',
                    href:'/shoppingcar'
                },
                 {
                    title:'我的',
                    href:'/mine'
                }
            ]
        }
    },
    watch:{
    $route(to,form){
         switch(to.name){
           case'home':{
               this.$store.commit('changeTitle','主页');
            //  this.$store.state.title='主页'
           }break;
           case'search':{
            //  this.$store.state.title='搜索'
            this.$store.commit('changeTitle','搜索');
           }break;
           case'shoppingcar':{
            //  this.$store.state.title='购物车'
            this.$store.commit('changeTitle','购物车');
           }break;
           case'mine':{
            //  this.$store.state.title='个人中心'
            this.$store.commit('changeTitle','个人中心');
           }break;
         }
    }
  }
}
</script>

<style scoped>
.tabBar, .tabBar-list{
    height:49px;
    

}
.tabBar{
position: relative;
height:49px;
background: #333;
}
.cursor{
    width:25%;
    height:49px;
    position:absolute;
    top:0;
    transition: all .5s linear;
    background: purple
}
.item{
    width: 25%;
    height: 49px;
    background: transparent;
    cursor: pointer;
    float: left;
    position: relative;
    padding:3px 0;
}
.item .icon{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}
.item a{
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 11px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 10;
}
</style>
