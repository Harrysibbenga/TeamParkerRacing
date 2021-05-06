<template>
  <div>
    <h1 class="text-center w-100">Championships</h1>

    <!-- Headline images  -->
    <mdb-container>
      <mdb-row>
        <mdb-col class="text-center pt-2" col="8">
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
        <mdb-col class="text-center pt-2" col="4">
          <img
            v-if="post.logoUrl"
            :src="post.logoUrl"
            :alt="post.logoAlt"
            class="img-fluid"
          />

          <img
            v-else
            :src="defaultImage"
            alt="Placeholder image"
            class="img-fluid"
          />
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <!-- Form content  -->
    <form class="pt-2" @submit.prevent="submitForm">
      <!-- Headline  -->
      <mdb-container>
        <mdb-row>
          <mdb-col col="12">
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

              <div class="md-form col-4 p-0">
                <mdb-btn
                  color="primary"
                  class="ml-3"
                  inline
                  @click.native="newImage('logo')"
                  >Logo</mdb-btn
                >
              </div>
            </div>

            <div class="md-form">
              <mdb-input v-model.trim="post.name" label="Name" inline />
            </div>

            <div class="md-form">
              <mdb-input
                v-model.trim="post.excerpt"
                label="Excerpt (used for meta)"
                inline
              />
            </div>
            <mdb-col col="12">
              <app-editor :content.sync="post.content"></app-editor>
            </mdb-col>
          </mdb-col>
        </mdb-row>
      </mdb-container>

      <!-- Timetable -->
      <mdb-container fluid class="p-0">
        <mdb-row>
          <mdb-col col="10" class="my-5 offset-1">
            <h2 class="text-center">Timetable</h2>
            <mdb-input
              v-model.trim="post.timetable"
              label="Title and year"
              inline
            />
          </mdb-col>
          <mdb-col col="4" class="p-5">
            <p class="h4 text-center mb-4">Fixture</p>
            <img
              v-if="post.timetableImg"
              :src="post.timetableImg"
              :alt="post.timetableAlt"
              class="img-fluid"
            />
            <img
              v-else
              :src="defaultImage"
              alt="Placeholder image"
              class="img-fluid"
            />
            <mdb-btn
              color="primary"
              class="ml-3"
              inline
              @click.native="newImage('timetable')"
              >Image</mdb-btn
            >
            <div class="grey-text">
              <mdb-input
                v-model="fixture.dateFrom"
                label="From: "
                type="date"
              />
              <mdb-input v-model="fixture.dateTo" label="To: " type="date" />
              <mdb-input v-model="fixture.track" label="Track" type="text" />
            </div>
            <div class="text-center">
              <mdb-btn
                color="primary"
                :disabled="
                  fixture.dateFrom == '' ||
                  fixture.dateTo == '' ||
                  fixture.track == ''
                "
                @click="addFixture('new')"
                >Add Fixture</mdb-btn
              >
            </div>
          </mdb-col>
          <mdb-col col="8" class="p-5">
            <table class="table">
              <thead class="black text-white">
                <tr>
                  <th scope="col">Track</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(fixture, index) in post.fixtures" :key="index">
                  <th scope="row">{{ fixture.track }}</th>
                  <th scope="row">{{ fixture.dateFrom }}</th>
                  <td>
                    <button
                      class="btn btn-danger btn-sm"
                      @click="removeItem(index, post.fixtures)"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </mdb-col>
        </mdb-row>
      </mdb-container>

      <mdb-col col="12" class="py-3">
        <tags :tags.sync="post.tags"></tags>
      </mdb-col>

      <!-- Gallery  -->
      <mdb-container>
        <mdb-row class="text-center">
          <mdb-col col="12">
            <h3 class="py-3">Gallery content</h3>
            <div class="d-flex flex-row justify-content-center">
              <mdb-btn color="primary" @click.native="newImage('gallery')"
                >New image</mdb-btn
              >
              <mdb-btn color="primary" @click.native="selectImage('gallery')"
                >Select image</mdb-btn
              >
            </div>
            <mdb-row>
              <mdb-col
                v-for="(img, index) in galleryContent"
                :key="index"
                class="col-6 col-md-4"
              >
                <img :src="img.url" :alt="img.alt" class="img-fluid" />
                <button
                  class="btn btn-danger btn-sm"
                  @click="removeItem(index, galleryContent)"
                >
                  Delete
                </button>
              </mdb-col>
            </mdb-row>
          </mdb-col>

          <mdb-col col="12" class="py-3">
            <h3 class="py-3">Drivers</h3>
            <mdb-btn color="primary" @click.native="addDriver('new')"
              >Select Drivers</mdb-btn
            >
            <mdb-row>
              <mdb-col
                v-for="(driver, index) in championshipDrivers"
                :key="index"
                class="col-6 col-md-4"
              >
                <img :src="driver.url" :alt="driver.alt" class="img-fluid" />
                <h2>{{ driver.name }}</h2>
                <button
                  class="btn btn-danger btn-sm"
                  @click="removeItem(index, championshipDrivers)"
                >
                  Delete
                </button>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-container>

      <!-- submit button -->
      <div class="w-100 text-right p-5 pb-0">
        <mdb-btn color="secondary" size="lg" type="submit"
          >Add Chamiopnship</mdb-btn
        >
      </div>
    </form>

    <!-- Message -->
    <transition name="fade">
      <app-message :msg="msg"></app-message>
    </transition>

    <!-- all posts  -->
    <mdb-container fluid class="p-0 pt-5">
      <mdb-row>
        <mdb-col>
          <table class="table">
            <thead class="black text-white">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in paginatedData" :key="index">
                <th scope="row">{{ post.name }}</th>
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
        <mdb-modal-title>{{ clickedPost.name }}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <!-- Headline images  -->
        <mdb-container>
          <mdb-row>
            <mdb-col class="text-center pt-2" col="8">
              <img
                v-if="clickedPost.url"
                :src="clickedPost.url"
                :alt="clickedPost.alt"
                class="img-fluid"
              />
            </mdb-col>
            <mdb-col class="text-center pt-2" col="4">
              <img
                :src="clickedPost.logoUrl"
                :alt="clickedPost.logoAlt"
                class="img-fluid"
              />
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <!-- Form content  -->
        <form class="pt-2" @submit.prevent>
          <!-- Headline  -->
          <mdb-container>
            <mdb-row>
              <mdb-col col="12">
                <div class="row">
                  <div class="md-form col-4 p-0">
                    <mdb-btn
                      color="primary"
                      class="ml-3"
                      inline
                      @click.native="newImage('editHeadline')"
                      >Change Headline Image</mdb-btn
                    >
                  </div>

                  <div class="md-form col-4 p-0">
                    <mdb-btn
                      color="primary"
                      class="ml-3"
                      inline
                      @click.native="newImage('editLogo')"
                      >Change Logo</mdb-btn
                    >
                  </div>
                </div>

                <div class="md-form">
                  <mdb-input
                    v-model.trim="clickedPost.name"
                    label="Name"
                    inline
                  />
                </div>

                <div class="md-form">
                  <mdb-input
                    v-model.trim="clickedPost.excerpt"
                    label="Excerpt (used for meta)"
                    inline
                  />
                </div>
                <mdb-col col="12">
                  <app-editor :content.sync="clickedPost.content"></app-editor>
                </mdb-col>
              </mdb-col>
            </mdb-row>
          </mdb-container>

          <!-- Timetable -->
          <mdb-container fluid class="p-0">
            <mdb-row>
              <mdb-col col="10" class="my-5 offset-1">
                <h2 class="text-center">Timetable</h2>
                <mdb-input
                  v-model.trim="clickedPost.timetable"
                  label="Title and year"
                  inline
                />
              </mdb-col>
              <mdb-col col="4" class="p-5">
                <p class="h4 text-center mb-4">Fixture</p>
                <img
                  v-if="clickedPost.timetableImg"
                  :src="clickedPost.timetableImg"
                  :alt="clickedPost.timetableAlt"
                  class="img-fluid"
                />
                <img
                  v-else
                  :src="defaultImage"
                  alt="Placeholder image"
                  class="img-fluid"
                />
                <mdb-btn
                  color="primary"
                  class="ml-3"
                  inline
                  @click.native="newImage('editTimetable')"
                  >Image</mdb-btn
                >
                <div class="grey-text">
                  <mdb-input
                    v-model="fixture.dateFrom"
                    label="From: "
                    type="date"
                  />
                  <mdb-input
                    v-model="fixture.dateTo"
                    label="To: "
                    type="date"
                  />
                  <mdb-input
                    v-model="fixture.track"
                    label="Track"
                    type="text"
                  />
                </div>
                <div class="text-center">
                  <mdb-btn
                    color="primary"
                    :disabled="
                      fixture.dateFrom == '' ||
                      fixture.dateTo == '' ||
                      fixture.track == ''
                    "
                    @click="addFixture('edit')"
                    >Add Fixture</mdb-btn
                  >
                </div>
              </mdb-col>
              <mdb-col col="8" class="p-5">
                <table class="table">
                  <thead class="black text-white">
                    <tr>
                      <th scope="col">Track</th>
                      <th scope="col">Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(fixture, index) in clicked.fixtures"
                      :key="index"
                    >
                      <th scope="row">{{ fixture.track }}</th>
                      <th scope="row">{{ fixture.dateFrom }}</th>
                      <td>
                        <button
                          class="btn btn-danger btn-sm"
                          @click="removeItem(index, clicked.fixtures)"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </mdb-col>
            </mdb-row>
          </mdb-container>

          <mdb-col col="12" class="py-3">
            <tags :tags.sync="clickedPost.tags"></tags>
          </mdb-col>

          <!-- Gallery  -->
          <mdb-container>
            <mdb-row class="text-center">
              <mdb-col col="12">
                <h3 class="py-3">Gallery content</h3>
                <div class="d-flex flex-row justify-content-center">
                  <mdb-btn
                    color="primary"
                    @click.native="newImage('editGallery')"
                    >New image</mdb-btn
                  >
                  <mdb-btn color="primary" @click.native="selectImage('edit')"
                    >Select image</mdb-btn
                  >
                </div>
                <mdb-row>
                  <mdb-col
                    v-for="(img, index) in clicked.galleryContent"
                    :key="index"
                    class="col-6 col-md-4"
                  >
                    <img :src="img.url" :alt="img.alt" class="img-fluid" />
                    <button
                      class="btn btn-danger btn-sm"
                      @click="removeItem(index, clicked.galleryContent)"
                    >
                      Delete
                    </button>
                  </mdb-col>
                </mdb-row>
              </mdb-col>

              <mdb-col col="12" class="py-3">
                <h3 class="py-3">Drivers</h3>
                <mdb-btn color="primary" @click.native="addDriver('edit')"
                  >Select Drivers</mdb-btn
                >
                <mdb-row>
                  <mdb-col
                    v-for="(driver, index) in clicked.drivers"
                    :key="index"
                    class="col-6 col-md-4"
                  >
                    <img
                      :src="driver.url"
                      :alt="driver.alt"
                      class="img-fluid"
                    />
                    <h2>{{ driver.name }}</h2>
                    <button
                      class="btn btn-danger btn-sm"
                      @click="removeItem(index, clicked.drivers)"
                    >
                      Delete
                    </button>
                  </mdb-col>
                </mdb-row>
              </mdb-col>
            </mdb-row>
          </mdb-container>
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
        {{ toDeletePost.name }}
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

    <!-- addDriver -->
    <mdb-modal size="xl" :show="driverModel" @close="closeDriverModel">
      <mdb-modal-header>
        <mdb-modal-title>Add driver</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <!-- Default checked -->
        <div
          v-for="(driver, index) in drivers"
          :key="index"
          class="custom-control custom-radio"
        >
          <input
            :id="driver.id"
            type="radio"
            class="custom-control-input"
            name="drivers"
            @click="selectedDriver(driver)"
          />
          <label class="custom-control-label" :for="driver.id">{{
            driver.name
          }}</label>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" size="sm" @click.native="closeDriverModel"
          >Close</mdb-btn
        >
        <mdb-btn color="primary" size="sm" @click="saveDriver">Save</mdb-btn>
      </mdb-modal-footer>
      <transition name="fade">
        <app-message :msg="uploadMsg"></app-message>
      </transition>
    </mdb-modal>

    <!-- selectModel -->
    <mdb-modal
      top
      position="top"
      full-height
      direction="top"
      :show="selectModel"
      @close="selectModel = false"
    >
      <mdb-modal-header>
        <mdb-modal-title>Select image</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="container-fluid">
          <div class="row">
            <div v-for="(img, index) in images" :key="index" class="col-4 p-0">
              <div class="custom-control custom-checkbox custom-control-inline">
                <img :src="img.url" :alt="img.alt" class="img-fluid" />
                <input
                  :id="img.id"
                  type="checkbox"
                  class="custom-control-input"
                  @click="selected(img)"
                />
                <label class="custom-control-label" :for="img.id">
                  {{ img.alt }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="selectModel = false"
          >Close</mdb-btn
        >
        <mdb-btn color="primary" @click.native="saveSelection">Confirm</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>

<script>
import moment from 'moment'
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
import { championshipCollection, imageCollection } from '@/services/firebase'

export default {
  name: 'PostsDashboard',
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
  // Filters
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
        name: '',
        excerpt: '',
        slug: '',
        content: '',
        timetable: '',
        timetableImg: '',
        timetableAlt: '',
        imgId: '',
        url: '',
        alt: '',
        logoUrl: '',
        logoAlt: '',
        logoId: '',
        fixtures: [],
        tags: '',
      },
      driver: {
        id: '',
        slug: '',
        url: '',
        name: '',
        imgId: '',
        alt: '',
        social: '',
        partners: '',
        nationality: '',
        series: '',
      },
      fixture: {
        dateFrom: '',
        dateTo: '',
        track: '',
      },
      pageNumber: 0,
      msg: '',
      editMsg: '',
      editModal: false,
      deleteModal: false,
      driverModel: false,
      toDeletePost: {
        id: '',
        name: '',
      },
      clickedPost: {
        id: '',
        name: '',
        excerpt: '',
        slug: '',
        content: '',
        timetable: '',
        timetableImg: '',
        timetableAlt: '',
        imgId: '',
        url: '',
        alt: '',
        logoUrl: '',
        logoAlt: '',
        logoId: '',
        tags: '',
      },
      existsModal: false,
      uploadImage: false,
      galleryContent: [],
      championshipDrivers: [],
      clicked: {
        galleryContent: [],
        drivers: [],
        fixtures: [],
      },
      selectedImages: [],
      selectModel: false,
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
      return this.$store.getters['championships/getPosts']
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
    images() {
      return this.$store.getters['images/getImages']
    },
    drivers() {
      return this.$store.getters['drivers/getDrivers']
    },
  },
  methods: {
    reset() {
      this.post = {
        name: '',
        excerpt: '',
        slug: '',
        content: '',
        timetable: '',
        imgId: '',
        url: '',
        alt: '',
        logoUrl: '',
        logoAlt: '',
        logoId: '',
        fixtures: [],
        tags: '',
      }
      this.file = ''
      this.img = {
        id: '',
        content: '',
        alt: '',
      }
      this.galleryContent = []
      this.championshipDrivers = []
    },
    addPost() {
      let slugArry = []
      const newSlug = []
      // create slug
      slugArry = this.post.name.split(' ')

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.post.slug = newSlug.join('-')

      if (this.post.url === '') {
        this.post.url = this.defaultImage
      }
      championshipCollection
        .add({
          name: this.post.name,
          excerpt: this.post.excerpt,
          slug: this.post.slug,
          content: this.post.content,
          createdOn: new Date(),
          imgId: this.post.imgId,
          url: this.post.url,
          alt: this.post.alt,
          timetable: this.post.timetable,
          timetableImg: this.post.timetableImg,
          timetableAlt: this.post.timetableAlt,
          logoId: this.post.logoId,
          logoUrl: this.post.logoUrl,
          logoAlt: this.post.logoAlt,
          galleryContent: this.galleryContent,
          drivers: this.championshipDrivers,
          fixtures: this.post.fixtures,
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
    // Timetable
    addFixture(type) {
      if (type === 'edit') {
        this.clicked.fixtures.push(this.fixture)
        this.fixture = {
          dateFrom: '',
          dateTo: '',
          track: '',
        }
      } else if (type === 'add') {
        this.post.fixtures.push(this.fixture)
        this.fixture = {
          dateFrom: '',
          dateTo: '',
          track: '',
        }
      }
    },
    // Image upload
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
      if (this.type === 'gallery') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store.dispatch('images/uploadImage', payload).then((response) => {
          this.img.content = response
          const image = {
            imgId: this.img.content.id,
            alt: this.img.alt,
            url: this.img.content.url,
          }
          this.galleryContent.push(image)
          this.type = ''
          this.file = ''
          this.img.alt = ''
          this.$store.dispatch('global/setLoading', false)
          setTimeout(() => {
            this.uploadImage = false
            this.$store.commit('images/setMsg', {})
          }, 2000)
        })
      } else if (this.type === 'headline') {
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
      } else if (this.type === 'logo') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store
          .dispatch('images/uploadLogoImage', payload)
          .then((response) => {
            this.img.content = response
            this.post.logoId = this.img.content.id
            this.post.logoUrl = this.img.content.url
            this.post.logoAlt = this.img.alt
            this.type = ''
            this.file = ''
            this.img.alt = ''
            this.$store.dispatch('global/setLoading', false)
            setTimeout(() => {
              this.uploadImage = false
              this.$store.commit('images/setMsg', {})
            }, 2000)
          })
      } else if (this.type === 'editGallery') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store.dispatch('images/uploadImage', payload).then((response) => {
          this.img.content = response
          const image = {
            imgId: this.img.content.id,
            alt: this.img.alt,
            url: this.img.content.url,
          }
          this.clicked.galleryContent.push(image)
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
      } else if (this.type === 'editLogo') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store
          .dispatch('images/uploadLogoImage', payload)
          .then((response) => {
            this.img.content = response
            this.clickedPost.logoId = this.img.content.id
            this.clickedPost.logoUrl = this.img.content.url
            this.clickedPost.logoAlt = this.img.alt
            this.type = ''
            this.file = ''
            this.img.alt = ''
            this.$store.dispatch('global/setLoading', false)
            setTimeout(() => {
              this.uploadImage = false
              this.$store.commit('images/setMsg', {})
            }, 2000)
          })
      } else if (this.type === 'timetable') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store.dispatch('images/uploadImage', payload).then((response) => {
          this.img.content = response
          this.post.timetableImg = this.img.content.url
          this.post.timetableAlt = this.img.alt
          this.type = ''
          this.file = ''
          this.img.alt = ''
          this.$store.dispatch('global/setLoading', false)
          setTimeout(() => {
            this.uploadImage = false
            this.$store.commit('images/setMsg', {})
          }, 2000)
        })
      } else if (this.type === 'editTimetable') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store.dispatch('images/uploadImage', payload).then((response) => {
          this.img.content = response
          this.clickedPost.timetableImg = this.img.content.url
          this.clickedPost.timetableAlt = this.img.alt
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
      } else if (this.type === 'logo') {
        this.post.logoId = this.img.id
        this.existsModal = false
        this.post.logoUrl = this.img.content.url
        this.post.logoAlt = this.img.content.alt
        this.type = ''
        this.file = ''
        this.img.alt = ''
      } else if (this.type === 'editLogo') {
        this.clickedPost.logoId = this.img.id
        this.existsModal = false
        this.clickedPost.logoUrl = this.img.content.url
        this.clickedPost.logoAlt = this.img.content.alt
        this.type = ''
        this.file = ''
        this.img.alt = ''
      } else if (this.type === 'gallery') {
        const image = {
          imgId: this.img.id,
          alt: this.img.content.alt,
          url: this.img.content.url,
        }
        this.galleryContent.push(image)
        this.existsModal = false
        this.type = ''
        this.file = ''
        this.img.alt = ''
      } else if (this.type === 'edit') {
        const image = {
          imgId: this.img.id,
          alt: this.img.content.alt,
          url: this.img.content.url,
        }
        this.clicked.galleryContent.push(image)
        this.existsModal = false
        this.type = ''
        this.file = ''
        this.img.alt = ''
      } else if (this.type === 'timetable') {
        this.post.imgId = this.img.id
        this.existsModal = false
        this.post.timetableImg = this.img.content.url
        this.post.timetableAlt = this.img.content.alt
        this.type = ''
        this.file = ''
        this.img.alt = ''
      } else if (this.type === 'editTimetable') {
        this.clickedPost.imgId = this.img.id
        this.existsModal = false
        this.clickedPost.timetableImg = this.img.content.url
        this.clickedPost.timetableAlt = this.img.content.alt
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
    // Pagination
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
    // Submit post
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
    // Delete
    deletePost(post) {
      this.deleteModal = true
      this.toDeletePost.name = post.name
      this.toDeletePost.id = post.id
    },
    cancelDelete() {
      this.toDeletePost = {
        id: '',
        name: '',
      }
      this.deleteModal = false
    },
    confirmDelete() {
      championshipCollection
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
    // Edit
    editPost(post) {
      this.editModal = true
      this.clickedPost.id = post.id
      this.clickedPost.alt = post.alt
      this.clickedPost.name = post.name
      this.clickedPost.excerpt = post.excerpt
      this.clickedPost.content = post.content
      this.clickedPost.slug = post.slug
      this.clickedPost.timetable = post.timetable
      this.clickedPost.url = post.url
      this.clickedPost.imgId = post.imgId
      this.clickedPost.logoAlt = post.logoAlt
      this.clickedPost.logoUrl = post.logoUrl
      this.clickedPost.logoId = post.logoId
      this.clickedPost.tags = post.tags
      this.clicked.galleryContent = post.galleryContent
      this.clicked.drivers = post.drivers
      this.clicked.fixtures = post.fixtures
      this.clickedPost.timetableImg = post.timetableImg
      this.clickedPost.timetableAlt = post.timetableAlt
    },
    cancelEdit() {
      this.clickedPost = {
        id: '',
        name: '',
        excerpt: '',
        slug: '',
        content: '',
        timetable: '',
        imgId: '',
        url: '',
        alt: '',
        logoUrl: '',
        logoAlt: '',
        logoId: '',
        fixtures: [],
        tags: '',
      }
      this.clicked = {
        galleryContent: [],
        drivers: [],
        fixures: [],
      }
      this.editModal = false
    },
    saveEdit() {
      let slugArry = []
      const newSlug = []
      // create slug
      slugArry = this.clickedPost.name.split(' ')

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.clickedPost.slug = newSlug.join('-')

      championshipCollection
        .doc(this.clickedPost.id)
        .update({
          name: this.clickedPost.name,
          alt: this.clickedPost.alt,
          excerpt: this.clickedPost.excerpt,
          timetable: this.clickedPost.timetable,
          slug: this.clickedPost.slug,
          content: this.clickedPost.content,
          createdOn: new Date(),
          imgId: this.clickedPost.imgId,
          url: this.clickedPost.url,
          logoAlt: this.clickedPost.logoAlt,
          logoId: this.clickedPost.logoId,
          logoUrl: this.clickedPost.logoUrl,
          galleryContent: this.clicked.galleryContent,
          drivers: this.clicked.drivers,
          fixtures: this.clicked.fixtures,
          timetableImg: this.clickedPost.timetableImg,
          timetableAlt: this.clickedPost.timetableAlt,
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
    // Gallery
    selectImage(type) {
      this.selectModel = true
      this.type = type
    },
    saveSelection() {
      if (this.type === 'edit') {
        this.selectedImages.forEach((img) => {
          this.clicked.galleryContent.push(img)
        })
      } else if (this.type === 'gallery') {
        this.selectedImages.forEach((img) => {
          this.galleryContent.push(img)
        })
      }
      this.selectModel = false
      this.type = ''
      this.selectedImages = []
    },
    selected(img) {
      this.selectedImages.push(img)
    },
    removeItem(index, gallery) {
      for (let i = 0; i < gallery.length; i++) {
        gallery.splice(index, 1)
      }
    },
    // Driver
    selectedDriver(driver) {
      this.driver.id = driver.id
      this.driver.url = driver.url
      this.driver.alt = driver.alt
      this.driver.slug = driver.slug
      this.driver.name = driver.name
      this.driver.imgId = driver.imgId
      this.driver.social = driver.social
      this.driver.partners = driver.partners
      this.driver.nationality = driver.nationality
      this.driver.series = driver.series
    },
    addDriver(type) {
      this.driverModel = true
      this.type = type
    },
    closeDriverModel() {
      this.driverModel = false
      this.driver = {
        id: '',
        slug: '',
        url: '',
        name: '',
        imgId: '',
        alt: '',
        social: '',
        partners: '',
        nationality: '',
        series: '',
      }
    },
    saveDriver() {
      if (this.type === 'new') {
        this.championshipDrivers.push(this.driver)
        this.driver = {
          id: '',
          slug: '',
          url: '',
          name: '',
          imgId: '',
          alt: '',
          social: '',
          partners: '',
          nationality: '',
          series: '',
        }
      } else if (this.type === 'edit') {
        this.clicked.drivers.push(this.driver)
        this.driver = {
          id: '',
          slug: '',
          url: '',
          name: '',
          imgId: '',
          alt: '',
          social: '',
          partners: '',
          nationality: '',
          series: '',
        }
      }
      this.driverModel = false
      this.type = ''
    },
  },
}
</script>
