import Vue from 'vue'
import { defineStore } from 'pinia';

export const state = () => ({
  query: null,
})

export const types = {
  RESET: 'RESET',
  SET_QUERY: 'SET_QUERY',
}

export const mutations = {
  [types.RESET] (state) {
    Vue.set(state, 'query', null)
  },

  [types.SET_QUERY] (state, query) {
    Vue.set(state, 'query', query)
  },
}

export const getters = {}

export const actions = {
  reset ({ commit }) {
    commit(types.RESET)
  },

  setQuery ({ commit }, query) {
    // console.log(query.toLowerCase())
    commit(types.SET_QUERY, query.toLowerCase())
  },
}
