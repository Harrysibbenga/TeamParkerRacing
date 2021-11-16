<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('posts/setPosts')
    this.$store.dispatch('headline/setHeadlines')
    this.$store.dispatch('featured/setPosts')
    this.$store.dispatch('championships/setPosts')
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('videos/setVideos')
    this.$store.dispatch('drivers/setDrivers')
    this.$store.dispatch('tags/setTags')
  },
}
</script>
