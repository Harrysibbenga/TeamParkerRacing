<template>
  <main id="admin">
    <mdb-container id="admin-nav">
      <mdb-tab pills justify color="secondary" class="mt-4 mx-4">
        <mdb-tab-item>
          <NuxtLink to="/">
            <mdb-icon icon="home" class="mr-1" />Home
          </NuxtLink>
        </mdb-tab-item>
        <mdb-tab-item>
          <div @click="logout()">
            <mdb-icon icon="ban" class="mr-1" />
            Logout
          </div>
        </mdb-tab-item>
      </mdb-tab>

      <h1>Welcome to Team Parker's Dashboard</h1>

      <mdb-tab pills justify color="primary" class="mt-4 mx-4">
        <mdb-tab-item>
          <NuxtLink to="/admin/headline"> Headline </NuxtLink>
        </mdb-tab-item>
        <mdb-tab-item>
          <NuxtLink to="/admin/posts"> Posts </NuxtLink>
        </mdb-tab-item>
        <mdb-tab-item>
          <NuxtLink to="/admin/drivers"> Drivers </NuxtLink>
        </mdb-tab-item>
        <mdb-tab-item>
          <NuxtLink to="/admin/championships"> Championships </NuxtLink>
        </mdb-tab-item>
      </mdb-tab>
    </mdb-container>

    <NuxtChild class="pt-3"> </NuxtChild>
  </main>
</template>

<script>
import { mdbContainer, mdbTab, mdbTabItem, mdbIcon } from 'mdbvue'
import { auth } from '@/services/firebase'
import Cookie from 'js-cookie'

export default {
  name: 'Admin',
  components: {
    mdbContainer,
    mdbTab,
    mdbTabItem,
    mdbIcon,
  },
  layout: 'admin',
  methods: {
    async logout() {
      await auth.signOut()
      await Cookie.remove('access_token')

      location.href = '/'
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  color: black;
}
</style>
