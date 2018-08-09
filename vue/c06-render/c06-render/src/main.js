import Vue from 'vue';

let vm = new Vue({
  el:"#app",
  data:{
    a : 0,
    b : 0,
    lastName : 'Lee',
    firstName  : 'Henry',
    fullName : 'Henry Lee'
  },
  //实例被创建
  /*created:{

  },
  //dom元素被挂载
  mounted:{
    
  },
  //过滤
  filters:{

  },*/
  //侦听
  watch:{
    firstName(val){
      this.fullName = val + this.lastName;
    },
    lastName(val){
      this.fullName = this.firstName + val;
    }
  },
  //自定义方法
  methods:{
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
