<template>
  <div>
    <!-- uploadImage -->
    <mdb-modal size="md" :show="uploadImage" @close="closeImageUpload">
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
                <label v-else class="custom-file-label" for="inputGroupFile01">Image</label>
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" size="sm" @click.native="closeImageUpload">
          Close
        </mdb-btn>
        <mdb-btn color="primary" size="sm" :disabled="img.alt == ''" @click="saveFile()">
          Save
        </mdb-btn>
      </mdb-modal-footer>
      <transition name="fade">
        <div
          v-if="uploadMsg.message != ''"
          :class="`bg-${uploadMsg.type}`"
          class="text-white text-center"
        >
          <p>{{ uploadMsg.message }}</p>
        </div>
      </transition>
    </mdb-modal>
  </div>
</template>

<script>
import {
  mdbInput,
  mdbBtn,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbModal,
} from "mdbvue";
export default {
  components: {
    mdbInput,
    mdbBtn,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbModal,
  },
  props: {
      uploadImage: {
          type: Boolean,
          default: false
      },
      image: {
          type: Object,
          default: () => {}
      }
  },
  data() {
    return {
      file: "",
      msg: {
        message: "",
        type: "",
      },
      img: {
        alt: "",
      },
    };
  },
  computed: {
    imageList() {
      return this.$store.getters["images/getImages"];
    },
    uploadMsg() {
      return this.$store.getters["images/getMsg"];
    },
  },
  methods: {
    saveFile() {
      const payload = {};
      payload.file = this.file;
      payload.alt = this.img.alt;
      this.$store.dispatch("images/uploadImage", payload).then((img) => {
        this.$emit('update:image', img)
      })
      setTimeout(() => {
        this.$emit('update:uploadImage', false)
        this.file = "";
        this.img.alt = "";
      }, 2000);
    },
    checkFile(event) {
      this.file = event.target.files[0];
    },
    closeImageUpload() {
      this.$emit('update:uploadImage', false)
      this.file = "";
      this.img.alt = "";
    },
  },
};
</script>
