import Vue from 'vue';
import '../static/css/index.css'
new Vue({
  el:'#app',
  data:{
    // class
    class1:'box',
    class2:'radius',
    classname:'box',
    isBox:true,
    classObj:{
      'box':true,
      'radius':true
    },
    // style
    radius:'8px',
    bgColor:'purple',
    styleObj:{
      borderRadius:'8px',
      backgroundColor:'green',
      boxSizing:'border-box',
      border:'2px solid green',
      transform:'rotateZ(-45deg)'
    }
  }
})