<template>
  <div>
    <helpers-video-handler :video="vid.vid" :video-list="videos" />

    <mdb-btn @click.native="update">
      Update
    </mdb-btn>
  </div>
</template>

<script>
import {mdbBtn} from "mdbvue"
import { headlineCollection  } from "@/services/firebase"
export default {
  components: {
    mdbBtn
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return{
      video: {}
    }
  },
  computed: {
    videos() {
      return this.$store.getters['videos/getVideos']
    },
    vid: {
      get() {
        return this.content
      },
      set(newVal){
        this.video = newVal
      }
    }
  },
  methods: {
      update(){
        headlineCollection
          .doc(this.vid.id)
          .update({
            video: this.video,
            value: this.vid.value,
            active: this.vid.active,
          })
      }
    }
}
</script>
