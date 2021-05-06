<template>
  <div class="p-5 text-center bg-secondary">
    <h4 class="text-white title">To keep up to date with our latest news</h4>
    <mdb-btn outline="white" @click.native="open()"> Click here</mdb-btn>
  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue'
export default {
  name: 'Basic',
  components: {
    mdbBtn,
  },
  methods: {
    open() {
      this.$store.dispatch('global/setModal', true)
    },
  },
}
</script>
