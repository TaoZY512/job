import Vue from 'vue';
import '../static/css/index.css'
new Vue({
  el:'#app',
  data:{
    time:new Date().toLocaleString(),
    htmlStr:'<h3>该配合你演出的我视而不见.</h3>',
    imgSrc:'http://img2.imgtn.bdimg.com/it/u=302701032,2300144492&fm=27&gp=0.jpg',
    imgTitle:'美丽的插图',
    imgH3:'美丽的插图的标题',
    state:false
  }
});