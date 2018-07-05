import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// const host = process.env.HOST

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {

  },
  mutations: {
    LOGIN (state, id) {
      state.accessToken = id
      localStorage.accessToken = id
    },
    LOGOUT (state) {
      state.accessToken = null
      localStorage.accessToken = null
    }
  },
  actions: {
    LOGIN ({commit}, id) {
      commit('LOGIN', id)

      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.accessToken}`
    },
    LOGOUT ({commit}) {
      axios.defaults.headers.common['Authorization'] = undefined
      commit('LOGOUT')
    }
  }
})
