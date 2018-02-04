import * as firebase from 'firebase'

export default {
  loadEvents ({commit}) {
    commit('loading', true)
    firebase.database().ref('events').once('value')
      .then(
        data => {
          const events = []
          const obj = data.val()
          for (let key in obj) {
            events.push({
              id: key,
              title: obj[key].title,
              location: obj[key].location,
              imgUrl: obj[key].imgUrl,
              description: obj[key].description,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedEvents', events)
          commit('loading', false)
        }
      )
      .catch(
        error => {
          console.log(error)
          commit('loading', false)
        }
      )
  },
  createEvent ({commit, getters}, payload) {
    const event = {
      title: payload.title,
      location: payload.location,
      imgUrl: payload.imgUrl,
      description: payload.description,
      date: payload.date.toISOString(),
      creatorId: getters.user.id
    }
    firebase.database().ref('events').push(event)
      .then(
        data => {
          commit('createEvent', {
            ...event,
            id: data.key
          })
        }
      )
      .catch(
        error => {
          console.log(error)
        }
      )
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
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', {id: payload.uid, registeredEvents: []})
  },
  logout ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
  }
}
