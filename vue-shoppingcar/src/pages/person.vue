<template>
    <div class="content">
        <MenuTop :goback="true" />
        <div class="content-center">
           <div class="person">
               <section>
                   <span>昵称</span>
                   <input type="text" placeholder="请输入昵称">
               </section>
               <section>
                   <span>Email</span>
                   <input type="text" placeholder="请填写您的安全邮箱">
               </section>
               <section>
                   <span>性别</span>
                   <div style="display:inline-block">
                    <el-radio-group v-model="radio4" size="medium" >
                    <el-radio-button label="男" ></el-radio-button>
                    <el-radio-button label="女"></el-radio-button>
                    <el-radio-button label="保密"></el-radio-button>
                    </el-radio-group>
                   </div>

               </section>
               <section>
                   <span>生日</span>
                   <div style="display:inline-block">
                        <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="选择日期">
                        </el-date-picker>
                    </div>
               </section>
               <section>
                   <span>个人描述</span>
                   <textarea name="" id="" cols="50" rows="2" maxlength="200" placeholder="填写个性签名"></textarea>
               </section>
               <section>
                   <button type="button" @click="sureBtn">确认修改</button>
               </section>
           </div>
       </div>
    </div>
</template>
<script>
    import MenuTop from '../components/menu-top'
    export default {
        name:'Shoppingcar',
        data(){
            return{
                 radio4: '保密',
                pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
            }
        },
        components:{
          MenuTop
        },
        methods:{
            sureBtn(){
                this.$router.push({
                    name:'mine'
                })
            }
        }
    }
</script>
<style scoped>
   .person{
       padding:20px 10px;
       text-align: left;
   }
   .person>section{
       padding:10px 3px;
       border-bottom:1px solid rgb(219, 218, 218);
   }
   .person>section>span{
       font-size:14px;
       color:#333;
       margin-right:10px;
   }
   .person>section>input,textarea{
       padding-left:6px;
       outline:none;
       border:0;
       background:transparent;
       font-size:14px;
   }
   .person>section>textarea{
       padding:3px;
   }
   .person>section>button{
       width:100%;
       height:35px;
       outline:none;
       border:0;
       background:linear-gradient(157deg,orange,#eb6e3d);
       border-radius:3px;
       color:#fff;
       font-size:14px;
       letter-spacing: 2px;
   }
</style>

