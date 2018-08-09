 <template>
    <div>
        我是老师
        <input type="text" v-model="data">
        <button type="button" @click ="send">提交</button>
        <Stu 
        :birthday = 'birthday'
    
        />
    </div>
</template>

<script>
   import Stu from './stu';
    export default {
      name:'tea',
      components:{
         Stu
      },
      data(){
          return{
            data:'',
            birthday:'',
          }
      },
      methods:{
          send(){
           this.birthday = this.data;
           this.data = '';
          }
      }
    }
</script>
<style scoped>

</style>

