<template>
  <div>
    <FeaturedHead :post="post" class="text-center w-100 m-auto" />
    <FeaturedBody :post="post" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
    }
  },
  head() {
    return {
      title: this.post.title,
      titleTemplate: null,
      meta: [
        {
          property: 'og:title',
          content: this.post.title,
        },
        {
          property: 'og:description',
          content: this.post.excerpt,
        },
        {
          property: 'og:url',
          content: 'https://teamparkerracing.com/' + this.slug,
        },
        {
          property: 'og:image',
          content: this.post.url,
        },
        { property: 'og:site_name', content: 'Team Parker Racing' },
        { property: 'og:type', content: 'post' },
        { name: 'robots', content: 'index,follow' },
        {
          vmid: 'description',
          name: 'description',
          content: this.post.excerpt,
        },
      ],
    }
  },
  created() {
    const slug = this.$route.params.slug
    this.$store.dispatch('featured/setPostSlug', slug).then((data) => {
      this.post = data
    })
  },
  beforeDestroy() {
    this.$store.commit('featured/clearPost')
  },
}
</script>

<style lang="css">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
