<template>
    <div class="content">
        <div class="content-center">
            <div class="goods-list">
                 <div class="list">
            <input type="text" v-model="keywords" placeholder="搜索"> 
           <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
           <div class="goods-news">
             
               <section class="single" v-for="(item,index) in filterArr()" :key="index" :data-page="index">
                <a href="javascript:;" @click="goDetails">
                 <img class="goods-img" :src="item.imgs[0]" alt="">
                
                 <p class="goods-title">{{item.title}}</p>
                 <p class="price">￥{{item.barginprice}}</p>
                 </a>
              </section>
             
           </div>
        </div>
       </div>
       <MenuBottom />
    </div>
</template>
<script>
    import MenuTop from '../components/menu-top'
    import MenuBottom from '../components/menu-bottom'
    export default {
        name:'Top',
        data(){
            return{
                datalist:[],
                keywords:''
            }
        },
        components:{
          MenuTop,
          MenuBottom
        },
         mounted(){
      this.get()
    },
    methods:{
    // GET请求
        get(){
          this.$axios.get('./../static/json/goods.json',{
           
          })
            .then(response =>{
              this.datalist = response["data"]['goodsshort'];
              
          })
          .catch(error => {
            console.log(error);
          })
        },
        goDetails(e){
           var number = e.currentTarget.parentElement.dataset.page;
            var name = ['goodsshort'];
           this.$store.commit('changeName',name)
           this.$store.commit('changePage',number);
           this.$router.push({
             name:'details'
           })
        },
        filterArr(){
            return this.datalist.filter((goods,index) =>{
                let reg = new RegExp(this.keywords);
                //  console.log(index)
                return reg.test(goods.title)
               
            })
        }
  }
  
    }
</script>
<style scoped>
    .list{
       width:100%;
       height:40px;
   }
   .list>button{
       padding:10px;
       border-radius:18px;
       background: linear-gradient(157deg,orange,#eb6e3d);
       outline:none;
       border:0;
       margin-left:10px;
   }
   .list>input{
       width:180px;
       height:34px;
       padding-left:6px;
   }
</style>

