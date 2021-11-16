import { videoCollection, storage } from '@/services/firebase'

export const state = () => ({
  video: {},
  videos: [],
  msg: {},
})

export const mutations = {
  setVideo(state, val) {
    state.video = val
  },
  setVideos(state, val) {
    state.videos = val
  },
  setMsg(state, val) {
    state.msg = val
  },
}

export const actions = {
  uploadVideo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const file = payload.file
      const alt = payload.alt
      const storageRef = storage.ref('videos/' + file.name)
      const uploadTask = storageRef.put(file)

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
            videoCollection
              .add({
                name: file.name,
                createdOn: new Date(),
                url: downloadURL,
                alt,
              })
              .then((doc) => {
                const id = doc.id
                videoCollection
                  .doc(id)
                  .get()
                  .then((doc) => {
                    const img = doc.data()
                    img.id = id
                    const msg = {
                      type: 'success',
                      message: 'video sucssesfully uploaded to storage',
                    }
                    commit('setMsg', msg)
                    resolve(img)
                  })
              })
              .catch((err) => {
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
  setVideos({ commit }) {
    videoCollection.orderBy('createdOn', 'desc').onSnapshot((querySnapshot) => {
      const videosArray = []

      querySnapshot.forEach((doc) => {
        const video = doc.data()
        video.id = doc.id
        videosArray.push(video)
      })
      commit('setVideos', videosArray)
    })
  },
}

export const getters = {
  getVideo(state) {
    return state.video
  },
  getVideos(state) {
    return state.videos
  },
  getMsg(state) {
    return state.msg
  },
}
