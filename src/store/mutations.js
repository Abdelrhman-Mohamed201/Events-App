export default {
  setLoadedEvents (state, payload) {
    state.events.loadedEvents = payload
  },
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
  },
  loading (state, payload) {
    state.loading = payload
  }
}
