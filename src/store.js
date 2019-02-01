import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //当前数据的状态。类似于Vue组件对象的data属性
    adminName:'', //当前登录的管理员名
    globalSettings:{
      apiUrl:'http://xxffn.applinzi.com'   //初始默认值
    }
  },
  //公共数据的修改方法 this.$store.commit('setAdminName','abc')
  mutations: { //控制数据的进化(即修改state)，类似于组件对象中的methods————用mutation修改数据可以保证数据的响应式
    setAdminName(state,value){
      state.adminName = value
    },
    setGlobalSettings(state,value){
      state.globalSettings = value
    }
  },
  actions: {

  }
})
