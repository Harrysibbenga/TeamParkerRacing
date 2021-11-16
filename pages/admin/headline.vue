<template>
  <div>
    <mdb-container class="text-center">
      <h1>Headline Section</h1>
      <h5>Select headline content to edit and activate</h5>
      <div
        v-for="(item, index) in headline"
        :key="index"
        class="custom-control custom-radio custom-control-inline"
      >
        <input
          :id="item.id"
          ref="input"
          type="radio"
          name="radioInline"
          class="custom-control-input"
          :value="item.value"
          :data="item"
          @change="handleChange($event, item.id)"
        >
        <label class="custom-control-label" :for="item.id">{{
          item.name
        }}</label>
      </div>
    </mdb-container>

    <mdb-container fluid>
      <mdb-row v-if="content.name === 'Carousel'">
        <headline-carousel :content.sync="carousel" />
      </mdb-row>

      <mdb-row v-if="content.name === 'Video'">
        <headline-video :content.sync="video" />
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import { mdbContainer, mdbRow } from 'mdbvue'
import { headlineCollection } from '@/services/firebase'

export default {
  components: {
    mdbContainer,
    mdbRow
  },
  data() {
    return {
      content: {},
      active: '',
      headline: [],
      carousel: {},
      video: {}
    }
  },
  computed: {
    head() {
      return cloneDeep(this.$store.getters['headline/getHeadlines'])
    },
  },
  created() {
    this.carousel = this.head.filter(item => item.name === 'Carousel')[0]
    this.video = this.head.filter(item => item.name === 'Video')[0]

    this.headline = [this.carousel, this.video]
  },
  methods: {
    handleChange(e, id) {
      this.headline
        .filter((item) => item.id === id)
        // eslint-disable-next-line array-callback-return
        .map((item) => {
          headlineCollection
            .doc(item.id)
            .update({
              value: true,
              active: true
            })
          this.content = item
        })
      this.headline
        .filter((item) => item.id !== id)
        // eslint-disable-next-line array-callback-return
        .map((item) => {
          headlineCollection
            .doc(item.id)
            .update({
              value: false,
              active: false
            })
        })
    }
  }
}
</script>
