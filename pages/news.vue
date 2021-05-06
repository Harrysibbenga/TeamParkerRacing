<template>
  <div>
    <mdb-container fluid class="bg-secondary py-5">
      <mdb-row class="py-5">
        <h2 class="p-3">Filters</h2>
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
          <UICard :post="post"></UICard>
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
          <UICard :post="post"></UICard>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue'
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
      tags: [
        {
          id: '08IsKXOBTGJVEZ1vNVvT',
          name: 'GT World Challenge Europe',
        },
        {
          id: '60lkQOTDAmEJKCJf5GRS',
          name: 'British GT Championship',
        },
        {
          id: 'DLNAdVjiLgowJThuNBQA',
          name: 'British Touring Car Championship',
        },
        {
          id: 'QEKnqhy3orGDLQ1cw5f6',
          name: 'Porsche Sprint Challenge GB',
        },
        {
          id: 'Wjs0KxlqFYchbGhKDYRy',
          name: 'Porsche Carrera Cup GB',
        },
        {
          id: 'M2cavN6tcJgZ03XSUr2Y',
          name: 'Caterham Series',
        },
      ],
    }
  },
  computed: {
    championships() {
      const championships = this.$store.getters['championships/getPosts']
      championships.forEach((post) => {
        post.type = 'championship'
      })
      return championships
    },
    posts() {
      const posts = this.$store.getters['posts/getPosts']
      posts.forEach((post) => {
        post.type = 'post'
      })
      return posts
    },
    featured() {
      const featured = this.$store.getters['featured/getPosts']
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
