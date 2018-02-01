export default {
  loadedEvents (state) {
    return state.events.loadedEvents.sort((eventA, eventB) => {
      return eventA.date > eventB.date
    })
  },
  featureEvents (state, getters) {
    return getters.loadedEvents.slice(0, 5)
  },
  loadedEvent (state) {
    return eventId => {
      return state.events.loadedEvents.find(event => {
        return event.id === eventId
      })
    }
  }
}
