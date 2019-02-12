import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tickets: 1
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
