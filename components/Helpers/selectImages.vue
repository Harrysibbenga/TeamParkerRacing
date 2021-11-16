<template>
  <div>
    <mdb-col col="12">
      <div class="d-flex flex-row">
        <mdb-btn
          color="primary"
          @click.native="selectModel = true"
        >
          Select images
        </mdb-btn>
      </div>
    </mdb-col>

    <!-- selectModel -->
    <mdb-modal
      top
      position="top"
      full-height
      direction="top"
      :show="selectModel"
      @close="closeSelection"
    >
      <mdb-modal-header>
        <mdb-modal-title>Select images</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="container-fluid">
          <div class="row">
            <div v-for="(img, index) in imageList" :key="index" class="col-4 p-0">
              <div class="custom-control custom-checkbox custom-control-inline">
                <img :src="img.url" :alt="img.alt" class="img-fluid">
                <input
                  :id="img.id"
                  type="checkbox"
                  class="custom-control-input"
                  @click="selected(img)"
                >
                <label class="custom-control-label" :for="img.id">
                  {{ img.alt }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn
          color="secondary"
          @click.native="closeSelection"
        >
          Close
        </mdb-btn>
        <mdb-btn color="primary" @click.native="saveSelection">
          Confirm
        </mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </div>
</template>


<script>
import {
  mdbCol,
  mdbBtn,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbModal,
} from 'mdbvue'

export default {
  components: {
    mdbBtn,
    mdbCol,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbModal,
  },
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedImages: [],
      selectModel: false,
    }
  },
  computed: {
    imageList() {
      return this.$store.getters['images/getImages']
    }
  },
  created() {
    this.default()
  },
  methods: {
    saveSelection() {
      this.$emit('update:images', this.selectedImages)
      this.selectModel = false
      this.selectedImages = []
    },
    closeSelection() {
      this.selectedImages = []
      this.selectModel = false
    },
    selected(img) {
      this.selectedImages.push(img)
    },
    default() {
      this.selectedImages = this.images
    }
  }
}
</script>
