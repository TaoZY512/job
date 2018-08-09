<template>
   <div class="container">
        <NavigationBar :goback="true"/>
       <!-- <Tabbar /> -->
        <div class="content">
       详情页
       {{val}}
    </div>
   </div>
</template>
<script>
 import Tabbar from '../components/tabbar'
 import NavigationBar from '../components/navigationbar'
export default {
    name:'Details',
    data(){
        return{
            //  val:this.$route.params.msg
            val:'金钗雪里埋'
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


