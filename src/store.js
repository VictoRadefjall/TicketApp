import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: 1,
    totalCost: 0,
    events:  [
      {
        name: "Lasse-Stefanz",
        place: "Kjell Härnqvistsalen",
        price: 350,
        date: {
          date: 21,
          month: "mars"
        },
        startTime: "19:00",
        endTime: "21:00"
      },
      {
        name: "Klubb Untz",
        place: "Din favoritkällare",
        price: 110,
        date: {
          date: 17,
          month: "april"
        },
        startTime: "22:00",
        endTime: "Tills du tröttnar"
      }
    ]
  },
  mutations: {
    inc(state) {
      return state.tickets++
    },
    dec(state) {
      if (state.tickets > 1) {
        return state.tickets--;
      }
    }
  },
  actions: {

  }
})
