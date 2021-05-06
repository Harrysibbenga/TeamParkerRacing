<template>
  <div>
    <mdb-container fluid>
      <mdb-row>
        <mdb-col col="12" class="p-0 text-center">
          <img :src="post.url" :alt="post.alt" class="img-fluid" />
        </mdb-col>
        <mdb-col
          col="12"
          lg="10"
          class="parallelogram text-center bg-primary text-white p-2"
        >
          <h1 class="title-content">
            {{ post.title }}
          </h1>
        </mdb-col>
      </mdb-row>
      <mdb-row class="pl-5 main-content">
        <mdb-col col="12 pt-2">
          <span class="date">{{ post.date }}</span>
          <h5 v-if="post.championship" class="championship pt-3">
            {{ post.championship }}
          </h5>
          <div class="py-5" v-html="post.content"></div>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <mdb-container fluid>
      <mdb-row class="m-0">
        <mdb-col col="12">
          <Hooper
            :items-to-show="3"
            :infinite-scroll="true"
            :wheel-control="false"
            style="height: auto"
          >
            <Slide
              v-for="(img, index) in post.galleryContent"
              :key="index"
              :index="index"
            >
              <img :src="img.url" :alt="img.alt" class="img-fluid" />
            </Slide>
            <Navigation slot="hooper-addons"></Navigation>
          </Hooper>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <mdb-container fluid>
      <mdb-row class="p-5">
        <mdb-col col="12">
          <div
            v-if="post.quoteContent != ''"
            class="quote bg-primary text-white p-2 mb-5 text-center"
          >
            <h2>Quotes</h2>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-container v-for="(quote, index) in post.quoteContent" :key="index">
      <mdb-row v-if="index % 2 == 0" class="py-2">
        <mdb-col lg="4" col="12" class="pr-lg-5">
          <img :src="quote.url" :alt="quote.alt" class="img-fluid p-5" />
          <div class="name bg-primary text-white p-2 mb-5 text-center">
            <h3>{{ quote.name }}</h3>
          </div>
        </mdb-col>
        <mdb-col lg="8" col="12" class="bg-secondary">
          <div class="p-5" v-html="quote.content"></div>
        </mdb-col>
      </mdb-row>

      <mdb-row v-else class="py-2">
        <mdb-col lg="8" col="12" class="bg-secondary order-lg-0 order-1">
          <div class="p-5" v-html="quote.content"></div>
        </mdb-col>
        <mdb-col lg="4" col="12" class="order-lg-1 order-0 pl-lg-5">
          <img :src="quote.url" :alt="quote.alt" class="img-fluid p-5" />
          <div class="name bg-primary text-white p-2 mb-5 text-center">
            <h3>{{ quote.name }}</h3>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'
import { Hooper, Slide, Navigation } from 'hooper'

export default {
  name: 'Post',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    Hooper,
    Slide,
    Navigation,
  },
  data() {
    return {
      slug: '',
      post: {},
    }
  },
  head() {
    return {
      title: this.post.title,
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
          hid: 'description',
          name: 'description',
          content: this.post.excerpt,
        },
      ],
    }
  },
  created() {
    const slug = this.$route.params.slug
    this.$store.dispatch('posts/setPostSlug', slug).then((data) => {
      this.post = data
    })
  },
  destroyed() {
    this.$store.commit('posts/clearPost')
  },
}
</script>
