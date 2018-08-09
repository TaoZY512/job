import Vue from 'vue';
import '../static/css/index.css';
let model = {
  //添加角色
  addbooks:{},
  //编辑角色
  editbooks:{},
  //设置模糊查询的值
  keywords:'',
  books:[
    {heroName:'剑圣',heroPosition:'战士',orientation:'野区'},
    {heroName:'寒冰',heroPosition:'射手',orientation:'下路'},
    {heroName:'机器人',heroPosition:'辅助',orientation:'下路'},
  ],
  isShow:true,
 
}
new Vue({
 el:'#app',
 data:model,

 methods:{
   //添加角色
   add(){
        this.books.map((book)=>{
          if(book.heroName == this.addbooks.heroName){
            alert('英雄已存在');
            this.addbooks={}
             return this.add = false;
          }
        })
        if(this.add){
          this.books.push(this.addbooks),
          this.addbooks={}
        }
       
     
   },
    //删除的方法
    del(index){
      alert('确定要删除吗')
      this.books.splice(index,1);
  },
  //修改
   edit(index){
     this.editbooks =this.books[index]
   },
   //编辑角色
   addEdit(){
    this.editbooks={},
    this.isShow =true
   },
   search(){
     return this.books.filter((book)=>{
       let reg = new RegExp(this.keywords);
       let str = '';
       str += book.heroName;
       str += book.heroPosition;
       str +=book.orientation;
       return reg.test(str)
     })
   }
 }
});