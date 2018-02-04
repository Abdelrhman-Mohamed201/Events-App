import Vue from 'vue'
import Vuex from 'vuex'
// import users from './state/users'
import events from './state/events'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    alert: null,
    submitLoading: false,
    events
  },
  mutations,
  actions,
  getters
})
