<template>
  <div>
    <h1 class="text-center w-100">Featured Articles</h1>
    <mdb-container>
      <mdb-row>
        <mdb-col class="text-center pt-2" col="12">
          <img
            v-if="post.url"
            :src="post.url"
            :alt="post.alt"
            class="img-fluid"
          />

          <img
            v-else
            :src="defaultImage"
            alt="Placeholder image"
            class="img-fluid"
          />
        </mdb-col>

        <mdb-col col="12">
          <form class="pt-2" @submit.prevent="submitForm">
            <div class="row">
              <div class="md-form col-4 p-0">
                <mdb-btn
                  color="primary"
                  class="ml-3"
                  inline
                  @click.native="newImage('headline')"
                  >Headline Image</mdb-btn
                >
              </div>

              <div class="md-form col-12">
                <mdb-input v-model.trim="post.date" type="date" inline />
              </div>
            </div>

            <div class="md-form">
              <mdb-input v-model.trim="post.title" label="Title" inline />
            </div>

            <div class="md-form">
              <mdb-input
                v-model.trim="post.excerpt"
                label="Excerpt (used for meta)"
                inline
              />
            </div>

            <div class="md-form">
              <mdb-input v-model.trim="post.type" label="Type" inline />
            </div>

            <mdb-col col="12">
              <app-editor :content.sync="post.content"></app-editor>
            </mdb-col>

            <mdb-col col="12" class="py-3">
              <tags :tags.sync="post.tags"></tags>
            </mdb-col>

            <mdb-btn color="primary" type="submit">Add Post</mdb-btn>
          </form>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <transition name="fade">
      <app-message :msg="msg"></app-message>
    </transition>

    <mdb-container fluid class="p-0 pt-5">
      <mdb-row>
        <mdb-col>
          <table class="table">
            <thead class="black text-white">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in paginatedData" :key="index">
                <th scope="row">{{ post.title }}</th>
                <td>{{ post.date | formatDate }}</td>
                <td>
                  <a class="mr-1" @click="editPost(post)">
                    <mdb-icon icon="edit" />
                  </a>
                  <a class="ml-1" @click="deletePost(post)">
                    <mdb-icon icon="trash-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </mdb-col>
        <mdb-col class="col-12 text-center">
          <mdb-btn
            :class="{ 'd-none': pageNumber == 0 }"
            color="primary"
            @click.native="prevPage"
          >
            <mdb-icon icon="angle-double-left" />
          </mdb-btn>
          <mdb-btn
            :class="{ 'd-none': pageNumber >= pageCount - 1 }"
            color="primary"
            @click.native="nextPage"
          >
            <mdb-icon icon="angle-double-right" />
          </mdb-btn>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <!-- editModel  -->
    <mdb-modal
      top
      position="top"
      full-height
      direction="top"
      :show="editModal"
      @close="cancelEdit"
    >
      <mdb-modal-header>
        <mdb-modal-title>{{ clickedPost.title }}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <form class="p-2 container-fluid" @submit.prevent>
          <mdb-row>
            <mdb-col col="12">
              <img
                v-if="clickedPost.url"
                :src="clickedPost.url"
                class="img-fluid"
              />
            </mdb-col>

            <mdb-btn color="primary" @click.native="newImage('editHeadline')"
              >Change image</mdb-btn
            >

            <div class="md-form col-md-6 col-lg-4 p-0">
              <mdb-input v-model.trim="clickedPost.date" type="date" inline />
            </div>

            <div class="md-form">
              <mdb-input
                v-model.trim="clickedPost.title"
                label="Title"
                inline
              />
            </div>

            <div class="md-form">
              <mdb-input
                v-model.trim="clickedPost.excerpt"
                label="Excerpt"
                inline
              />
            </div>

            <div class="md-form">
              <mdb-input v-model.trim="clickedPost.type" label="Type" inline />
            </div>

            <div class="md-form">
              <app-editor :content.sync="clickedPost.content"></app-editor>
            </div>

            <mdb-col col="12" class="py-3">
              <tags :tags.sync="clickedPost.tags"></tags>
            </mdb-col>
          </mdb-row>
        </form>
      </mdb-modal-body>
      <mdb-container>
        <transition name="fade">
          <app-message :msg="editMsg"></app-message>
        </transition>
      </mdb-container>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="cancelEdit">Close</mdb-btn>
        <mdb-btn color="primary" @click.native="saveEdit">Save changes</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <!-- deleteModal -->
    <mdb-modal
      frame
      position="top"
      direction="top"
      :show="deleteModal"
      @close="deleteModal = false"
    >
      <mdb-modal-body class="text-center">
        <span class="text-danger"
          >Are you sure you want to delete this post</span
        >
        {{ toDeletePost.title }}
        <mdb-btn color="secondary" @click.native="cancelDelete">Close</mdb-btn>
        <mdb-btn color="danger" @click.native="confirmDelete">Delete</mdb-btn>
      </mdb-modal-body>
    </mdb-modal>

    <!-- existsModal -->
    <mdb-modal size="md" :show="existsModal" @close="existsModal = false">
      <mdb-modal-header>
        <mdb-modal-title>Image exists with that name</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="row col-12 col-md-6 col-lg-4 py-3">
          <p>Would you like to use this one ?</p>
        </div>
        <img :src="img.content.url" :alt="img.content.alt" class="img-fluid" />
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" size="sm" @click.native="declineUse"
          >No</mdb-btn
        >
        <mdb-btn color="primary" size="sm" @click.native="confirmUse"
          >Yes</mdb-btn
        >
      </mdb-modal-footer>
    </mdb-modal>

    <!-- uploadImage -->
    <mdb-modal size="md" :show="uploadImage" @close="closeImageUpload">
      <app-loader></app-loader>
      <mdb-modal-header>
        <mdb-modal-title>Upload image</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="row">
          <div class="col-12">
            <div class="md-form">
              <mdb-input v-model.trim="img.alt" label="Description" inline />
            </div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span id="imageInput" class="input-group-text">Upload</span>
              </div>
              <div class="custom-file">
                <input
                  id="imageInput"
                  ref="imageInput"
                  type="file"
                  class="custom-file-input"
                  aria-describedby="imageInput"
                  accept="image/jpeg image/png"
                  @change="checkFile($event)"
                />
                <label
                  v-if="file.name"
                  class="custom-file-label"
                  for="inputGroupFile01"
                  >{{ file.name }}</label
                >
                <label v-else class="custom-file-label" for="inputGroupFile01"
                  >Image</label
                >
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" size="sm" @click.native="closeImageUpload"
          >Close</mdb-btn
        >
        <mdb-btn
          color="primary"
          size="sm"
          :disabled="img.alt == ''"
          @click="saveFile(type)"
          >Save</mdb-btn
        >
      </mdb-modal-footer>
      <transition name="fade">
        <app-message :msg="uploadMsg"></app-message>
      </transition>
    </mdb-modal>
  </div>
</template>

<script>
import moment from 'moment'
import { featuredCollection, imageCollection } from '@/services/firebase'
import {
  mdbInput,
  mdbBtn,
  mdbContainer,
  mdbIcon,
  mdbCol,
  mdbRow,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbModal,
} from 'mdbvue'

export default {
  name: 'FeaturedDashboard',
  components: {
    mdbInput,
    mdbBtn,
    mdbContainer,
    mdbIcon,
    mdbCol,
    mdbRow,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbModal,
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return '-'
      }
      const date = val
      return moment(date).format('Do MMM YYYY')
    },
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 10,
    },
  },
  data() {
    return {
      post: {
        title: '',
        excerpt: '',
        type: '',
        slug: '',
        date: '',
        content: '',
        year: '',
        imgId: '',
        url: '',
        alt: '',
        tags: '',
      },
      pageNumber: 0,
      msg: '',
      editMsg: '',
      editModal: false,
      deleteModal: false,
      quoteModel: false,
      toDeletePost: {
        id: '',
        title: '',
      },
      clickedPost: {
        id: '',
        title: '',
        type: '',
        slug: '',
        date: '',
        content: '',
        year: '',
        alt: '',
      },
      existsModal: false,
      uploadImage: false,
      file: '',
      img: {
        id: '',
        content: '',
        alt: '',
      },
      type: '',
      defaultImage:
        'https://firebasestorage.googleapis.com/v0/b/jhr-developments-c5bba.appspot.com/o/images%2Fimg-placeholder.png?alt=media&token=7d9c5978-d45d-4049-91d9-ceb235823db7',
    }
  },
  computed: {
    posts() {
      return this.$store.getters['featured/getPosts']
    },
    uploadMsg() {
      return this.$store.getters['images/getMsg']
    },
    updatedImage() {
      return this.$store.getters['images/getImage']
    },
    pageCount() {
      const l = this.posts.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.posts.slice(start, end)
    },
  },
  methods: {
    reset() {
      this.post = {
        title: '',
        excerpt: '',
        type: '',
        slug: '',
        date: '',
        content: '',
        year: '',
        imgId: '',
        url: '',
        alt: '',
        tags: '',
      }
      this.file = ''
      this.img = {
        id: '',
        content: '',
        alt: '',
      }
    },
    addPost() {
      let slugArry = []
      const newSlug = []
      let date = ''
      // create slug
      slugArry = this.post.title.split(' ')
      date = this.post.date
      this.post.year = date.split('-')[0]

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.post.slug = newSlug.join('-') + '-' + date

      if (this.post.url === '') {
        this.post.url = this.defaultImage
      }
      console.log(this.post)
      console.log(this.quoteContent)
      console.log(this.galleryContent)
      featuredCollection
        .add({
          title: this.post.title,
          excerpt: this.post.excerpt,
          type: this.post.type,
          slug: this.post.slug,
          date: this.post.date,
          content: this.post.content,
          year: this.post.year,
          createdOn: new Date(),
          imgId: this.post.imgId,
          url: this.post.url,
          alt: this.post.alt,
          tags: this.post.tags,
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Post added',
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
        .catch((err) => {
          this.msg = {
            type: 'warning',
            message: err.message,
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
    },
    newImage(type) {
      this.uploadImage = true
      this.type = type
    },
    checkFile(event) {
      this.file = event.target.files[0]
      imageCollection
        .where('name', '==', this.file.name)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            if (doc.exists) {
              this.existsModal = true
              this.uploadImage = false
              this.img.content = doc.data()
              this.img.id = doc.id
            }
          })
        })
    },
    saveFile() {
      if (this.type === 'headline') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store.dispatch('images/uploadImage', payload).then((response) => {
          this.img.content = response
          this.post.imgId = this.img.content.id
          this.post.url = this.img.content.url
          this.post.alt = this.img.alt
          this.type = ''
          this.file = ''
          this.img.alt = ''
          this.$store.dispatch('global/setLoading', false)
          setTimeout(() => {
            this.uploadImage = false
            this.$store.commit('images/setMsg', {})
          }, 2000)
        })
      } else if (this.type === 'editHeadline') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store.dispatch('images/uploadImage', payload).then((response) => {
          this.img.content = response
          this.clickedPost.imgId = this.img.content.id
          this.clickedPost.url = this.img.content.url
          this.clickedPost.alt = this.img.alt
          this.type = ''
          this.file = ''
          this.img.alt = ''
          this.$store.dispatch('global/setLoading', false)
          setTimeout(() => {
            this.uploadImage = false
            this.$store.commit('images/setMsg', {})
          }, 2000)
        })
      }
    },
    closeImageUpload() {
      this.uploadImage = false
      this.type = ''
      this.file = ''
      this.img.alt = ''
    },
    confirmUse() {
      if (this.type === 'headline') {
        this.post.imgId = this.img.id
        this.existsModal = false
        this.post.url = this.img.content.url
        this.post.alt = this.img.content.alt
        this.type = ''
        this.file = ''
        this.img.alt = ''
      } else if (this.type === 'editHeadline') {
        this.clickedPost.imgId = this.img.id
        this.existsModal = false
        this.clickedPost.url = this.img.content.url
        this.clickedPost.alt = this.img.content.alt
        this.type = ''
        this.file = ''
        this.img.alt = ''
      }
    },
    declineUse() {
      this.existsModal = false
      this.img.content = ''
      this.img.id = ''
      this.type = ''
      this.file = ''
      this.img.alt = ''
    },
    submitForm() {
      if (this.post.date === '' || this.post.title === '') {
        this.msg = {
          type: 'warning',
          message: 'Missing information check the form is completely filled',
        }
        setTimeout(() => {
          this.msg = {
            type: '',
            message: '',
          }
        }, 2000)
      } else {
        this.addPost()
      }
    },
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
    deletePost(post) {
      this.deleteModal = true
      this.toDeletePost.title = post.title
      this.toDeletePost.id = post.id
    },
    cancelDelete() {
      this.toDeletePost = {
        id: '',
        title: '',
      }
      this.deleteModal = false
    },
    confirmDelete() {
      featuredCollection
        .doc(this.toDeletePost.id)
        .delete()
        .then(() => {
          this.deleteModal = false
          this.msg = {
            type: 'danger',
            message: 'Post deleted',
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
        .catch((error) => {
          this.msg = {
            type: 'warning',
            message: error.message,
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
    },
    editPost(post) {
      this.editModal = true
      this.clickedPost.id = post.id
      this.clickedPost.title = post.title
      this.clickedPost.excerpt = post.excerpt
      this.clickedPost.content = post.content
      this.clickedPost.type = post.type
      this.clickedPost.slug = post.slug
      this.clickedPost.date = post.date
      this.clickedPost.content = post.content
      this.clickedPost.year = post.year
      this.clickedPost.url = post.url
      this.clickedPost.imgId = post.imgId
      this.clickedPost.alt = post.alt
      this.clickedPost.tags = post.tags
    },
    cancelEdit() {
      this.clickedPost = {
        id: '',
        title: '',
        excerpt: '',
        type: '',
        slug: '',
        date: '',
        content: '',
        year: '',
        url: '',
        imgId: '',
        alt: '',
        tags: '',
      }
      this.editModal = false
    },
    saveEdit() {
      let slugArry = []
      const newSlug = []
      let date = ''
      // create slug
      slugArry = this.clickedPost.title.split(' ')
      date = this.clickedPost.date
      this.clickedPost.year = date.split('-')[0]

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.clickedPost.slug = newSlug.join('-') + '-' + date

      featuredCollection
        .doc(this.clickedPost.id)
        .update({
          title: this.clickedPost.title,
          excerpt: this.clickedPost.excerpt,
          type: this.clickedPost.type,
          slug: this.clickedPost.slug,
          date: this.clickedPost.date,
          content: this.clickedPost.content,
          year: this.clickedPost.year,
          createdOn: new Date(),
          imgId: this.clickedPost.imgId,
          url: this.clickedPost.url,
          alt: this.clickedPost.alt,
          tags: this.clickedPost.tags,
        })
        .then(() => {
          this.cancelEdit()
          this.msg = {
            type: 'success',
            message: 'Post updated',
          }
          setTimeout(() => {
            this.msg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
        .catch((err) => {
          this.editMsg = {
            type: 'warning',
            message: err.message,
          }
          setTimeout(() => {
            this.editMsg = {
              type: '',
              message: '',
            }
          }, 2000)
        })
    },
  },
}
</script>
