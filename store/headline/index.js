import { headlineCollection } from '@/services/firebase'

export const state = () => ({
  allHeadlines: [],
  headline: null,
})

export const mutations = {
  setHeadlines(state, val) {
    if (val) {
      state.allHeadlines = val
    } else {
      state.allHeadlines = []
    }
  },
  setHeadline(state, val) {
    if (val) {
      state.headline = val
    } else {
      state.headline = null
    }
  },
}

export const actions = {
  setHeadline({ commit }, id) {
    headlineCollection
      .doc(id)
      .get()
      .then((doc) => {
        const headline = doc.data()
        headline.id = doc.id
        commit('setHeadline', headline)
      })
  },
  setHeadlines({ commit }) {
    headlineCollection.onSnapshot((querySnapshot) => {
      const headlineArray = []

      querySnapshot.forEach((doc) => {
        const headline = doc.data()
        headline.id = doc.id
        headlineArray.push(headline)
      })
      commit('setHeadlines', headlineArray)
    })
  },
}

export const getters = {
  getHeadline(state) {
    return state.headline
  },
  getHeadlines(state) {
    return state.allHeadlines
  },
}
