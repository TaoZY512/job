<template>
    <div class="content">
        <MenuTop :goback="true"/>
        <div class="content-center">
          
           <div class="address" >
            <p>
             姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名 
             <input type="text" placeholder="请填写您的真实姓名" v-model="name" >
            </p>
            <p>
             联系电话 
             <input type="text" placeholder="请填写您的电话号码" v-model="phone" >
            </p>
            <p>
             邮政编码 
             <input type="text" placeholder="请填写收货地区的邮政编码" v-model="code">
            </p>
          <div data-toggle="distpicker" >
            <select data-province="---- 选择省 ----" v-model="address1"></select>
            <select data-city="---- 选择市 ----" v-model="address2"></select>
            <select data-district="---- 选择区 ----" v-model="address3"></select>
            </div>  
               <!-- <area-select v-model="selected"></area-select>
               <area-cascader v-model="selected2"></area-cascader> -->

<!-- //setting -->
                <!-- <area-select type='all' :level='2' v-model="selected"></area-select>
                <area-cascader type='all' v-model="selected2" :level='2'></area-cascader> -->
          
            <p>
             详细地址 
             <input type="text" placeholder="请填写详细的街道、楼栋、门牌号" v-model="detail" >
            </p>
           <p>
               <button type="button" class="verify-btn" @click="verifyBtn">确认地址</button>
           </p>
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
                address1:'',
                address2:'',
                address3:'',
                name:'',
                phone:'',
                code:'',
                detail:'',
                getUseradd:[]
                
            }
        },
        components:{
          MenuTop
        },
        mounted() {
            $('#target').distpicker({
            province: '---- 所在省 ----',
            city: '---- 所在市 ----',
           district: '---- 所在区 ----'
        });  
            // $('#target').distpicker();
            this.getAddress();
        },
        methods:{
            verifyBtn(){
              
              
               var userAddress = Bmob.Object.extend('Address');
               var getUserAddress = new userAddress;
               getUserAddress.set("userName",this.$store.state.username)
               getUserAddress.set("name",this.name);
               getUserAddress.set("phone",this.phone);
               getUserAddress.set("code",this.code);
               getUserAddress.set("address",this.address1 + '-' + this.address2 + '-' + this.address3);
               getUserAddress.set("detail",this.detail);
               getUserAddress.save(null,{
                   success:function(getUserAddress){
                    //    alert('数据添加成功,返回的objectId是' +  getUserAddress.id)
                    alert('数据添加成功')
                   },
                   error:function(getUserAddress,error) {
                       alert('数据添加失败，返回错误信息' + error.description)
                   }
               })
            },
            getAddress(){
                
                var GameAddress = Bmob.Object.extend('Address');
                var query = new Bmob.Query(GameAddress);
                query.equalTo("userName",this.$store.state.username);
                query.find({
                    success: function(results) {
                        // console.log(results[0].attributes)
                        this.getUseradd = results[0].attributes;
                        // alert("共查询到 " + results.length + " 条记录");
                        // 循环处理查询到的数据
                        for (var i = 0; i < results.length; i++) {
                        var object = results[i];
                        // alert(object.id + ' - ' + object.get('playerName'));
                        }
                    },
                    error: function(error) {
                        alert("查询失败: " + error.code + " " + error.message);
                    }
                });
            }
        }
    }
</script>
<style scoped>
  .address{
      padding:20px;
      font-size:14px;
      text-align:left;
      color:#333;
  }
  .address p{
      margin-bottom:10px;
      border-bottom:1px solid rgb(211, 208, 208);
      padding:14px 3px;

  }
 .address input{
     width:260px;
     height:25px;
     padding-left:6px;
     border-radius:6px;
     outline:none;
     border:0;
     background: transparent;

 }
 .address button{
     width:100%;
     height:36px;
      outline:none;
     border:0;
     border-radius:6px;
     background: #eb6e3d;
     color:#fff;
     font-size:16px;
     margin-top:20px;

 }
</style>

