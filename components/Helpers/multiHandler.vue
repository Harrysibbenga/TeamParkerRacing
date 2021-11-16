<template>
  <div>
    <mdb-row>
      <helpers-multi-upload :images.sync="gallery" />

      <helpers-select-images :images.sync="gallery" />
    </mdb-row>

    <mdb-row v-if="gallery.length > 0">
      <mdb-col v-for="(item, index) in gallery" :key="index" col="4">
        <img :src="item.url" :alt="item.alt" class="img-fluid">
        <mdb-btn @click="removeImage(index, gallery)">
          Delete
        </mdb-btn>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import { mdbBtn, mdbRow, mdbCol } from "mdbvue"

export default {
  components: {
    mdbBtn,
    mdbRow,
    mdbCol
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    },
  },
  computed: {
    gallery: {
      get() {
        return this.content
      },
      set(newVal) {
        return newVal
      }
    }
  },
  methods: {
    removeImage(img, images){
      const index = images.indexOf(img)
      images.splice(index, 1)
    },
  }
}
</script>
