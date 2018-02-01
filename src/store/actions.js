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
  }
}
