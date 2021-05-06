<template>
  <div class="dashboard">
    <mdb-container>
      <mdb-tab pills justify color="primary" class="mt-4 mx-4">
        <mdb-tab-item>
          <NuxtLink to="/featured"> Featured </NuxtLink>
        </mdb-tab-item>
        <mdb-tab-item>
          <NuxtLink to="/news"> News </NuxtLink>
        </mdb-tab-item>
      </mdb-tab>
    </mdb-container>

    <router-view class="pt-3"> </router-view>
  </div>
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

<style scoped>
a {
  color: black;
}
a:hover {
  color: #4db3e6;
}
</style>
