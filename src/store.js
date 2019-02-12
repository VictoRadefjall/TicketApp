import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events:  [
      {
        name: "Lasse Stefanz",
        place: "Kjell Härnqvistsalen",
        price: 350,
        date: "21 mars",
        startTime: "19:00",
        endTime: "21:00"
      },
      {
        name: "Klubb Untz",
        place: "Din favoritkällare",
        price: 110,
        date: "17 april",
        startTime: "22:00",
        endTime: "Tills du tröttnar"
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
