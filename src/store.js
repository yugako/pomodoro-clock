import Vue from 'vue'
import Vuex from 'vuex'


import breakManage from './store/break'
import sessionManage from './store/session'

Vue.use(Vuex)

export default new Vuex.Store({
  	modules: {
  		breakManage, sessionManage
  	}
})
