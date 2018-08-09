<template>
    <ul class="menu-list">
        <li v-for="(item,index) in menus" :key="index" :data-page ="item" @click ="menuClick">
            {{ item | uppercase}}
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'MenuNav',
       filters:{
         uppercase(val){
             return val.toUpperCase();
         }
       },
       methods:{
          menuClick(e){
              let page = e.target.dataset.page;
              this.$emit('menuClick',page);
          }
       },
        data(){
          return{
              menus:['Home','News','Mine']
          }
        }
    }
</script>
<style scoped>
  .menu-list{
    width: 500px;
    height: 35px;
    list-style: none;
    padding:0;
    display: flex;
    justify-content: center;
    align-items:center;
}
.menu-list li{
  width:calc(100%/3);
  height: 100%;
  background: pink;
  color:#fff;
  line-height: 35px;
  cursor:pointer;
}
</style>

