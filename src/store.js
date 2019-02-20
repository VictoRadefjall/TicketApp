import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event: {},
    tickets: [],
    numOfTickets: 1,
    events: []
  },
  mutations: {
    inc(state) {
      return state.numOfTickets++;
    },
    dec(state) {
      if (state.numOfTickets > 1) {
        return state.numOfTickets--;
      }
    },
    insertEvents(state, events) {
      state.events = events;
    },
    insertTickets(state, tickets) {
      state.tickets = tickets;
    },
    selectEvent(state, event) {
      state.event = event;
    },
  },
  actions: {
    async getEvents(data) {
        let events = await axios.get('http://localhost:3000/events');
        data.commit('insertEvents', events.data);
    },
    getTickets(data) {
        let tickets = localStorage.getItem('tickets');
        data.commit('insertTickets', JSON.parse(tickets));
    },
    async buy(ctx, orderData) {
      let tickets = await axios.post('http://localhost:3000/tickets', orderData);
      ctx.commit('insertTickets', tickets.data);
      let storageTicket = JSON.stringify(tickets.data);
      localStorage.setItem('tickets', storageTicket);
    }
  }
})
