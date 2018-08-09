<template>
    <ul class="menu-list">
        <li>
            <router-link :to="links.home">主页</router-link>
        </li>
        <li>
            <router-link :to="links.news">新闻</router-link>
        </li>
        <li>
            <router-link :to="{path:links.about,query:{weather:'成都-26℃-33℃'}}">关于</router-link>
        </li>
    </ul>
</template>
<script>
    export default {
        name:'menu-nav',
        data(){
            return{
                links:{
                    home:'/',
                    news:'/news',
                    about:'/about'
                }
            }
        }
    }
</script>
<style>

</style>
