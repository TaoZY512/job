import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // 状态属性
    state:{
     title:'首页',
     left:'0',
     numver:'0',
     goodsName:'goodsshort',
     username:'未登录',
    },
    mutations:{
      changeTitle(state,title){
          state.title = title
      },
      changeLeft(state,left){
          state.left = left
      },
      changePage(state,number){
          state.number = number
      },
      changeName(state,name){
          state.name = name
      },
      changeUsername(state,username){
          state.username = username
      }
    }
})