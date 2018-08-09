<template>
    <div>
        我是学生
        <p>{{getBarn}}</p>
    </div>
</template>
<script>
    export default {
      name:'stu',
      data(){
          return{

          }
      },
       props:{
          birthday:{
              type:[String,Number]
          }
      },
      computed:{
           getBarn(){
               let year = this.birthday.slice(6,8);
               let month = this.birthday.slice(8,10);
               let day = this.birthday.slice(10,12);
               return `出生年${year}月${month}日${day}`
           }

      }
     
    }
</script>
<style scoped>

</style>

