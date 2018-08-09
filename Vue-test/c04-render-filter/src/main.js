import Vue from 'vue';
let model ={
  fruit:'',
  keywords:'',
 stus:[
   {name:'林彦俊',gender:'男',address:'四川省成都市'},
   {name:'叶正廷',gender:'男',address:'四川省北京市'},
   {name:'农农',gender:'男',address:'四川省成都市'},
   {name:'李大',gender:'男',address:'四川省成都市'},
   {name:'李二',gender:'女',address:'四川省乐山市'},
   {name:'李三',gender:'男',address:'四川省宜宾市'},
 ],
 infos:{
   name:'花花',
   age:'21',
   address:'四川省成都市',
   school:'四川工商职业技术学院',
   job:'Web 前端工程师'
 },
 fruits:['香蕉','苹果','火龙果'],
 goods:[
  {name:"钢笔",price:188},
  {name:"铅笔",price:138},
  {name:"毛笔",price:58.5},
  {name:"硬笔",price:99.1},
  {name:"软笔",price:1.8}
]
}
new Vue({
  el:'#app',
  data:model,
  filters:{
    addSymble(val){
      return "￥" + val
    }
  },
  methods:{
    //添加
    add(){
      if(this.fruits){
        this.fruits.push(this.fruit);
      }
    },
    //删除
    remove(){
      this.fruits.pop();
    },
    // 修改
    mofify(){
      // this.fruits[0] = "榴莲";
      this.$set(this.fruits,0,'榴莲')
    },
    //过滤数据
    filterArr(){
      return this.stus.filter((stu)=>{
        let reg= new RegExp(this.keywords);
        return reg.test(stu.name)
      });
    }

  }
})