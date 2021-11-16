<template>
  <footer class="bottom text-secondary bg-primary">
    <mdb-container fluid class="pt-5">
      <mdb-row class="d-flex flex-center">
        <mdb-col md="4" class="text-white">
          <h5 class="font-weight-bold">
            Team Parker Racing
          </h5>
          <p class="pt-4">
            Team Parker Racing is a motorsport team based in Leicestershire, in
            the United Kingdom. Founded in 1997 it has previously competed in
            Formula Vauxhall Junior, British Formula 3, and, more recently, in
            the British Touring Car Championship, where it is a race-winner,
            alongside long-term relationships with the Porsche Carrera Cup GB
            and Caterham.
          </p>
          <p class="pt-4">
            For 2021 the team will race in the British GT Championship, Porsche
            Carrera Cup GB, Porsche Sprint Challenge GB, select Caterham events,
            and other exciting plans yet to be announced.
          </p>
        </mdb-col>
        <mdb-col md="4" class="text-white">
          <Logo class="mx-auto my-5" />
          <section-subscribe class="pt-16" />
          <!-- <mdb-row
            style="width: 400px"
            class="mx-auto d-flex align-content-center justify-content-center"
          >
            <a class="text-decoration-none white--text">Careers</a>
            <div color="white" class="px-5"> | </div>
            <a class="text-decoration-none white--text">Privacy Policy</a>
          </mdb-row> -->
        </mdb-col>
        <mdb-col md="4" class="text-center">
          <a
            href="tel:01455 822 686"
            class="h1 text-decoration-none text-white"
          >01455 822 686</a>
          <h5 class="font-weight-bold text-white pt-5">
            Follow us
          </h5>
          <mdb-row>
            <mdb-col col="6">
              <div class="text-right text-white">
                <div class="mt-2">
                  <a
                    href="https://www.instagram.com/teamparkerracing/"
                    target="_blank"
                  >
                    <p class="my-auto">Instagram</p>
                  </a>
                </div>
                <div class="mt-2">
                  <a
                    href="https://www.linkedin.com/company/team-parker-racing-ltd/"
                    target="_blank"
                  >
                    <p class="my-auto">LinkedIn</p>
                  </a>
                </div>
                <div class="mt-2">
                  <a
                    href="https://www.facebook.com/TeamParkerRacing/"
                    target="_blank"
                  >
                    <p class="my-auto">Facebook</p>
                  </a>
                </div>
                <div class="mt-2">
                  <a
                    href="https://twitter.com/teamparkeracing"
                    target="_blank"
                  >
                    <p class="my-auto">Twitter</p>
                  </a>
                </div>
              </div>
            </mdb-col>
            <mdb-col col="6">
              <div class="text-left">
                <div class="my-2">
                  <a
                    class="fa-lg w-ic"
                    href="https://www.instagram.com/teamparkerracing/"
                    target="_blank"
                  >
                    <mdb-icon fab icon="instagram" class="text-white" />
                  </a>
                </div>
                <div class="my-2">
                  <a
                    class="fa-lg w-ic"
                    href="https://www.linkedin.com/company/team-parker-racing-ltd/"
                    target="_blank"
                  >
                    <mdb-icon fab icon="linkedin" class="text-white" />
                  </a>
                </div>
                <div class="my-2">
                  <a
                    class="fa-lg w-ic"
                    href="https://www.facebook.com/TeamParkerRacing/"
                    target="_blank"
                  >
                    <mdb-icon fab icon="facebook" class="text-white" />
                  </a>
                </div>
                <div class="my-2">
                  <a
                    class="fa-lg w-ic"
                    href="https://twitter.com/teamparkeracing"
                    target="_blank"
                  >
                    <mdb-icon fab icon="twitter" class="text-white" />
                  </a>
                </div>
              </div>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
      <mdb-row>
        <span
          class="mx-auto pa-4 mt-5 text-white"
        >&copy; Torque Motorsport Limited {{ new Date().getFullYear() }}</span>
      </mdb-row>
    </mdb-container>
  </footer>
</template>

<script>
import { mdbIcon, mdbCol, mdbRow, mdbContainer } from 'mdbvue'
export default {
  components: {
    mdbIcon,
    mdbCol,
    mdbRow,
    mdbContainer,
  },
}
</script>

<style lang="scss">
.footer {
  height: 300px;
}
</style>
