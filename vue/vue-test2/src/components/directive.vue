<template>
    <div>
        Directive
        <input type="text" v-focus>
    </div>
</template>
<script>
export default {
    name:'Directive',
   directives: {
  focus: {
    // 指令的定义
    inserted(el) {
      el.focus()
      el.style.padding='6px';
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

