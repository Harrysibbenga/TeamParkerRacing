<template>
  <div class="contact-section mt-4 pb-4 bg-secondary">
    <HomeMap></HomeMap>
    <mdb-container>
      <form>
        <mdb-row id="contact-form" class="justify-content-center">
          <mdb-col md="8">
            <mdb-col class="md-form" col="12">
              <mdb-input id="form-name" label="Your name" type="text" />
            </mdb-col>
            <mdb-col class="md-form" col="12">
              <mdb-input id="form-email" label="Your email" type="text" />
            </mdb-col>
            <mdb-col class="md-form" col="12">
              <mdb-input id="form-subject" label="Subject" type="text" />
            </mdb-col>
            <mdb-col class="md-form" col="12">
              <mdb-textarea id="form-text" label="Message" rows="5" />
            </mdb-col>
            <mdb-col class="text-center" col="12">
              <mdb-btn color="outline-white" icon="paper-plane">Submit</mdb-btn>
            </mdb-col>
          </mdb-col>
          <mdb-col md="4" class="text-center text-white my-auto">
            <h3 class="my-4 pb-2">Contact information</h3>
            <ul class="list-unstyled ml-4">
              <li>
                <mdb-icon
                  icon="map-marker"
                  floating
                  color="white"
                  class="pr-2 text-primary"
                />
                <p>
                  Mansfield Villa Farm, Hinckley Road, Leicestershire, LE9 9RE
                </p>
              </li>
              <li>
                <mdb-icon
                  icon="phone"
                  floating
                  color="white"
                  class="pr-2 text-primary"
                />
                <p>01455 822 686</p>
              </li>
              <li>
                <mdb-icon
                  icon="envelope"
                  floating
                  color="white"
                  class="pr-2 text-primary"
                />
                <p>info@teamparkerracing.com</p>
              </li>
            </ul>
          </mdb-col>
        </mdb-row>
      </form>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbBtn,
  mdbInput,
  mdbTextarea,
  mdbCol,
  mdbIcon,
} from 'mdbvue'
export default {
  name: 'ContactSection',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbInput,
    mdbTextarea,
    mdbIcon,
  },
}
</script>
