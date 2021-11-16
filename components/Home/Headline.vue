<template>
  <div v-if="item" class="parent">
    <home-carousel v-if="item.name == 'Carousel'" :images.sync="item.images" />
    <home-video v-if="item.name == 'Video'" :video.sync="item.vid" />
  </div>
</template>

<script>
export default {
  computed: {
    item() {
      const headline = this.$store.getters['headline/getHeadlines']
      return headline.filter(item => item.active === true)[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.headline {
 height: 90vh;
 width: auto;
 transform: translateX(-30%)
}
.parent {
    position: relative;
    overflow: hidden;
}

@media (min-width: 768px) {
  .headline {
    height: auto;
    width: 100%;
    transform: none;
  }
}
</style>
