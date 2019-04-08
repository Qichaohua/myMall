import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入插件
import toast from 'components/common/toast/index'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;

// 添加事件总线对象
Vue.prototype.$bus = new Vue();

//注册插件
Vue.use(toast);

//注册图片懒加载
Vue.use(VueLazyLoad,{
  loading : require('./assets/img/common/placeholder.png')
})
new Vue({
  router,
  store,
  toast,
  // VueLazyLoad,
  render: h => h(App)
}).$mount('#app')
