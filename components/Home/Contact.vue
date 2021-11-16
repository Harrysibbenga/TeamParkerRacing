<template>
  <section class="contact-section mt-5 pb-4 bg-secondary">
    <HomeMap />
    <mdb-container class="mt-5">
      <mdb-row id="contact-form" class="justify-content-center">
        <form class="col-md-8" @submit.prevent="submit">
          <mdb-col class="md-form" col="12">
            <mdb-input
              id="name"
              v-model="name"
              name="name"
              label="Your name"
              type="text"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            />
            <div v-if="!$v.name.required" class="text-white">
              This field is required
            </div>
          </mdb-col>
          <mdb-col class="md-form" col="12">
            <mdb-input
              id="email"
              v-model="email"
              name="email"
              label="Your email"
              type="text"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            />
            <div v-if="!$v.email.required" class="text-white">
              This field is required
            </div>
            <div v-if="!$v.email.email" class="text-white">
              Must be in valid email format
            </div>
          </mdb-col>
          <mdb-col class="md-form" col="12">
            <mdb-input
              id="subject"
              v-model="subject"
              name="subject"
              label="Subject"
              type="text"
              @input="$v.subject.$touch()"
              @blur="$v.subject.$touch()"
            />
            <div v-if="!$v.subject.required" class="text-white">
              This field is required
            </div>
          </mdb-col>
          <mdb-col class="md-form" col="12">
            <mdb-textarea
              id="message"
              v-model="message"
              name="message"
              label="Message"
              rows="5"
              @input="$v.message.$touch()"
              @blur="$v.message.$touch()"
            />
            <div v-if="!$v.message.required" class="text-white">
              This field is required
            </div>
          </mdb-col>
          <mdb-col class="text-center" col="12">
            <mdb-btn color="outline-white" icon="paper-plane">
              Submit
            </mdb-btn>
            <ui-message :msg="msg" />
          </mdb-col>
        </form>
        <mdb-col md="4" class="text-center text-white my-auto">
          <h3 class="my-4 pb-2">
            Contact information
          </h3>
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
              <a
                href="tel:01455 822 686"
              >01455 822 686</a>
            </li>
            <li>
              <mdb-icon
                icon="envelope"
                floating
                color="white"
                class="pr-2 text-primary"
              />
              <a
                href="mailto:info@teamparkerracing.com"
              >info@teamparkerracing.com</a>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </section>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import emailjs from 'emailjs-com'

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
  mixins: [validationMixin],

  validations: {
    name: { required },
    email: { required, email },
    subject: { required },
    message: { required },
  },

  data: () => ({
    name: '',
    subject: '',
    email: '',
    message: '',
    msg: {
      type: '',
      message: '',
    },
  }),

  methods: {
    submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.msg = {
          type: 'error',
          message: 'Message not sent. Please fill the form correctly!',
        }
      } else {
        this.msg = {
          type: 'info',
          message: 'Sending ...',
        }
        const templateParams = {
          name: this.name,
          subject: this.subject,
          message: this.message,
          email: this.email,
        }

        this.sendEmail(templateParams)
      }
    },
    sendEmail(params) {
      emailjs
        .send(
          'service_mqk22oq',
          'tpr_template_t5lcvra',
          params,
          'user_nzDfhN2MWfSPkCKqEp7Td'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
            console.log(params)
            this.msg = {
              type: 'success',
              message: 'Message sent someone will be in touch shortly',
            }
          },
          (error) => {
            console.log('FAILED...', error)
            this.msg = {
              type: 'error',
              message: error,
            }
          }
        )
        .then(() => {
          this.clear()
        })
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.subject = ''
      this.email = ''
      this.message = ''
      this.msg = {
        type: '',
        message: '',
      }
    },
  },
}
</script>
