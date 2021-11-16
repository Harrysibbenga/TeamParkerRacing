<template>
  <div>
    <mdb-carousel
      :interval="5000"
      slide
      show-controls
      show-indicators
    >
      <mdb-carousel-item
        v-for="(item,index) in images"
        :key="index"
        img
        :src="item.url"
        :alt="item.alt"
        style="width:100%; height:98vh;"
      />
    </mdb-carousel>
  </div>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from "mdbvue";
export default {
  components: {
      mdbCarousel,
      mdbCarouselItem
    },
  props: {
    images: {
      type: Array,
      default: () => []
    },
  },
}
</script>
