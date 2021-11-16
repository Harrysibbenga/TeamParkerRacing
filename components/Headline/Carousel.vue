<template>
  <div>
    <helpers-multi-upload :images.sync="carousel.images" />

    <helpers-select-images :images.sync="carousel.images" />

    <mdb-row v-if="carousel.images.length > 0">
      <mdb-col v-for="(item, index) in carousel.images" :key="index" col="4">
        <img :src="item.url" :alt="item.alt" class="img-fluid">
        <mdb-btn @click="removeImage(index, carousel.images)">
          Delete
        </mdb-btn>
      </mdb-col>
    </mdb-row>

    <mdb-btn color="primary" @click.native="update">
      Update
    </mdb-btn>
  </div>
</template>

<script>
import { mdbBtn, mdbRow, mdbCol } from "mdbvue"
import { headlineCollection } from "@/services/firebase"
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
  data() {
    return {
      images: []
    }
  },
  computed: {
    carousel: {
      get() {
        return this.content
      },
      set(newVal) {
        return newVal
      }
    }
  },
  methods: {
    update(){
      headlineCollection
        .doc(this.carousel.id)
        .update({
          images: this.carousel.images,
          value: this.carousel.value,
          active: this.carousel.active,
        })
    },
    removeImage(img, images){
      const index = images.indexOf(img)
      images.splice(index, 1)
    },
  }
}
</script>
