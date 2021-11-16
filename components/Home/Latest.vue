<template>
  <mdb-container fluid class="bg-primary">
    <mdb-row class="pt-5 d-flex flex-center">
      <mdb-col
        v-for="(post, index) in posts"
        :key="index"
        class="py-5"
        col="12"
        md="6"
        xl="4"
      >
        <ui-card :post="post" />
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
