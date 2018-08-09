<template>
  <div>
    <!-- 自定义指令 -->
    <!-- <label for="">自定义指令</label> -->
    <input type="text" v-focus="{color:'red',padding:'6px'}" >
  </div>
</template>
<script>
export default {
  name:'Directive',
  // 自定义指令
  directives:{
    focus:{
      // 当绑定元素插入到dom元素中
      inserted(el ,binding){
        // 自动获取焦点
        el.focus();
        el.style.outline = 'none';
        el.style.border = `1px solid ${binding.value.color}`
        el.style.padding=`${binding.value.padding}`

      }
    }
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>

</style>


