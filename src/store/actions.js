import * as firebase from 'firebase'

export default {
  createEvent ({commit}, payload) {
    const event = {
      title: payload.title,
      location: payload.location,
      imgUrl: payload.imgUrl,
      description: payload.description,
      date: payload.date,
      id: 'dasd465asd'
    }
    commit('createEvent', event)
  },
  clearAlert ({commit}) {
    commit('clearAlert')
  },
  signUp ({commit}, payload) {
    commit('submitLoading', true)
    commit('clearAlert')
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('submitLoading', false)
          commit('clearAlert')
          const newUser = {
            id: user.uid,
            registeredEvents: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('submitLoading', false)
          commit('setAlert', {type: 'error', icon: 'warning', message: error.message})
        }
      )
  },
  signIn ({commit}, payload) {
    commit('submitLoading', true)
    commit('clearAlert')
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('submitLoading', false)
          commit('clearAlert')
          const newUser = {
            id: user.uid,
            registeredEvents: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('submitLoading', false)
          commit('setAlert', {type: 'error', icon: 'warning', message: error.message})
        }
      )
  }
}
