<template>
    <div class="container">
       <NavigationBar />
       <div class="content">
        个人中心
      </div>
      <Tabbar />
    </div>
    
</template>
<script>
import Tabbar from '../components/tabbar'
 import NavigationBar from '../components/navigationbar'
export default {
    
    name:'Mine',
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


