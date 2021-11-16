<template>
  <div>
    <!-- uploadVideo -->
    <mdb-modal size="md" :show="uploadVideo" @close="closeVideoUpload">
      <mdb-modal-header>
        <mdb-modal-title>Upload video</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <div class="row">
          <div class="col-12">
            <div class="md-form">
              <mdb-input v-model.trim="vid.alt" label="Description" inline />
            </div>
          </div>
          <div class="col-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span id="imageInput" class="input-group-text">Upload</span>
              </div>
              <div class="custom-file">
                <input
                  id="videoInput"
                  ref="videoInput"
                  type="file"
                  class="custom-file-input"
                  aria-describedby="videoInput"
                  accept="video/mp4"
                  @change="checkFile($event)"
                />
                <label
                  v-if="file.name"
                  class="custom-file-label"
                  for="inputGroupFile01"
                >{{ file.name }}</label>
                <label v-else class="custom-file-label" for="inputGroupFile01">Video</label>
              </div>
            </div>
          </div>
        </div>
      </mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" size="sm" @click.native="closeVideoUpload">Close</mdb-btn>
        <mdb-btn color="primary" size="sm" :disabled="vid.alt == ''" @click="saveFile()">Save</mdb-btn>
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
      uploadVideo: {
          type: Boolean,
          default: false
      },
      video: {
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
      vid: {
        alt: "",
      },
    };
  },
  computed: {
    videoList() {
      return this.$store.getters["videos/getVideos"];
    },
    uploadMsg() {
      return this.$store.getters["videos/getMsg"];
    },
  },
  methods: {
    saveFile() {
      const payload = {};
      payload.file = this.file;
      payload.alt = this.vid.alt;
      this.$store.dispatch("videos/singleUpload", payload).then((vid) => {
        this.$emit('update:video', vid)
      })
      setTimeout(() => {
        this.$emit('update:uploadVideo', false)
        this.file = "";
        this.img.alt = "";
      }, 2000);
    },
    checkFile(event) {
      this.file = event.target.files[0];
    },
    closeVideoUpload() {
      this.$emit('update:uploadVideo', false)
      this.file = "";
      this.vid.alt = "";
    },
  },
};
</script>
