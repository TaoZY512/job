import Vue from 'vue';
let vm = new Vue({
  el:'#app',
  data:{
    name:'Henry Lee'
  },
  // 方法定义
  methods:{
    sayHello(e){
      //e 事件对象
      alert(e.target.textContent)
      // this 指向vue实例
      alert(`Hello,${this.name}!`)
    }
  }
});