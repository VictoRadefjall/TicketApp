import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event: {},
    tickets: 1,
    totalCost: 0,
    events: []
  },
  mutations: {
    inc(state) {
      return state.tickets++
    },
    dec(state) {
      if (state.tickets > 1) {
        return state.tickets--;
      }
    },
    insertEvents(state, events) {
      state.events = events;
    }
  },
  actions: {
    async getEvents(data) {
      let events = await axios.get('http://localhost:3000/events')
      data.commit('insertEvents', events.data)
    },
    async createEvent(data, newEvent) {
      try {
        await axios.post('http://localhost:3000/events', newEvent);
        data.dispatch('getEvents')
      }
      catch(err) {
        console.error(err)
      }
    }
  }
})
