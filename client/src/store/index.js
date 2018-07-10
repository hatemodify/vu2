import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
      enhanceAccessToeken(localStorage)    
    },
    LOGOUT ({commit}) {
      axios.defaults.headers.common['Authorization'] = undefined
      commit('LOGOUT')
    }
  }
})

const enhanceAccessToeken = () => {
  const {accessToken} = localStorage
  if (!accessToken) return
  axios.defaults.headers.common['userId'] = `${accessToken}`
}
enhanceAccessToeken()
