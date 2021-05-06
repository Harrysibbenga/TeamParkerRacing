export const state = () => ({
  isNavOpen: false,
})

export const mutations = {
  setIsNavOpen(state) {
    state.isNavOpen = !state.isNavOpen
  },
  reset(state) {
    state.isNavOpen = false
  },
}

export const actions = {
  toggleNav({ commit }) {
    commit('setIsNavOpen')
  },
  reset({ commit }) {
    commit('reset')
  },
}

export const getters = {
  isNavOpen(state) {
    return state.isNavOpen
  },
}
