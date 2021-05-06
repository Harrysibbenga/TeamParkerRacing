<template>
  <mdb-container fluid class="bg-primary">
    <mdb-row class="pt-5">
      <mdb-col
        v-for="(post, index) in posts"
        :key="index"
        class="mt-5 py-5"
        md="4"
      >
        <UICard :post="post"> </UICard>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'Latest',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts'].slice(0, 3)
    },
  },
}
</script>

<style lang="scss" scopped>
.container-xl {
  max-width: 1440px;
}
.rgba-primary-strong {
  background-color: rgba(20, 73, 130, 0.9);
}
@media screen and (max-width: 991px) {
  .view .mask {
    position: relative;
  }
  .date,
  .title,
  .championship {
    font-size: 1.3rem;
  }
  .overlay .mask {
    opacity: 1;
  }
  .zoom:hover img,
  .zoom:hover video {
    transform: none;
  }
  .featured-img {
    max-width: 100%;
    height: auto;
  }
}
@media (min-width: 992px) {
  .featured-img {
    height: 726px;
  }
}
</style>
