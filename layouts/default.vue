<template>
  <div>
    <NavigationSideNav>
      <Nuxt />
      <ModalsSubscribeModal></ModalsSubscribeModal>
    </NavigationSideNav>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('posts/setPosts')
    this.$store.dispatch('featured/setPosts')
    this.$store.dispatch('championships/setPosts')
    this.$store.dispatch('images/setImages')
    this.$store.dispatch('drivers/setDrivers')
    this.$store.dispatch('tags/setTags')
  },
}
</script>
