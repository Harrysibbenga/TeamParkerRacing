import {
  imageCollection,
  logoCollection,
  driverImgCollection,
  storage,
} from '@/services/firebase'

export const state = () => ({
  image: {},
  images: [],
  driverImage: {},
  driverImages: [],
  msg: {},
})

export const mutations = {
  setImage(state, val) {
    state.image = val
  },
  setImages(state, val) {
    state.images = val
  },
  setDriverImage(state, val) {
    state.driverImage = val
  },
  setDriverImages(state, val) {
    state.driverImages = val
  },
  setMsg(state, val) {
    state.msg = val
  },
}

export const actions = {
  uploadImage({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const file = payload.file
      const alt = payload.alt
      const storageRef = storage.ref('images/' + file.name)
      const uploadTask = storageRef.put(file)

      this.$store.dispatch('global/setLoading', true)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            imageCollection
              .add({
                name: file.name,
                createdOn: new Date(),
                url: downloadURL,
                alt,
              })
              .then((doc) => {
                const id = doc.id
                imageCollection
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    const msg = {
                      type: 'success',
                      message: 'Image sucssesfully uploaded to storage',
                    }
                    commit('setMsg', msg)
                    resolve(img)
                  })
              })
              .catch((err) => {
                this.$store.dispatch('global/setLoading', false)
                const msg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('setMsg', msg)
                reject(err.message)
              })
          })
        }
      )
    })
  },
  setImages({ commit }) {
    imageCollection.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('setImages', imagesArray)
    })
  },
  uploadDriverImage({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const file = payload.file
      const alt = payload.alt
      const storageRef = storage.ref('driver_images/' + file.name)
      const uploadTask = storageRef.put(file)

      this.$store.dispatch('global/setLoading', true)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            driverImgCollection
              .add({
                name: file.name,
                createdOn: new Date(),
                url: downloadURL,
                alt,
              })
              .then((doc) => {
                const id = doc.id
                driverImgCollection
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    const msg = {
                      type: 'success',
                      message: 'Image sucssesfully uploaded to storage',
                    }
                    commit('setMsg', msg)
                    resolve(img)
                  })
              })
              .catch((err) => {
                this.$store.dispatch('global/setLoading', false)
                const msg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('setMsg', msg)
                reject(err.message)
              })
          })
        }
      )
    })
  },
  setDriverImages({ commit }) {
    driverImgCollection
      .orderBy('createdOn', 'desc')
      .onSnapshot((querySnapshot) => {
        const imagesArray = []

        querySnapshot.forEach((doc) => {
          const image = doc.data()
          image.id = doc.id
          imagesArray.push(image)
        })
        commit('setDriverImages', imagesArray)
      })
  },
  uploadLogoImage({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const file = payload.file
      const alt = payload.alt
      const storageRef = storage.ref('logo_images/' + file.name)
      const uploadTask = storageRef.put(file)

      this.$store.dispatch('global/setLoading', true)

      uploadTask.on(
        'state_changed',
        () => {
          // snapshot
        },
        () => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            logoCollection
              .add({
                name: file.name,
                createdOn: new Date(),
                url: downloadURL,
                alt,
              })
              .then((doc) => {
                const id = doc.id
                logoCollection
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    const msg = {
                      type: 'success',
                      message: 'Image sucssesfully uploaded to storage',
                    }
                    commit('setMsg', msg)
                    resolve(img)
                  })
              })
              .catch((err) => {
                this.$store.dispatch('global/setLoading', false)
                const msg = {
                  type: 'warning',
                  message: err.message,
                }
                commit('setMsg', msg)
                reject(err.message)
              })
          })
        }
      )
    })
  },
  setLogoImages({ commit }) {
    logoCollection.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const imagesArray = []

      querySnapshot.forEach((doc) => {
        const image = doc.data()
        image.id = doc.id
        imagesArray.push(image)
      })
      commit('setLogoImages', imagesArray)
    })
  },
}

export const getters = {
  getImage(state) {
    return state.image
  },
  getImages(state) {
    return state.images
  },
  getDriverImage(state) {
    return state.image
  },
  getDriverImages(state) {
    return state.images
  },
  getLogoImage(state) {
    return state.image
  },
  getLogoImages(state) {
    return state.images
  },
  getMsg(state) {
    return state.msg
  },
}
