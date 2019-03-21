import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let auth = Axios.create({
  baseURL: base + "auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    owners: [],
    pets: {},
    notes: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addOwner(state, data) {
      debugger
      state.owners.push(data)
    },
    deleteOwner(state, data) {
      state.owners.push(data)
    },
    setOwners(state, data) {
      state.owners = data
    },
    setOwner(state, data) {
      state.owners = data
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'ELanding' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'ELanding' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'ELanding' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser', {})
          router.push({ name: 'login' })
        })
    },
    //#endregion
    //#region -- OWNER STUFF
    createOwner({ commit, state }, payload) {
      api.post('employee/petowners/', payload)
        .then(res => {
          console.log(res)
          debugger
          commit('addOwner', res.data)
          router.push({ name: 'Profile', params: { id: res.data._id } })
        })
    },
    deleteOwner({ dispatch }, payload) {
      api.delete('owners/' + payload.ownerId, payload)
        .then(res => {
          console.log(res)
          dispatch('getOwners', payload.ownerId)
        })
    },
    getOwners({ commit, dispatch }, payload) {
      debugger
      api.get('employee/petowners')
        .then(res => {
          console.log(res)
          commit('setOwners', res.data)
        })
    },
    getOwner({ commit, dispatch }, payload) {
      api.get('owners/' + payload.ownerId)
        .then(res => {
          console.log(res)
          commit('setOwner', res.data)
        })
    }
    //#endregion
  }
})
