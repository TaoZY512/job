<template>
    <div class="home-ct">
        主页内容01
        <button @click="goAbout">跳转至关于</button>
    </div>
</template>
<script>
export default {
    name:'HomeCt1',
    data(){
        return{}
    },
    methods:{
        goAbout(){
            this.$router.push('/about')
        }
    }
}
</script>
<style>

</style>


