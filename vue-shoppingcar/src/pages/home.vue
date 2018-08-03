<template>
    <div class="content">
        <MenuTop />
        <div class="content-center">
           <div class="carousel">
                <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide><img src="../assets/home-img/banner1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/home-img/banner2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/home-img/banner3.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/home-img/banner4.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/home-img/banner5.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="../assets/home-img/banner6.jpg" alt=""></swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <!-- <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div> -->
                <div class="swiper-scrollbar"   slot="scrollbar"></div>
               </swiper>
           </div>
           <!-- <router-link to="/details">前往详情页</router-link> -->
        <div class="goods-list">
           <h3 class="title-three">新品上架</h3>
           <div class="goods-news">
             
               <section class="single" v-for="(item,index) in datalist['goodsnews']" :key="index" :data-page="index" data-name="goodsnews">
                <a href="javascript:;" @click="goDetails" >
                 <img class="goods-img" :src="item.imgs[0]" alt="">
                
                 <p class="goods-title">{{item.title}}</p>
                 <p class="price">￥{{item.barginprice}}</p>
                 </a>
              </section>
             
           </div>
        </div>
         <div class="goods-list">
           <h3 class="title-three">新品上架</h3>
           <div class="goods-news">
             
               <section class="single" v-for="(item,index) in datalist['hot']" :key="index" :data-page="index" data-name="hot">
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
        name:'Home',
        data(){
            return{
              datalist:[],
              swiperOption: {
                loop: true,
                autoplay:true,
                pagination: ".swiper-pagination",
            //     navigation: {
            //         nextEl: '.swiper-button-next',
            //         prevEl: '.swiper-button-prev',
            // },
              scrollbar: {
                el: '.swiper-scrollbar',
            }
        },
        
            }
        },
        components:{
          MenuTop,
          MenuBottom
        },
         computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
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
              this.datalist = response["data"];
            
          })
          .catch(error => {
            console.log(error);
          })
        },
        goDetails(e){
           var number = e.currentTarget.parentElement.dataset.page;
           var name = e.currentTarget.parentElement.dataset.name;
           this.$store.commit('changeName',name)
           this.$store.commit('changePage',number);
           this.$router.push({
             name:'details'
           })
        }
  }
  
    }
</script>
<style scoped>
 .carousel img{
    width: 100%;
    height: 180px;
 }
 .swiper-wrapper{
     width: 100%;
    height: 180px;
    overflow: hidden;
 }
   
</style>

