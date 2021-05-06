<template>
  <div class="container-fluid pt-5">
    <div class="mb-5">
      <NuxtLink to="/"
        ><b-icon icon="arrow-left"></b-icon>&nbsp; Home
      </NuxtLink>
      <hr />
    </div>

    <form v-if="!showForgotPassword" @submit.prevent>
      <p class="h4 text-center mb-4">Sign in</p>
      <div class="grey-text">
        <mdb-input
          v-model.trim="formdata.email"
          label="Your email"
          icon="envelope"
          type="email"
          required
        />
        <mdb-input
          v-model.trim="formdata.password"
          label="Your password"
          icon="lock"
          type="password"
          required
        />
      </div>
      <div class="text-center">
        <mdb-btn color="secondary" @click="login">Login</mdb-btn>
        <a class="text-dark pl-4" @click="togglePasswordReset"
          >Forgot Password</a
        >
      </div>
    </form>

    <form v-if="showForgotPassword" @submit.prevent>
      <div v-if="!passwordResetSuccess">
        <p class="h4 text-center">Reset Password</p>
        <p class="text-center">
          We will send you an email to reset your password
        </p>

        <mdb-input
          v-model.trim="passwordForm.email"
          label="Your email"
          icon="envelope"
          type="email"
          required
        />

        <div class="text-center">
          <mdb-btn color="secondary" @click="resetPassword">Submit</mdb-btn>
          <a class="text-dark pl-4" @click="toggleForm">Back to Log In</a>
        </div>
      </div>
      <div v-else>
        <div class="text-center">
          <h1>Email Sent</h1>
          <p>check your email for a link to reset your password</p>
          <a class="text-dark" @click="toggleForm">Back to Log In</a>
        </div>
      </div>
    </form>

    <transition name="fade">
      <div
        v-if="isError"
        :class="`bg-danger`"
        class="pl-5 mt-2 text-white text-center"
      >
        <p>{{ msg }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import { mdbInput, mdbBtn } from 'mdbvue'

export default {
  components: {
    mdbInput,
    mdbBtn,
  },
  data() {
    return {
      formdata: {
        email: 'harry@torquetogether.com',
        password: 'testing123',
      },
      passwordForm: {
        email: '',
      },
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      msg: '',
      isError: false,
    }
  },
  validations: {
    formdata: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
    },
  },
  methods: {
    toggleForm() {
      this.errorMsg = ''
      this.showLoginForm = !this.showLoginForm
      if (this.showForgotPassword) {
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      }
    },
    togglePasswordReset() {
      if (this.showForgotPassword) {
        this.showLoginForm = true
        this.showForgotPassword = false
        this.passwordResetSuccess = false
      } else {
        this.showLoginForm = false
        this.showForgotPassword = true
      }
    },
    login() {
      this.$store
        .dispatch('users/login', this.formdata)
        .then(() => {
          this.$router.push('/admin')
          this.formdata = {
            email: '',
            password: '',
          }
        })
        .catch((error) => {
          this.isError = true
          this.msg = error.message

          setTimeout(() => {
            this.isError = false
          }, 5000)
        })
    },
    resetPassword() {
      this.performingRequest = true
      this.$store
        .dispatch('users/restPass', this.passwordForm.email)
        .then(() => {
          this.performingRequest = false
          this.passwordResetSuccess = true
          this.passwordForm.email = ''
        })
        .catch((error) => {
          this.isError = true
          this.msg = error.message

          setTimeout(() => {
            this.isError = false
          }, 5000)
        })
    },
  },
}
</script>
