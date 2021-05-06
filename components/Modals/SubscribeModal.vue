<template>
  <div>
    <mdb-modal
      remove-backdrop
      side
      position="right"
      direction="right"
      :show="modal"
      @close="close()"
    >
      <mdb-modal-header
        class="bg-secondary text-white"
        :class="{ 'd-none': subscribed }"
      >
        <mdb-modal-title>Subscribe for the latest</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-header
        class="bg-white text-dark"
        :class="{ 'd-none': !subscribed }"
      >
        <mdb-modal-title
          >Subscribed <mdb-icon icon="check" class="green-text" />
        </mdb-modal-title>
      </mdb-modal-header>
      <form
        id="mc-embedded-subscribe-form"
        action="https://torquetogether.us16.list-manage.com/subscribe/post?u=1e04e4b66dd0582c8dfc304e8&amp;id=233f674670"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        :class="{ 'd-none': subscribed }"
        novalidate
      >
        <mdb-modal-body>
          <div class="grey-text">
            <mdb-input
              id="mce-FNAME"
              v-model="firstName"
              label="First name"
              icon="user"
              type="text"
              name="FNAME"
            />
            <mdb-input
              id="mce-LNAME"
              v-model="lastName"
              label="Last name"
              icon="user"
              type="text"
              name="LNAME"
            />
            <mdb-input
              id="mce-EMAIL"
              v-model="email"
              label="Email"
              icon="envelope"
              type="email"
              name="EMAIL"
            />
          </div>
        </mdb-modal-body>
        <mdb-modal-footer class="bg-secondary">
          <mdb-btn
            id="mc-embedded-subscribe"
            far
            icon="paper-plane"
            outline="white"
            type="submit"
            :disabled="firstName == '' || lastName == '' || email == ''"
            @click="subscribe()"
          >
            Subscribe</mdb-btn
          >
        </mdb-modal-footer>
      </form>
    </mdb-modal>
  </div>
</template>

<script>
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn,
  mdbIcon,
  mdbInput,
} from 'mdbvue'
export default {
  components: {
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbBtn,
    mdbIcon,
    mdbInput,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      subscribed: false,
    }
  },
  computed: {
    modal() {
      return this.$store.getters['global/getModal']
    },
  },
  methods: {
    close() {
      this.$store.dispatch('global/setModal', false)
    },
    subscribe() {
      this.subscribed = true
    },
  },
}
</script>
