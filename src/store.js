import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import axios from 'axios'
=======
// import axios from 'axios'
>>>>>>> master

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
<<<<<<< HEAD
    async getEvents(data) {
        let events = await axios.get('http://localhost:3000/events')
        data.commit('insertEvents', events.data)
    }
=======
    // async getEvents
>>>>>>> master
  }
})
