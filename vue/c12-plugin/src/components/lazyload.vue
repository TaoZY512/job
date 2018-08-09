<template>
    <div>   LazyLoad

        <img v-lazy="imgObj">
    </div>
    
</template>
<script>
export default {
    name:'LazyLoad',
    data(){
        return{
          imgObj:{
              src: 'http://img3.imgtn.bdimg.com/gp=0.jpg',
                error: require('../assets/banner1.jpg'),
                loading: require('../assets/banner5.jpg')
          }
        }
    }
}
</script>
<style scoped>

</style>


