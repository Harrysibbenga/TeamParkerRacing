import { tagsCollection } from '@/services/firebase'

export const state = () => ({
  allTags: [],
  newTag: '',
})

export const mutations = {
  setTags(state, val) {
    state.allTags = val
  },
  newTag(state, val) {
    state.newTag = val
  },
}

export const actions = {
  setTags({ commit }) {
    tagsCollection.orderBy('name').onSnapshot((querySnapshot) => {
      const tagsArray = []

      querySnapshot.forEach((doc) => {
        const tag = doc.data()
        tag.id = doc.id
        if (!tag.active) {
          tagsCollection.doc(tag.id).update({
            active: false,
          })
        }
        tagsArray.push(tag)
      })
      commit('setTags', tagsArray)
    })
  },
  newTag({ commit }, tag) {
    return new Promise((resolve) => {
      tagsCollection
        .add({
          name: tag,
        })
        .then((doc) => {
          const id = doc.id
          tagsCollection.doc(id).update({
            id,
          })
        })
        .then((doc) => {
          commit('newTag', doc.data())
          resolve(doc.data())
        })
    })
  },
}

export const getters = {
  getTags(state) {
    return state.allTags
  },
}
