<template>
    <div class="container">
         <NavigationBar />
        <div class="content">
      购物车
    </div>
    <Tabbar />
    </div>
</template>
<script>
 import Tabbar from '../components/tabbar'
 import NavigationBar from '../components/navigationbar'
export default {
    
    name:'Shoppingcar',
    data(){
        return{

        }
    },
     components: {
     Tabbar,
     NavigationBar
  }
}
</script>
<style scoped>

</style>


