<template>
    <div class="countent-box">
        <span class="reduce countent-btn" @click = 'reduce'>-</span>
        <input type="text" class="num" v-model.number="value">
        <span class="add countent-btn" @click = 'add'>+</span>
    </div>

</template>

<script>
export default {
    name:'Countent',
    data(){
        return{
            value : 1
        }
    },
    /*watch:{
        value(val){
            if(val < 1){
                this.value = 1;
            }
        }
    }*/
    watch:{
        value(newVal){
            //验证
            if((newVal != "" && /^(-|0)/.test(newVal)) || /\D/.test(newVal)){
                this.value = 1;
            }else if(newVal != '' && newVal > this.stock){
                this.value = this.stock;
            }
            //传递数据
            this.$emit('numberChange',this.value)
        }
    },
    methods:{
        reduce(){
            if(this.value > 1){
                this.value--;
            }
        },
        add(){
            if(this.value < this.stock){
                this.value++;
            }
        }
    },
    props:{
        //库存
        stock:{
            type:Number,
            require:true,
        }
    }
}
</script>


<style scoped>
.countent-box{
    overflow: hidden;
    width: 180px;
    height: 50px;
}
.countent-btn,.num{
    font-size: 20px;
    height: 100%;
    box-sizing: border-box;
    float: left;
}
.countent-btn{
    font-size: 2em;
    cursor: pointer;
    display: inline-block;
    width: 25%;
    background: rgb(192, 188, 188);
    line-height: 50px;
}
.num{
    text-align: center;
    width: 50%;
    outline: none;
    line-height: 50px;
}

</style>
