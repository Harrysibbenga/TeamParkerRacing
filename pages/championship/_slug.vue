<template>
  <div>
    <mdb-container fluid>
      <mdb-row>
        <mdb-col class="p-0" col="12">
          <img :src="post.url" :alt="post.alt" class="img-fluid" />
        </mdb-col>
        <mdb-col id="logo" class="p-5" col="6">
          <img :src="post.logoUrl" :alt="post.logoAlt" class="img-fluid" />
        </mdb-col>
      </mdb-row>
      <mdb-row class="pl-5 main-content">
        <mdb-col col="12">
          <div class="py-5" v-html="post.content"></div>
        </mdb-col>
      </mdb-row>
      <mdb-row class="pb-4 flex-center">
        <mdb-col lg="6"
          ><img
            :src="post.timetableImg"
            :alt="post.timetableAlt"
            class="img-fluid"
        /></mdb-col>
        <mdb-col lg="6" class="text-center">
          <h4 class="pb-4">{{ post.timetable }}</h4>
          <div v-for="(fix, index) in post.fixtures" :key="index" class="py-2">
            <p>
              <span>{{ fix.dateFrom | formatDateFrom }}</span
              >-<span>{{ fix.dateTo | formatDateTo }}</span
              >: <span>{{ fix.track }}</span>
            </p>
          </div>
        </mdb-col>
      </mdb-row>
      <mdb-row v-if="post.galleryContent != ''" class="m-0">
        <hooper :items-to-show="3" :infinite-scroll="true" style="height: auto">
          <slide
            v-for="(img, index) in post.galleryContent"
            :key="index"
            :index="index"
          >
            <img :src="img.url" :alt="img.alt" class="img-fluid" />
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </mdb-row>
    </mdb-container>
    <mdb-container v-if="post.drivers != ''" fluid>
      <mdb-row class="p-5">
        <mdb-col col="12">
          <div class="quote bg-primary text-white p-2 mb-5 text-center">
            <h2>Meet Our Drivers</h2>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <mdb-container class="py-5">
      <div class="d-flex d-flex justify-content-between">
        <div
          v-for="(driver, index) in post.drivers"
          :key="index"
          class="hover w-100 mx-1"
        >
          <div class="name bg-primary text-white p-2 text-center">
            <h3 @click="show(driver)">{{ driver.name }}</h3>
          </div>
        </div>
      </div>
    </mdb-container>
    <transition name="zoom" mode="out-in">
      <mdb-container v-if="activeDriver">
        <mdb-row class="flex-center" style="height: auto">
          <mdb-col lg="4" col="12">
            <img
              :src="activeDriver.url"
              :alt="activeDriver.alt"
              class="img-fluid p-5"
            />
            <div class="name bg-primary text-white p-2 mb-5 text-center">
              <h3>{{ activeDriver.name }}</h3>
            </div>
          </mdb-col>
          <mdb-col lg="8" col="12">
            <p>Nationality: {{ activeDriver.nationality }}</p>
            <hr />
            <p v-if="activeDriver.partners">
              Partners: {{ activeDriver.partners }}
            </p>
            <hr v-if="activeDriver.partners" />
            <p>Social: {{ activeDriver.social }}</p>
            <hr />
            <p>Series: {{ activeDriver.series }}</p>
            <hr />
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </transition>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

import moment from 'moment'

export default {
  name: 'Headline',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    Hooper,
    Slide,
    HooperNavigation,
  },
  filters: {
    formatDateFrom(val) {
      if (!val) {
        return '-'
      }
      const date = val
      return moment(date).format('Do')
    },
    formatDateTo(val) {
      if (!val) {
        return '-'
      }
      const date = val
      return moment(date).format('Do MMM YYYY')
    },
  },
  data() {
    return {
      slug: '',
      post: {},
      activeDriver: '',
    }
  },
  head() {
    return {
      title: this.post.name,
      titleTemplate: null,
      meta: [
        {
          property: 'og:title',
          content: this.post.name,
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
        { property: 'og:type', content: 'website' },
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
    this.$store.dispatch('championships/setPostSlug', slug).then((data) => {
      this.post = data
    })
  },
  destroyed() {
    this.$store.commit('championships/clearPost')
  },
  methods: {
    show(driver) {
      this.activeDriver = ''
      setTimeout(() => {
        this.activeDriver = driver
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped>
#logo {
  bottom: 30%;
  left: 0;
}
.quote {
  transform: skew(40deg);
  width: 100%;
}
.hover {
  animation: hovering 6s ease-in-out infinite;
}
@media (min-width: 992px) {
  #logo {
    position: absolute;
  }
}

@media (min-width: 1200px) {
  #logo {
    bottom: 15%;
    left: 0;
  }
}
</style>
