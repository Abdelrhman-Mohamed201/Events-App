export default {
  createEvent (state, payload) {
    state.events.loadedEvents.push(payload)
  }
}
