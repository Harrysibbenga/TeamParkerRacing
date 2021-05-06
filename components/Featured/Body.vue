<template>
  <mdb-container fluid>
    <mdb-row class="pl-5">
      <mdb-col col="12">
        <div class="pb-5" v-html="post.content"></div>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'

export default {
  name: 'Body',
  components: {
    mdbRow,
    mdbCol,
    mdbContainer,
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
