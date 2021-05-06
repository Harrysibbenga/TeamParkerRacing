<template>
  <div>
    <transition name="fade">
      <div v-if="showing" class="loading">
        <div class="position-relative d-flex flex-center">
          <breeding-rhombus-spinner
            :animation-duration="2000"
            :size="65"
            color="#ff1d5e"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { BreedingRhombusSpinner } from "epic-spinners";
export default {
  data() {
    return {
      showing: false,
    };
  },
  computed: {
    getLoading() {
      return this.$store.getters["global/getLoading"];
    },
  },
  methods: {
    showProgress(show) {
      this.showing = show;
    },
    start() {
      this.showProgress(true);
    },
    stop() {
      setTimeout(() => {
        this.showProgress(false);
      }, 250);
    },
  },
  watch: {
    getLoading: function(val) {
      if (val) {
        console.log("start fired");
        this.start();
      } else {
        console.log("stop fired");
        this.stop();
      }
    },
  },
  components: {
    BreedingRhombusSpinner,
  },
};
</script>

<style lang="scss">
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  background-color: white;
  opacity: 1;
}
</style>
