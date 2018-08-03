// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由配置文件
import router from './router'
// 引入iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex'
// 引入vuex的配置文件
import store from './store'
// 导入axios
import Axios from 'axios'
// 引入样式
import '../static/css/common.css'
import '../static/css/home.css'
import '../static/css/details.css'
import '../static/css/mine.css'
import '../static/css/shoppingcar.css'
import d from 'distpicker'

import $ from 'jquery'
import './assets/js/key'
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage)
// 将axios挂载到Vue上
Vue.prototype.$axios = Axios
Vue.use(Vuex);
Vue.use(iView);
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


import { 
  InputNumber,
  Button,
  Tabs,
  TabPane,
  ButtonGroup,
  DatePicker,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  RadioButton,
} from 'element-ui';

Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(ButtonGroup)
Vue.use(DatePicker)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data:{
    contentlist:[],

  }

})
