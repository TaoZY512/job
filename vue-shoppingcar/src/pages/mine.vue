<template>
 <div class="mine-box">
    <div class="content">
        <div class="content-center">
          <div class="mine-top">
              <div class="mian-samall-img">
              </div>
              <p class="name">{{this.$store.state.username}}</p>
          </div>
       </div>
       <div class="main-center">
           <section>
               <p @click="alertPerson">设置个人资料 
                   <img src="../assets/mine-img/right.png" alt="">
                </p>
               <p @click="alertAddress">收获和地址管理
                  <img src="../assets/mine-img/right.png" alt="">
               </p>
           </section>
           <section>
               <p>我的订单
                   <img src="../assets/mine-img/right.png" alt="">
               </p>
               <p>我的评价
                   <img src="../assets/mine-img/right.png" alt="">
               </p>
           </section>
           <section>
               <p>商品收藏
                   <img src="../assets/mine-img/right.png" alt="">
               </p>
               <p>店铺收藏
                   <img src="../assets/mine-img/right.png" alt="">
               </p>
               <p>浏览记录
                   <img src="../assets/mine-img/right.png" alt="">
               </p>
           </section>
           <section class="mine-btn">
               <button  class="login" v-if="!subSure" @click="isShade = !isShade">登录</button>
               <button  class="login" v-if="subSure" @click="closeBtn">退出登录</button>
               <!-- <button class="register">注册</button> -->
           </section>
           <div class="login-box" v-if="isShade">
                <form action="#">
                    <p @click="isLogin = !isLogin">
                        <span v-if="isLogin">没有账号？立即注册</span>
                        <span v-if="!isLogin">切换到登录</span>
                    </p>
                    <!-- 登录 -->
                    <div v-show="isLogin" class="userlogin">
                        <img @click="userClose" class="close" src="../assets/details/close.png" alt="">
                    <p><input type="text" placeholder="请输入账号" key="username" v-model="username"></p>
                    <p><input type="password" placeholder="请输入密码" key="password" v-model="password"></p>
                    <button type="button" class="login" @click = "userLogin">登录</button>
                    </div>
                    <!-- 注册 -->
                    <div v-show="!isLogin" class="userlogin">
                        <img @click="userClose" class="close" src="../assets/details/close.png" alt="">
                    <p><input type="text" placeholder="请输入账号" key="user" v-model="reUser"></p>
                    <p><input type="password" placeholder="请输入密码" key="pass" v-model="rePass"></p>
                    <p><input type="phone" placeholder="请输入电话号码" key="phone" v-model="rePhone"></p>
                    <button type="button" class="register" @click="userget">注册</button>
                    </div>
                </form>
           </div>
           <div class="shade" v-if="isShade">
               <div class="material">
                   
               </div>
           </div>
       </div>
       <MenuBottom />
    </div>
     <!-- <div class="right">
          123423434
     </div> -->
    </div>
</template>
<script>
    import MenuTop from '../components/menu-top'
    import MenuBottom from '../components/menu-bottom'
    export default {
        name:'Mine',
        data(){
            return{
              subSure:false,
              isLogin:true,
              isShade:false,
              username:'',
              password:'',
              reUser:'',
              rePass:'',
              rePhone:''
            }
        },
        components:{
          MenuTop,
          MenuBottom
        },
        mounted(){
          this.getUser()
        },
        methods:{
            // 修改个人资料
            alertPerson(){
              this.$router.push({
                 name:'person'
              })
            },
            userClose(){
               this.isShade = false;
            },
            // 修改地址
            alertAddress(){
              this.$router.push({
                  name:'address'
              })
            },
            // 获取用户名
            getUser(){
              if(sessionStorage.userInfo){
                  var userStroge = JSON.parse(sessionStorage.userInfo);
                  var username = userStroge[0].username;
                //  this.state = username;
                 this.subSure = true;
                 this.$store.commit('changeUsername',username)
              }else{
                //   this.state = '未登录'
                this.$store.commit('changeUsername','未登录')
              }
            
            },
            // 退出登录
            closeBtn(){
                sessionStorage.clear(),
                this.subSure = false;
                this.$store.commit('changeUsername','未登录')
            },
            // 登录
            userLogin(){
                 if(!this.username | !this.password){
                    alert('请完善信息')
                 }else{
                     Bmob.User.logIn(this.username,this.password,{
                         success:(user) => {
                              alert('登录成功')
                              this.isShade = false;
                              this.subSure=true;
                              this.$store.commit('changeUsername',this.username);
                               var data=[],
                               stroge = sessionStorage.getItem("userInfo");
                               if(stroge){
                                   data = JSON.parse(stroge)
                               }
                            //存放数据
                            data.push({
                                username:this.username
                            });
                            var dataStr = JSON.stringify(data);
                            sessionStorage.setItem('userInfo',dataStr)
                            
                         },
                         error:(user,error) => {
                             alert('用户名不存在或是密码错误！')
                         }
                     })
                 }
            },
            // 注册
            userget(){
                if(!this.reUser | !this.rePass | !this.rePhone){
                    alert('请完善信息')
                }else if(!/^[0-9a-zA-Z_-]{4,16}$/.test(this.reUser) | !/^[0-9a-zA-Z_-]{4,16}$/.test(this.rePass) |!/^1[0-9]{10}$/.test(this.rePhone)){
                    alert('输入格式不正确')
                }else{
                    let user = new Bmob.User();
                    user.set("username",this.reUser);
                    user.set("password",this.rePass);
                    user.set("phone",this.rePhone);
                    // 执行注册
                    user.signUp(null,{
                        success:(user) =>{
                            alert('恭喜您！注册成功')
                            this.isShade = false;
                            this.subSure=true;
                            this.$store.commit('changeUsername',this.reUser)
                            var data=[],
                               stroge = sessionStorage.getItem("userInfo");
                               if(stroge){
                                   data = JSON.parse(stroge)
                               }
                            //存放数据
                            data.push({
                                username:this.username
                            });
                            var dataStr = JSON.stringify(data);
                            sessionStorage.setItem('userInfo',dataStr)
                       },
                        error:(user,error) =>{
                            let alertMsg = "";
                            switch(error.code) {
                                case 202: {
                                    alert('用户名已存在')
                                }break;
                            }
                        }
                    })
                }
            }
        }
    }
</script>
<style scoped>
   .mine-top{
    width: 100%;
    height: 100px;
    padding:0 20px;
    background: rgb(235, 110, 61);
    display: flex;
    align-items: center;
    margin-bottom:10px;
 }
 .mian-samall-img{
     width:70px;
     height:70px;
     border-radius: 50%;
     background: url('../assets/mine-img/head-pic.jpg') center center;
 }
</style>

