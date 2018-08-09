import Vue from 'vue';

new Vue({
  el:'#app',
  data:{
    valueV:'最怕自己一生碌碌无为，还安慰自己平凡可贵',
    checkMsg:'',
    heros:[],
    selected:'',
    a : 0,
    b : 0,
    lastName : 'Lee',
    firstName  : 'Henry',
    fullName : 'Henry Lee'

  },
  // 监听valuev的输入状态
  watch:{
    valueV(val){
      console.log(val)
    },
    firstName(val){
      this.fullName = val + this.lastName;
    },
    lastName(val){
      this.fullName = this.firstName + val;
    }
  },
  // 方法定义
  methods:{
    sayHello(e){
      //e 事件对象
      alert(e.target.textContent)
      // this 指向vue实例
      alert(`Hello,${this.name}!`)
    },
    total(){
      return (this.a+this.b).toFixed(2);
    }
  },
  //属性计算
  computed:{
    setfullName:{
      get(val){
        return this.firstName+" "+this.lastName;
      },
      set(val){
        let names = val.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
    sum(){
      return (this.a+this.b).toFixed(2);
    },
    getFullName(){
      return this.firstName+" "+this.lastName
    }
  }
})