import Vue from 'vue'
import VeeValidate from 'vee-validate'
import Vuex from 'vuex'
import users from './state/users'
import events from './state/events'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
Vue.use(VeeValidate)

export const store = new Vuex.Store({
  state: {
    users,
    events
  },
  mutations,
  actions,
  getters
})
