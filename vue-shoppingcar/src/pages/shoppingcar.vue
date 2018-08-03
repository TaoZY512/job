<template>
    <div class="content">
        <MenuTop />
        <div class="content-center">
            <div class="notice" v-if="nothing">
                <h3 >小主,还没有心仪的物品吗,快去<a href="javascript:;" @click="live">挑选</a>一下吧</h3>
            </div>
            <div class="shopp-box">
                 <div class="fixbox" v-for="(good,index) in goodList" :key="index">
                   <div class="left">
                        <img class="left-img" :src="good.color" alt="">
                       <input type="checkbox" class="goods-checkbox" v-on:click="choose" :data-index="index" :id="index">
                      
                     
                   </div>
                   <div class="right">
                           <p class="goodstitle">{{good.title}}</p>
                       <p>尺码:{{good.size}}</p>
                       <section class="preiceNums" style="margin-top:10px">
                           <span > ￥<span class="pr">{{good.price}}</span></span>
                          <div class="goodnums">
                              <button type="button" @click="subtract" min="1" :data-index="index">-</button>
                              <input type="text" :value="good.nums">
                              <button type="button" @click="add" :data-index="index">+</button>
                          </div>
                       </section>
                   </div>
                </div>
                <div class="allcheckbox">
                    <section>
                        <input type="checkbox" class="goods-allchoose" v-on:click="chooseAllGoods" v-model="allChoose">
                        <span>全选</span>
                    </section>
                    <section>
                       <p class="total">合计<span>￥{{totalMoney}}</span></p>
                       <button type="button" class="account" v-if="!del">结算（{{totalNum}}）</button>
                       <button type="button" v-if="del" class="del" @click="dele">删除</button>
                       <button type="button" v-if="del" class="cancel" @click="cancel">取消</button>
                       <button type="button" v-if="!del" class="management" @click="management">管理</button>
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
        name:'Shoppingcar',
        data(){
            return{
               checked: false,
               nums:1,
               del:false,
               goodList:[],
               nothing:true,
               goods:[],
               totalMoney : 0,
               totalNum:0,
               goodListInex:'',
               allChoose:false

               
            }
        },
        components:{
          MenuTop,
          MenuBottom
        },
        mounted(){
            this.getGoods();
            // this.goodListInex = 
            
        },
        methods:{
            management(){
                this.del=true;
            },
            cancel(){
                this.del=false;
            },
            getGoods(){
             var entrepot = JSON.parse(localStorage.getItem('goods'));
             if(entrepot){
                 this.goodList = entrepot;
                 this.nothing = false;
                //  console.log(this.goodList)
                
             }
                 
        },
        // 离开购物车
        live(){
          this.$router.push({
              name:'classify'
          })
        },
        // 添加数量
        add(e){
            var goodsIndex = e.currentTarget.dataset.index;
            var numAddChild = Number(this.goodList[goodsIndex].nums)
            var addResult = numAddChild += 1;
            this.goodList[goodsIndex].nums = addResult;
            console.log($('.checkbox'))
            this.choose()
            // e.currentTarget.previousElementSibling.value = addResult;
        },
        // 减少数量
        subtract(e){

            var goodsIndex = e.currentTarget.dataset.index;
           var numSubtractChild = Number(this.goodList[goodsIndex].nums)
                if(numSubtractChild > 1){
                    numSubtractChild = numSubtractChild -= 1
                    this.goodList[goodsIndex].nums = numSubtractChild;
                     this.choose()
                }else{
                    alert('不能在少了喲')
                }
            
                    },
        // 单选
       
        choose(){   
            var list = this.goodList;
           
             var conts = 0;
             var aa = 0;
            $(".goods-checkbox").each(function(){
                if($(this).is(':checked')){
                    var goodsIndex = $(this).attr('id');
                    var nowTotalNum = Number(list[goodsIndex].nums);
                    var nowTotalMoney = Number((Number(list[goodsIndex].nums) * Number(list[goodsIndex].price)).toFixed(2));
                    for(var i = 0; i < $(this).length; i++) {
                        conts += nowTotalMoney;
                        aa += nowTotalNum;
                    }
                }
            });
            this.totalNum = aa;
            this.totalMoney = conts;
        },
        //  删除
        dele(){
               var list = this.goodList;
               $(".goods-checkbox").each(function(){
                if($(this).is(':checked')){
                    var goodsIndex = $(this).attr('id');
                     console.log($(this).length)
                    // var nowTotalNum = Number(list[goodsIndex].nums);
                    // var nowTotalMoney = Number((Number(list[goodsIndex].nums) * Number(list[goodsIndex].price)).toFixed(2));
                    for(var i = 0; i < $(this).length; i++) {
                       
                        list.splice(goodsIndex,$(this).length+1)
                    }
                }
            });
        },
         // 全选
        chooseAllGoods(){
            var ethis = this;
          
                
               if($('.goods-allchoose').is(':checked')){
                 $(".goods-checkbox").each(function(){
                     $(this).attr('checked',true);
                    ethis.choose()
                 })
             }else{
                  
                  $(".goods-checkbox").each(function(){
                     $(this).attr('checked',false);
                      ethis.choose()
                   
                 })
             }
          
            
        }
        }
    } 
</script>
<style scoped>
</style>

