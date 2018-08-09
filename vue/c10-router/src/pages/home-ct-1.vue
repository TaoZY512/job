<template>
    <div class="home-ct">
        主页内容01
        <button  type="button" @click="goAbout">跳转至关于页</button>
    </div>
</template>
<script>
export default {
    name:'HomeCt1',
    data(){
        return{
            
        }
    },
    methods:{
        goAbout(){
            this.$router.push({
                path:'/guanyu',
                query:{
                    weather:'成都-雷雨-20摄氏度'
                }
            })
        }
    }
}
</script>
<style>

</style>

