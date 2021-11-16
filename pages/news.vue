<template>
  <div>
    <mdb-container fluid class="bg-secondary py-5">
      <mdb-row class="py-5">
        <h2 class="p-3">
          Filters
        </h2>
        <mdb-col col="12">
          <mdb-btn outline="white" size="sm" @click.native="filtered = null">
            All
          </mdb-btn>
          <mdb-btn
            v-for="(tag, index) in tags"
            :key="index"
            outline="white"
            size="sm"
            @click.native="filter(tag.id)"
          >
            {{ tag.name }}
          </mdb-btn>
        </mdb-col>
      </mdb-row>

      <mdb-row v-if="filtered">
        <mdb-col
          v-for="(post, index) in filtered"
          :key="index"
          md="6"
          lg="4"
          class="p-3"
        >
          <ui-card :post="post" />
        </mdb-col>
      </mdb-row>

      <mdb-row v-else>
        <mdb-col
          v-for="(post, index) in allPosts"
          :key="index"
          md="6"
          lg="4"
          class="p-3"
        >
          <ui-card :post="post" />
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue'
import { cloneDeep } from 'lodash'

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
  },
  data() {
    return {
      filtered: null,
    }
  },
  computed: {
    championships() {
      const championships = cloneDeep(this.$store.getters['championships/getPosts'])
      championships.forEach((post) => {
        post.type = 'championship'
      })
      return championships
    },
    posts() {
      const posts = cloneDeep(this.$store.getters['posts/getPublishedPosts'])
      posts.forEach((post) => {
        post.type = 'post'
      })
      return posts
    },
    tags() {
      const tags = this.$store.getters['tags/getTags']
      return tags.filter(tag => tag.active === true)
    },
    featured() {
      const featured = cloneDeep(this.$store.getters['featured/getPosts'])
      featured.forEach((post) => {
        post.type = 'featured'
      })
      return featured
    },
    allPosts() {
      const all = this.posts.concat(this.featured).concat(this.championships)
      all.sort(function (a, b) {
        const keyA = new Date(a.date)
        const keyB = new Date(b.date)
        // Compare the 2 dates
        if (keyA > keyB) return -1
        if (keyA < keyB) return 1
        return 0
      })
      return all
    },
  },
  methods: {
    filter(id) {
      const filtered = []
      this.allPosts.forEach((post) => {
        if (post.tags.length !== 0) {
          if (post.tags.some((e) => e.id === id)) {
            filtered.push(post)
          }
        }
      })
      this.filtered = filtered
    },
  },
}
</script>
