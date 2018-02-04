// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import './stylus/main.styl'
import DateFilter from './filters/date'
import alertComp from './components/shared/Alert'

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken2
  }
})

Vue.component('app-alert', alertComp)

Vue.use(VeeValidate)
Vue.filter('date', DateFilter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfssZjEeIuQ8WdV4Cg-S5bDSFJDyjCwAM',
      authDomain: 'events-app-adc97.firebaseapp.com',
      databaseURL: 'https://events-app-adc97.firebaseio.com',
      projectId: 'events-app-adc97',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadEvents')
  }
})
