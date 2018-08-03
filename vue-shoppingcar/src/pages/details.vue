<template>
    <div class="content">
        <MenuTop :goback="true"/>
        <div class="content-center">
            
            <div class="contents" >
                <div class="contents-top">
                    <img :src="imgSrc[0]" alt="">
                </div>
                <div class="price" >
                    <section>
                        <p class="goods-color">￥<span class="goods-price">{{detailsList.barginprice}}</span>多买多优惠</p>
                        <p class="barginprice">价格 ￥<del class="bargin-price">{{detailsList.price}}</del></p>
                        <h4 class="goods-title">{{detailsList.title}}</h4>
                        <p class=" flag-only">
                            <span>快递：免运费</span>
                            <span>月销{{detailsList.evaluation}}笔</span>
                            <span>广东广州</span>
                        </p>
                    </section>
                    <section>
                      <p class="head-flag">
                          <span>物流</span>
                          <span class="flag-other">预计三天到达</span>
                      </p>
                      <p class="head-flag">
                          <span>服务</span>
                          <span class="flag-other">订单险 · 7天无理由</span>
                      </p>
                    </section>
                     <section>
                         <p>暂无评价与问答</p>
                    </section>
                    <section class="fixation">
                        <button type="button" class="addshoppingcar" @click = "isShow =!isShow">加入购物车</button>
                        <button type="button" class="buy">立即购买</button>
                    </section>
                    
                    <div class="shopp" v-if="isShow">
                         <section class="title-box">
                             <img :src="imgs" alt="" class="title-img">
                             <!-- <img :src="imgs" alt="" class="title-img"> -->
                             <img class="close" src="../assets/details/close.png" alt="" @click = "isShow =!isShow">
                             <p class="typeface">
                                 ￥<span class="discounts-price">{{detailsList.barginprice}}</span><br />
                                 <span>库存{{detailsList.stock}}件</span><br />
                                 <span>选择 颜色分类</span>
                             </p>
                         </section>
                         <section class="size-box">
                             <h5>尺码</h5>
                           <div style="display:inline-block" >
                                <el-radio-group v-model="radio4" size="small" fill='#eb6e3d'>
                                <el-radio-button label="S" ></el-radio-button>
                                <el-radio-button label="M"></el-radio-button>
                                <el-radio-button label="L"></el-radio-button>
                                <el-radio-button label="XL"></el-radio-button>
                                </el-radio-group>
                            </div>
                         </section>
                         <section class="color-box">
                             <h5>颜色分类</h5>
                             <p v-for="(pic,index) in imgSrc" :key="index" @click = 'goodsColor'>
                                <img class="color-img" :src="pic" alt="">
                             </p>
                         </section>
                         <section class="goods-nums">
                             <h5>购买数量</h5>
                              <el-input-number v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
                         </section>
                         <section class="goods-button">
                             <button type="button" class="goods-submit" @click="addGoodsToShopp">确定</button>
                         </section>
                    </div>
                    <div class="goods-all"  v-if="isShow">
                    </div>
                </div>
            </div>
           
     </div>
    </div>
</template>
<script>
    import MenuTop from '../components/menu-top'
    import $ from 'jquery'
    export default {
        name:'Details',
        data(){
            return{
                radio4: 'M',
               imgSrc: '',
               num1: 1,
               isShow:false,
               detailsList:{},
               imgs:'imgSrc["0"]',
               
            //    price:detailsList.barginprice,
            }
        },
        components:{
          MenuTop
        },
     mounted(){
         
    },
    methods:{
     goodsColor(e){
       this.imgs = e.target.src
     },
     addGoodsToShopp(){
        if(sessionStorage.getItem('userInfo')){
              var nums=[],
            goodsStroge = localStorage.getItem('goods');
            if(goodsStroge){
                nums=JSON.parse(goodsStroge)
            }
            nums.push({
               title:$('.goods-title')[0].innerText,
               price:$('.discounts-price')[0].innerText,
               color:this.imgs,
               size:this.radio4,
               nums:this.num1
            })
            var saveGoods = JSON.stringify(nums)
            localStorage.setItem('goods',saveGoods)
            alert("添加成功")
            this.$router.push({
                name:'shoppingcar'
            })
        }else{
            alert('登录之后才能添加到购物车哦！')
            this.$router.push({
                name:'mine'
            })
        }
       
     }
    },
    created(){
    // GET请求
          this.$axios.get('./../static/json/goods.json')
            .then(response =>{
                // 获取商品详情下标
                
                let number = this.$store.state.number;
                let name = this.$store.state.name;
                this.detailsList = response["data"][name][number];
                this.imgSrc = this.detailsList['imgs'];
            
          })
          .catch(error => {
            console.log(error);
          })
        
  }
// ,methods:{
//        handleChange(value) {
//         console.log(value);
//       }
    
//   }
 }
</script>
<style scoped>

</style>

