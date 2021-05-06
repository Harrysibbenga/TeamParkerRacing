<template>
  <footer class="bottom text-secondary bg-primary">
    <mdb-container class="pt-5">
      <mdb-row>
        <mdb-col md="8" class="text-white">
          <h5 class="font-weight-bold">Team Parker Racing</h5>
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
        <mdb-col md="4" class="text-center">
          <h5 class="font-weight-bold text-white">Follow us</h5>
          <ul class="list-unstyled">
            <li class="list-item py-2">
              <a
                class="p-2 fa-lg w-ic"
                href="https://twitter.com/teamparkeracing"
                target="_blank"
              >
                <mdb-icon fab icon="twitter" class="text-secondary" />
              </a>
            </li>
            <li class="list-item pb-2">
              <a
                class="p-2 fa-lg w-ic"
                href="https://www.linkedin.com/company/team-parker-racing-ltd/"
                target="_blank"
              >
                <mdb-icon fab icon="linkedin" class="text-secondary" />
              </a>
            </li>
            <li class="list-item pb-2">
              <a
                class="p-2 fa-lg w-ic"
                href="https://www.instagram.com/teamparkerracing/"
                target="_blank"
              >
                <mdb-icon fab icon="instagram" class="text-secondary" />
              </a>
            </li>
            <li class="list-item pb-2">
              <a
                class="p-2 fa-lg w-ic"
                href="https://www.facebook.com/TeamParkerRacing/"
                target="_blank"
              >
                <mdb-icon fab icon="facebook" class="text-secondary" />
              </a>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
      <mdb-row class="align-items-center">
        <mdb-col col="12" md="6" class="text-center pt-2">
          &copy; 2020 Copyright:
          <a href="http://www.torquetogether.com/" target="_blank"
            >Torque Motorsport Ltd</a
          >
        </mdb-col>
        <mdb-col class="text-center pt-2" col="12" md="6">
          <p>Powered by</p>
          <img
            :src="require('../assets/Torquelogo.png')"
            alt="Torque motorsport logo"
          />
        </mdb-col>
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
