<template>
    <div>
        <p>
                <el-button type="primary" icon="el-icon-arrow-left" name='1'>上一页</el-button>
                <el-button type="primary" name='2'>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                <el-button type="primary" icon="el-icon-edit" name='3'></el-button>
                <el-button type="primary" icon="el-icon-share" name='4'></el-button>
                <el-button type="primary" icon="el-icon-delete" name='5'></el-button>
           
        </p>
        <div class="box">
         
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                    <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>


        </div>

        <!-- <div>
             <el-select v-model="value2" placeholder="请选择">
                    <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                    </el-option>
           </el-select>
        </div> -->
           
           
    <div class="block">
        <span class="demonstration">带快捷选项</span>
        <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions1">
        </el-date-picker>
  </div>
         
 
    </div>
    
</template>
<script>
export default {
    name:'ElementUi',
    data(){
            return {
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        

         pickerOptions1: {
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
        value3: ''
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
</style>

