import { AUTHENTICATE } from './mutation-types'

export const state = () => ({
  isAuthenticated: false
})

export const getters = {
  isAuthenticated: state => state.isAuthenticated
}

export const actions = {
  authenticate ({ commit }) {
    commit(AUTHENTICATE)
  }
}

export const mutations = {
  [AUTHENTICATE] (state) {
    state.isAuthenticated = true
  }
}
