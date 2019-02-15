import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: 1,
    totalCost: 0,
    events:  [
      {
        name: "Lasse Stefanz",
        place: "Kjell Härnqvistsalen",
        adress: "Avenyyyyn 1",
        price: 350,
        date: "21 mars",
        startTime: "19:00",
        endTime: "21:00",
        code: "ABCDEFG"
      },
      {
        name: "Klubb Untz",
        place: "Din favoritkällare",
        adress: "Avenyyyyn 2",
        price: 110,
        date: "17 april",
        startTime: "22:00",
        endTime: "Tills du tröttnar",
        code: "123456"
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
