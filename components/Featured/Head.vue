<template>
  <mdb-view class="p-0" col="12 text-center">
    <img :src="post.url" :alt="post.alt" class="img-fluid" />

    <mdb-mask flex-center class="text-center text-white p-2 flex-column">
      <h1>{{ post.title }}</h1>
      <div class="slide bg-primary my-3 p-2 mx-auto ml-lg-auto mr-lg-5">
        <div class="title-content d-inline-block">
          <h3>
            Feature: <span class="type">{{ post.type }}</span>
          </h3>
        </div>
      </div>
    </mdb-mask>
  </mdb-view>
</template>

<script>
import { mdbMask, mdbView } from 'mdbvue'

export default {
  name: 'Head',
  components: {
    mdbMask,
    mdbView,
  },
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.type {
  font-size: 1.4rem;
}
.feature-content {
  h1 {
    color: #144982;
  }
}
.slide {
  width: 350px;
}

@media (min-width: 992px) {
  .feature-content {
    transform: translateY(-150%);
    h1 {
      color: white;
    }
  }
  .spacing {
    margin-bottom: -12rem;
  }
  .slide {
    transform: skew(40deg);
    width: 300px;
    .title-content {
      transform: skew(-40deg);
    }
  }
}
@media (min-width: 1200px) {
  .feature-content {
    transform: translateY(-220%) translateX(10%);
  }
  .spacing {
    margin-bottom: -8rem;
  }
}
</style>
