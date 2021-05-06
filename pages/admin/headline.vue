<template>
  <div>
    <mdb-container class="text-center">
      <h1>Headline Section</h1>
      <h4>{{ active }}</h4>
      <h5>Select headline content to edit</h5>
      <div
        v-for="(type, index) in headline"
        :key="index"
        class="custom-control custom-radio custom-control-inline"
      >
        <input
          :id="type.id"
          ref="input"
          type="radio"
          name="radioInline"
          class="custom-control-input"
          :value="type.value"
          :checked="type.active"
          :data="type"
          @change="handleChange($event, type.id)"
        />
        <label class="custom-control-label" :for="type.id">{{
          type.name
        }}</label>
      </div>
    </mdb-container>

    <div>{{ headline }}</div>
    <div>{{ content }}</div>

    <mdb-container fluid>
      <mdb-row v-if="content.name == 'Image'">
        <mdb-col class="image p-0" col="8">
          <img
            :src="require('~/assets/images/PCCGB_KH_-D4B01559.png')"
            alt
            class="img-fluid"
          />
          <mdb-col
            v-if="content.upcoming"
            md="6"
            class="d-flex offset-6 upcoming-container p-0"
          >
            <HomeUpcoming></HomeUpcoming>
          </mdb-col>
        </mdb-col>
        <mdb-col>
          <mdb-btn @click="content.upcoming = !content.upcoming"
            >Toggle upcoming section</mdb-btn
          >
          <mdb-btn>Edit Image</mdb-btn>
        </mdb-col>
      </mdb-row>

      <mdb-row v-if="content.name == 'Video'">
        <mdb-col class="video p-0" col="8">
          <div class="embed-responsive embed-responsive-21by9">
            <iframe
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"
            ></iframe>
          </div>
          <mdb-col
            v-if="content.upcoming"
            md="6"
            class="d-flex offset-6 upcoming-container p-0"
          >
            <upcoming></upcoming>
          </mdb-col>
        </mdb-col>
        <mdb-col>
          <mdb-btn @click="content.upcoming = !content.upcoming"
            >Toggle upcoming section</mdb-btn
          >
          <mdb-btn>Edit Video</mdb-btn>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbBtn } from 'mdbvue'
export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
  },
  data() {
    return {
      content: {},
      active: '',
      headline: [
        {
          id: 1,
          name: 'Image',
          url: 'Images',
          upcoming: false,
          value: false,
          active: true,
        },
        {
          id: 2,
          name: 'Video',
          url: 'Videos',
          upcoming: false,
          value: false,
          active: false,
        },
      ],
    }
  },
  mounted() {
    const inputs = this.$refs.input
    inputs.forEach((input) => {
      if (input.checked === true) {
        const id = parseInt(input.attributes.id.value)
        this.content = this.headline.filter((type) => type.id === id)[0]
        this.active =
          'The ' +
          this.headline.filter((type) => type.id === id)[0].name +
          ' section is currently active.'
      }
    })
  },
  methods: {
    handleChange(e, id) {
      this.headline
        .filter((type) => type.id === id)
        // eslint-disable-next-line array-callback-return
        .map((type) => {
          type.value = true
          this.content = type
        })
      this.headline
        .filter((type) => type.id !== id)
        .map((type) => (type.value = false))
    },
  },
}
</script>
