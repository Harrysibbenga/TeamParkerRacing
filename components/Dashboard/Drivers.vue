<template>
  <div>
    <h1 class="text-center w-100">
      Drivers
    </h1>
    <mdb-container>
      <mdb-row>
        <mdb-col class="text-center pt-2 offset-3" col="6">
          <img
            v-if="driver.url"
            :src="driver.url"
            :alt="img.alt"
            class="img-fluid"
          >

          <img
            v-else
            :src="defaultImage"
            alt="Placeholder image"
            class="img-fluid"
          >
        </mdb-col>

        <mdb-col col="12">
          <form class="pt-2" @submit.prevent="submitForm">
            <div class="row">
              <div class="md-form col-4 p-0">
                <mdb-btn
                  color="primary"
                  class="ml-3"
                  inline
                  @click.native="newImage('driver')"
                >
                  Driver Image
                </mdb-btn>
              </div>
            </div>

            <div class="md-form">
              <mdb-input v-model.trim="driver.name" label="Name" inline />
            </div>
            <div class="md-form">
              <mdb-input
                v-model.trim="driver.partners"
                label="Partners"
                inline
              />
            </div>
            <div class="md-form">
              <mdb-input
                v-model.trim="driver.nationality"
                label="Nationality"
                inline
              />
            </div>
            <div class="md-form">
              <mdb-input v-model.trim="driver.series" label="Series" inline />
            </div>
            <!-- social  -->
            <mdb-col class="col-12 text-center pb-4">
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Facebook link</span>
                <mdb-input
                  slot="body"
                  v-model="driver.social.facebook"
                  label="Facebook link"
                />
                <mdb-btn slot="reference">
                  Facebook
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">insta link</span>
                <mdb-input
                  slot="body"
                  v-model="driver.social.insta"
                  label="insta link"
                />
                <mdb-btn slot="reference">
                  insta
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Twitter link</span>
                <mdb-input
                  slot="body"
                  v-model="driver.social.twitter"
                  label="Twitter link"
                />
                <mdb-btn slot="reference">
                  Twitter
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Google+ link</span>
                <mdb-input
                  slot="body"
                  v-model="driver.social.gplus"
                  label="Gplus link"
                />
                <mdb-btn slot="reference">
                  Google+
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Twitch link</span>
                <mdb-input
                  slot="body"
                  v-model="driver.social.twitch"
                  label="Twitch link"
                />
                <mdb-btn slot="reference">
                  Twitch
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Pinterest link</span>
                <mdb-input
                  slot="body"
                  v-model="driver.social.pinterest"
                  label="Pinterest link"
                />
                <mdb-btn slot="reference">
                  Pinterest
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Youtube link</span>
                <mdb-input
                  slot="body"
                  v-model="driver.social.youtube"
                  label="Youtube link"
                />
                <mdb-btn slot="reference">
                  Youtube
                </mdb-btn>
              </mdb-popover>
            </mdb-col>

            <mdb-btn color="primary" type="submit">
              Add driver
            </mdb-btn>
          </form>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <transition name="fade">
      <ui-message :msg="msg" />
    </transition>

    <mdb-container fluid class="p-0 pt-5">
      <mdb-row>
        <mdb-col>
          <table class="table">
            <thead class="black text-white">
              <tr>
                <th scope="col">
                  Title
                </th>
                <th scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(driver, index) in paginatedData" :key="index">
                <th scope="row">
                  {{ driver.name }}
                </th>
                <td>
                  <a class="mr-1" @click="editDriver(driver)">
                    <mdb-icon icon="edit" />
                  </a>
                  <a class="ml-1" @click="deleteDriver(driver)">
                    <mdb-icon icon="trash-alt" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </mdb-col>
        <mdb-col class="col-12 text-center">
          <mdb-btn
            :class="{ 'd-none': pageNumber === 0 }"
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
        <mdb-modal-title>{{ clickedDriver.name }}</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <form class="p-2 container-fluid" @submit.prevent>
          <mdb-row class="d-flex flex-center">
            <mdb-col col="6">
              <img
                v-if="clickedDriver.url"
                :src="clickedDriver.url"
                class="img-fluid"
              >
            </mdb-col>
            <mdb-col col="6" class="d-flex flex-center">
              <mdb-btn
                color="primary"
                @click.native="newImage('editDriver')"
              >
                Change image
              </mdb-btn>
            </mdb-col>

            <mdb-col col="4" class="md-form">
              <mdb-input
                v-model.trim="clickedDriver.name"
                label="Title"
                inline
              />
            </mdb-col>

            <mdb-col col="8" class="md-form">
              <mdb-input
                v-model.trim="clickedDriver.partners"
                label="Partners"
                inline
              />
            </mdb-col>
            <mdb-col col="4" class="md-form">
              <mdb-input
                v-model.trim="clickedDriver.nationality"
                label="Nationality"
                inline
              />
            </mdb-col>
            <mdb-col col="8" class="md-form">
              <mdb-input
                v-model.trim="clickedDriver.series"
                label="Series"
                inline
              />
            </mdb-col>
            <!-- social  -->
            <mdb-col class="col-12 text-center pb-4">
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Facebook link</span>
                <mdb-input
                  slot="body"
                  v-model="clickedDriver.social.facebook"
                  label="Facebook link"
                />
                <mdb-btn slot="reference">
                  Facebook
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">insta link</span>
                <mdb-input
                  slot="body"
                  v-model="clickedDriver.social.insta"
                  label="insta link"
                />
                <mdb-btn slot="reference">
                  insta
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Twitter link</span>
                <mdb-input
                  slot="body"
                  v-model="clickedDriver.social.twitter"
                  label="Twitter link"
                />
                <mdb-btn slot="reference">
                  Twitter
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Google+ link</span>
                <mdb-input
                  slot="body"
                  v-model="clickedDriver.social.gplus"
                  label="Gplus link"
                />
                <mdb-btn slot="reference">
                  Google+
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Twitch link</span>
                <mdb-input
                  slot="body"
                  v-model="clickedDriver.social.twitch"
                  label="Twitch link"
                />
                <mdb-btn slot="reference">
                  Twitch
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Pinterest link</span>
                <mdb-input
                  slot="body"
                  v-model="clickedDriver.social.pinterest"
                  label="Pinterest link"
                />
                <mdb-btn slot="reference">
                  Pinterest
                </mdb-btn>
              </mdb-popover>
              <mdb-popover trigger="click" :options="{ placement: 'bottom' }">
                <span slot="header">Youtube link</span>
                <mdb-input
                  slot="body"
                  v-model="clickedDriver.social.youtube"
                  label="Youtube link"
                />
                <mdb-btn slot="reference">
                  Youtube
                </mdb-btn>
              </mdb-popover>
            </mdb-col>
          </mdb-row>
        </form>
      </mdb-modal-body>
      <mdb-container>
        <transition name="fade">
          <ui-message :msg="editMsg" />
        </transition>
      </mdb-container>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="cancelEdit">
          Close
        </mdb-btn>
        <mdb-btn color="primary" @click.native="saveEdit">
          Save changes
        </mdb-btn>
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
        <span
          class="text-danger"
        >Are you sure you want to delete this driver</span>
        {{ toDeleteDriver.name }}
        <mdb-btn color="secondary" @click.native="cancelDelete">
          Close
        </mdb-btn>
        <mdb-btn color="danger" @click.native="confirmDelete">
          Delete
        </mdb-btn>
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
        <img :src="img.content.url" :alt="img.content.alt" class="img-fluid">
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn
          color="secondary"
          size="sm"
          @click.native="declineUse"
        >
          No
        </mdb-btn>
        <mdb-btn
          color="primary"
          size="sm"
          @click.native="confirmUse"
        >
          Yes
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <!-- uploadImage -->
    <mdb-modal size="md" :show="uploadImage" @close="closeImageUpload">
      <ui-loader />
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
                >
                <label
                  v-if="file.name"
                  class="custom-file-label"
                  for="inputGroupFile01"
                >{{ file.name }}</label>
                <label
                  v-else
                  class="custom-file-label"
                  for="inputGroupFile01"
                >Image</label>
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn
          color="secondary"
          size="sm"
          @click.native="closeImageUpload"
        >
          Close
        </mdb-btn>
        <mdb-btn
          color="primary"
          size="sm"
          :disabled="img.alt == ''"
          @click="saveFile(type)"
        >
          Save
        </mdb-btn>
      </mdb-modal-footer>
      <transition name="fade">
        <ui-message :msg="uploadMsg" />
      </transition>
    </mdb-modal>
  </div>
</template>

<script>
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
  mdbPopover,
} from 'mdbvue'
import { driversCollection, driverImgCollection } from '@/services/firebase'

export default {
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
    mdbPopover,
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
      driver: {
        slug: '',
        url: '',
        name: '',
        imgId: '',
        alt: '',
        social: {
          facebook: '',
          website: '',
          twitter: '',
          gplus: '',
          insta: '',
          twitch: '',
          pinterest: '',
          youtube: '',
        },
        partners: '',
        nationality: '',
        series: '',
      },
      pageNumber: 0,
      msg: '',
      editMsg: '',
      editModal: false,
      deleteModal: false,
      toDeleteDriver: {
        id: '',
        title: '',
      },
      clickedDriver: {
        id: '',
        name: '',
        slug: '',
        imgId: '',
        url: '',
        alt: '',
        social: {
          facebook: '',
          website: '',
          twitter: '',
          gplus: '',
          insta: '',
          twitch: '',
          pinterest: '',
          youtube: '',
        },
        partners: '',
        nationality: '',
        series: '',
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
    drivers() {
      return this.$store.getters['drivers/getDrivers']
    },
    uploadMsg() {
      return this.$store.getters['images/getMsg']
    },
    pageCount() {
      const l = this.drivers.length
      const s = this.size
      return Math.ceil(l / s)
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.drivers.slice(start, end)
    },
  },
  methods: {
    reset() {
      this.driver = {
        name: '',
        slug: '',
        imgId: '',
        url: '',
        alt: '',
        partners: '',
        nationality: '',
        series: '',
      }
      this.file = ''
      this.img = {
        id: '',
        content: '',
        alt: '',
      }
      this.galleryContent = []
      this.driver.social = {
        facebook: '',
        website: '',
        twitter: '',
        gplus: '',
        insta: '',
        twitch: '',
        pinterest: '',
        youtube: '',
      }
    },
    addDriver() {
      let slugArry = []
      const newSlug = []
      // create slug
      slugArry = this.driver.name.split(' ')

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.driver.slug = newSlug.join('-')

      if (this.driver.url === '') {
        this.driver.url = this.defaultImage
      }

      driversCollection
        .add({
          name: this.driver.name,
          slug: this.driver.slug,
          createdOn: new Date(),
          imgId: this.driver.imgId,
          url: this.driver.url,
          alt: this.driver.alt,
          social: this.driver.social,
          partners: this.driver.partners,
          nationality: this.driver.nationality,
          series: this.driver.series,
        })
        .then(() => {
          this.reset()
          this.msg = {
            type: 'success',
            message: 'Driver added',
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
      driverImgCollection
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
      if (this.type === 'driver') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store
          .dispatch('images/uploadDriverImage', payload)
          .then((response) => {
            this.img.content = response
            this.driver.imgId = this.img.content.id
            this.driver.url = this.img.content.url
            this.driver.alt = this.img.alt
            this.type = ''
            this.file = ''
            this.img.alt = ''
            this.$store.dispatch('global/setLoading', false)
            setTimeout(() => {
              this.uploadImage = false
              this.$store.commit('images/setMsg', {})
            }, 2000)
          })
      } else if (this.type === 'editDriver') {
        const payload = {}
        payload.file = this.file
        payload.alt = this.img.alt
        this.$store
          .dispatch('images/uploadDriverImage', payload)
          .then((response) => {
            this.img.content = response
            this.clickedDriver.imgId = this.img.content.id
            this.clickedDriver.url = this.img.content.url
            this.clickedDriver.alt = this.img.alt
            console.log(this.img.content)
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
      if (this.type === 'driver') {
        this.driver.imgId = this.img.id
        this.existsModal = false
        this.driver.url = this.img.content.url
        this.driver.alt = this.img.content.alt
        this.type = ''
        this.file = ''
        this.img.alt = ''
      } else if (this.type === 'editDriver') {
        this.clickedDriver.imgId = this.img.id
        this.existsModal = false
        this.clickedDriver.url = this.img.content.url
        this.clickedDriver.alt = this.img.content.alt
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
      if (this.driver.name === '') {
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
        this.addDriver()
      }
    },
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
    deleteDriver(driver) {
      this.deleteModal = true
      this.toDeleteDriver.name = driver.name
      this.toDeleteDriver.id = driver.id
    },
    cancelDelete() {
      this.toDeleteDriver = {
        id: '',
        title: '',
      }
      this.deleteModal = false
    },
    confirmDelete() {
      driversCollection
        .doc(this.toDeleteDriver.id)
        .delete()
        .then(() => {
          this.deleteModal = false
          this.msg = {
            type: 'danger',
            message: 'driver deleted',
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
    editDriver(driver) {
      this.editModal = true
      this.clickedDriver.id = driver.id
      this.clickedDriver.name = driver.name
      this.clickedDriver.slug = driver.slug
      this.clickedDriver.url = driver.url
      this.clickedDriver.imgId = driver.imgId
      this.clickedDriver.alt = driver.alt
      this.clickedDriver.social = driver.social
      this.clickedDriver.partners = driver.partners
      this.clickedDriver.nationality = driver.nationality
      this.clickedDriver.series = driver.series
    },
    cancelEdit() {
      this.clickedDriver = {
        id: '',
        name: '',
        slug: '',
        url: '',
        imgId: '',
      }
      this.editModal = false
    },
    saveEdit() {
      let slugArry = []
      const newSlug = []
      // create slug
      slugArry = this.clickedDriver.name.split(' ')

      slugArry.forEach((item) => {
        newSlug.push(item.toLowerCase())
      })

      this.clickedDriver.slug = newSlug.join('-')

      driversCollection
        .doc(this.clickedDriver.id)
        .update({
          name: this.clickedDriver.name,
          slug: this.clickedDriver.slug,
          createdOn: new Date(),
          imgId: this.clickedDriver.imgId,
          url: this.clickedDriver.url,
          alt: this.clickedDriver.alt,
          social: this.clickedDriver.social,
          partners: this.clickedDriver.partners,
          nationality: this.clickedDriver.nationality,
          series: this.clickedDriver.series,
        })
        .then(() => {
          this.cancelEdit()
          this.msg = {
            type: 'success',
            message: 'Driver updated',
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
