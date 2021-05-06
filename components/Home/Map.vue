<template>
  <div>
    <mdb-container fluid>
      <mdb-row style="height: 450px">
        <mdb-col col="12" class="rounded z-depth-1 p-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2501.4744645083747!2d-1.2597658287040683!3d52.6114431404541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775e9fdc7a6b35%3A0x27f3c1273977c725!2sTeam%20Parker%20Racing!5e0!3m2!1sen!2suk!4v1603969921240!5m2!1sen!2suk"
            width="100%"
            height="100%"
            frameborder="0"
            style="border: 0"
          ></iframe>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
  },
}
</script>
