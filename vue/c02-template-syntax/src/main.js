
import Vue from 'vue';
import '../static/css/index.css'
new Vue({
  el:'#app',
  data:{
    time: new Date().toLocaleString(),
    address:'四川省成都市',
    weather:'多云 24℃~32℃',
    htmlStr:'<h3>该配合你演出的我视而不见.</h3>',
    imgSrc:'http://img2.imgtn.bdimg.com/it/u=302701032,2300144492&fm=27&gp=0.jpg',
    imgTitle:'烟火里的尘埃',
    isHidden:false
  }
});

