<template>
  <section id="posts">
    <mdb-container id="posts-nav">
      <mdb-tab pills justify color="secondary">
        <mdb-tab-item>
          <NuxtLink to="/admin/posts/news"> News </NuxtLink>
        </mdb-tab-item>
        <mdb-tab-item>
          <NuxtLink to="/admin/posts/featured"> Featured </NuxtLink>
        </mdb-tab-item>
      </mdb-tab>
    </mdb-container>

    <NuxtChild class="pt-3"></NuxtChild>
  </section>
</template>

<script>
import { mdbContainer, mdbTab, mdbTabItem } from 'mdbvue'

export default {
  name: 'PostsNav',
  components: {
    mdbContainer,
    mdbTab,
    mdbTabItem,
  },
}
</script>

<style lang="scss" scoped>
a {
  color: black;
}
</style>
