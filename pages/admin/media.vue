<template>
  <div>
    <div class="container">
      <b-nav tabs class="pt-3">
        <b-nav-item to="/admin/media/">
          Images
        </b-nav-item>
        <b-nav-item to="/admin/media/videos">
          Videos
        </b-nav-item>
      </b-nav>
    </div>
    <nuxt-child class="pt-3" />
  </div>
</template>
