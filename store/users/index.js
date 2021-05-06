import Cookie from 'js-cookie'
import { auth } from '@/services/firebase'

export const state = () => ({
  user: null,
})

export const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  },
}

export const getters = {
  user: (state) => state.user,
}

export const actions = {
  async login({ commit }, formdata) {
    // eslint-disable-next-line no-useless-catch
    try {
      // login user
      await auth.signInWithEmailAndPassword(formdata.email, formdata.password)

      // get jwt from firebase
      const token = await auth.currentUser.getIdToken()
      const { email, uid } = auth.currentUser

      // set jwt to the cookie
      Cookie.set('access_token', token)

      commit('SET_USER', { email, uid })
    } catch (error) {
      throw error
    }
  },
  // eslint-disable-next-line no-empty-pattern
  restPass({}, email) {
    return new Promise((resolve, reject) => {
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
