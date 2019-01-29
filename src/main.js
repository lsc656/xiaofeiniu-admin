import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

/**
 * 插件和全局对象设置
 */
//注册ElementUI插件
Vue.use(ElementUI)
//把axios设置为所有Vue组件实例的成员属性， 以后可以使用this.$axios使用异步请求功能
Vue.prototype.$axios = axios

/**
 * 全局过滤器
 */
Vue.filter('date',(val)=>{
  //把bigint转换为yyyy-mm-dd
  var now = new Date(val)
  var year = now.getFullYear()
  var month = now.getMonth()+1  
  var date = now.getDate()
  return year+'-'+( month<10? '0'+month : month )+'-'+(date<10?'0'+date:date)
})

Vue.filter('datetime',(val)=>{
  //把bigint转换为yyyy-mm-dd hh:mm:ss
  var now = new Date(val)
  var year = now.getFullYear() 
  var month = now.getMonth()+1
  month = month>9?month:'0'+month
  var date = now.getDate()
  date = date > 9 ? date : '0'+date
  var hour = now.getHours()
  hour = hour > 9 ? hour : '0'+hour
  var minute = now.getMinutes()
  minute = minute > 9 ? minute : '0'+ minute
  var second = now.getSeconds()
  second = second > 9 ? second : '0'+ second
  return year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second
})
Vue.filter('currency',(val)=>{
  //int转换为￥xx.yy
  return '￥'+val.toFixed(2)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
