<template>
  <div class="container-fluid my-5">
    <div class="row">
      <div class="col-4 bg-primary text-center p-0">
        <div v-for="(item, index) in championships" :key="index" class="p-4 champ-logo" :class="{ active: index == selected}">
          <img
            :src="item.logoUrl"
            :alt="item.logoAlt"
            class="img-fluid"
            @click="show(item, index)"
          >
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div v-if="champ" class="col-8 p-0">
          <img :src="champ.url" :alt="champ.alt" class="img-fluid">

          <div id="timer" class="position-absolute d-flex flex-row align-items-center">
            <nuxt-link :to="`championship/${champ.slug}`" class="p-5 mr-auto">
              <img
                :src="champ.logoUrl"
                :alt="champ.logoAlt"
                class="img-fluid"
              >
            </nuxt-link>
            <ui-timer v-if="champ.fixture" :deadline="champ.fixture.dateFrom" :live="champ.fixture.dateTo" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      champ: "",
      loaded: false,
      selected: null,
      timer: ""
    };
  },
  computed: {
    championships() {
      return this.$store.getters["championships/getPosts"];
    },
  },
  created(){
    setTimeout(() => {
      this.champ = this.champValue(this.championships[0])
      this.selected = 0
    },800)
  },
  mounted(){
    this.iterate(true)
  },
  methods: {
    champValue(item) {
        const now = new Date(new Date().toDateString());
        const ongoing = [];
        item.fixtures.forEach(fixture => {
          if(moment(fixture.dateFrom).toDate() >= now) {
            ongoing.push(fixture)
          }
        })
        const champ = {
          slug: item.slug,
          url: item.url,
          alt: item.alt,
          logoUrl: item.logoUrl,
          fixture: ongoing[0]
        }
        return champ
    },
    reset(champ){
      this.champ = "";
      setTimeout(() => {
        this.champ = champ
      },150)
    },
    iterate(start){
      let i = 0;
      if(start) {
         this.timer = setInterval(() => {
          i += 1
          if(i === this.championships.length) {
            i = 0
          }
          this.selected = i
          this.reset(this.champValue(this.championships[i]))
        },5000)
      } else {
        clearInterval(this.timer)
      }
    },
    show(item, index){
      this.champ = this.champValue(item)
      this.selected = index
      this.iterate(false)
    },
  }
};
</script>

<style lang="css">
  #timer{
    bottom:0;
    right:0;
    width:100%;
  }
  .champ-logo:hover, .champ-logo.active{
    background-color: #4DB3E6;
  }
</style>
