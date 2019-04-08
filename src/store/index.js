import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//安装vuex
Vue.use(Vuex);


const state = {
  cartList: []
};

//创建store
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
export default store;