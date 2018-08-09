<template>
    <div>   ElementUi
        <p>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button @click = "searchClick" type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </p>
        <div class="box">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in img" :key="item">
                    <img :src="item" alt="">
                    <!-- <p>{{item}}</p> -->
                </el-carousel-item>
            </el-carousel>
</div>
    </div>
</template>
<script>
export default {

    name:'ElementUi',
    data(){
        return{
              img:[
                  require('../assets/banner1.jpg'),
                  require('../assets/banner2.jpg'),
                  require('../assets/banner3.jpg'),
                  require('../assets/banner4.jpg'),
                  require('../assets/banner5.jpg'),
                  require('../assets/banner6.jpg')
              ]   }
    },
    methods:{
        searchClick(){
            alert('搜索')
        }
    }
}
</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.box img{
    width:100%;
    height:auto;
}
</style>


