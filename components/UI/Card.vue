<template>
  <mdb-card>
    <mdb-view hover>
      <a href="#!">
        <mdb-card-image
          :src="post.url"
          :alt="post.alt"
          class="img-fluid"
        ></mdb-card-image>
        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
      </a>
    </mdb-view>
    <mdb-card-body class="text-center">
      <mdb-card-title v-if="post.type == 'championship'" class="pt-2">{{
        post.name
      }}</mdb-card-title>
      <mdb-card-title v-else class="pt-2">{{ post.title }}</mdb-card-title>
      <mdb-card-text>{{ post.date }}</mdb-card-text>
      <mdb-card-text>{{ post.excerpt }}</mdb-card-text>
      <NuxtLink
        v-if="post.type == 'championship'"
        :to="{ name: 'championship-slug', params: { slug: post.slug } }"
        class="black-text d-flex justify-content-center py-2"
        ><h5>Read more <mdb-icon icon="angle-double-right" class="pl-2" /></h5
      ></NuxtLink>
      <NuxtLink
        v-if="post.type == 'post'"
        :to="{ name: 'post-slug', params: { slug: post.slug } }"
        class="black-text d-flex justify-content-center py-2"
        ><h5>Read more <mdb-icon icon="angle-double-right" class="pl-2" /></h5
      ></NuxtLink>
      <NuxtLink
        v-if="post.type == 'featured'"
        :to="{ name: 'feature-slug', params: { slug: post.slug } }"
        class="black-text d-flex justify-content-center py-2"
        ><h5>Read more <mdb-icon icon="angle-double-right" class="pl-2" /></h5
      ></NuxtLink>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbCard,
  mdbCardImage,
  mdbView,
  mdbMask,
  mdbIcon,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
} from 'mdbvue'
export default {
  components: {
    mdbCard,
    mdbCardImage,
    mdbView,
    mdbMask,
    mdbIcon,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
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
