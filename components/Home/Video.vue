<template>
  <div>
    <video
      width="100%"
      height="100%"
      muted
      loop
      controls
    >
      <source :src="video.url" type="video/mp4">
      Media not supported
    </video>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
