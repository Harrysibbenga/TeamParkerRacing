<template>
  <mdb-alert
    :color="msg.type"
    class="pl-5 mt-2 text-white text-center"
  >
    {{ msg.message }}
  </mdb-alert>
</template>

<script>
import {mdbAlert} from 'mdbvue'
export default {
  components: {
    mdbAlert
  },
  props: {
    msg: {
      type: Object,
      default: () => {}
    }
  },
};
</script>
