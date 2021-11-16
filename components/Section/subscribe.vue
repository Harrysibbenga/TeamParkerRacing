<template>
  <mdb-container>
    <mdb-row class="no-gutters d-flex flex-center pb-3">
      <h3 class="h4 mx-auto pb-2">
        Newsletter Sign up:
      </h3>
      <mdb-col
        col="10"
      >
        <input id="defaultFormSubscriptionEmailEx" v-model="email" type="email" class="form-control">
      </mdb-col>
      <mdb-col
        col="2"
      >
        <mdb-btn color="secondary" size="md" class="">
          Submit
        </mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {mdbBtn, mdbCol,mdbRow, mdbContainer} from 'mdbvue'
export default {
  components: {
    mdbBtn, mdbCol,mdbRow, mdbContainer
  },
  data() {
    return {
      email: '',
    }
  }
}
</script>
