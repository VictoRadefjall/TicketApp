import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event: {},
    tickets: [],
    numOfTickets: 1,
    events: [],
    verifyData: null
  },
  mutations: {
    inc(state) {
      if (state.numOfTickets < 10) {
        return state.numOfTickets++;
      }
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
    insertVerifyData(state, data){
      state.verifyData = data;
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
        let parsedTickets = JSON.parse(tickets);
        data.commit('insertTickets', parsedTickets);
    },
    async buy(ctx, orderData) {
      let tickets = await axios.post('http://localhost:3000/tickets', orderData);
      ctx.commit('insertTickets', tickets.data);
      let storageTicket = JSON.stringify(tickets.data);
      localStorage.setItem('tickets', storageTicket);
    },
    async verifyTicket(ctx, code) {
      let verify = await axios.get(`http://localhost:3000/verify/${code}`);
      ctx.commit('insertVerifyData', verify.data);
    }
  }
})
