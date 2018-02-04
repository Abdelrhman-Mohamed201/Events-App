export default {
  createEvent (state, payload) {
    state.events.loadedEvents.push(payload)
  },
  setUser (state, payload) {
    state.user = payload
  },
  setAlert (state, payload) {
    state.alert = payload
  },
  clearAlert (state) {
    state.alert = null
  },
  submitLoading (state, payload) {
    state.submitLoading = payload
  }
}
