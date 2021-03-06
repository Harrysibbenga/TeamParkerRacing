<template>
  <div>
    <div v-if="currentTime" class="timer bg-secondary text-white p-2">
      <div class="d-flex justify-content-around">
        <div class="align-self-center">
          <span>
            <mdb-icon icon="satellite-dish" />
          </span>
        </div>
        <div class="align-self-center text-center">
          <span>{{ deadline | formatDate }}&nbsp;</span>
          <p>
            Event live in:
            <span v-if="days">{{ days }} :</span>
            <span v-if="hours">{{ hours | formatTime }} :</span>
            <span>{{ minutes | formatTime }} :{{ seconds | formatTime }}</span>
          </p>
        </div>
      </div>
    </div>
    <div v-if="!currentTime && liveTime" class="timer bg-primary text-white p-2">
      <div class="d-flex justify-content-around">
        <div class="align-self-center">
          <span>
            <mdb-icon icon="satellite-dish" class="red-text" />
          </span>
        </div>
        <div class="align-self-center text-center">
          <span>{{ live | formatDate }}&nbsp;</span>
          <p>
            Live now for:
            <span v-if="daysLive">{{ daysLive }} :</span>
            <span v-if="hoursLive">{{ hoursLive | formatTime }} :</span>
            <span>{{ minutesLive | formatTime }} :{{ secondsLive | formatTime }}</span>
          </p>
        </div>
      </div>
    </div>
    <div v-if="!liveTime && !currentTime" class="timer bg-dark text-white p-2">
      <div class="d-flex justify-content-around">
        <div class="align-self-center">
          <span>
            <mdb-icon icon="satellite-dish" />
          </span>
        </div>
        <div class="align-self-center text-center">
          <div class="align-self-center text-center">
            <p>Stay tuned for the next event!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import {mdbIcon} from "mdbvue";

export default {
  filters: {
    formatTime(value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    },
    formatDate(val) {
      if (!val) {
        return "-";
      }
      const date = val;
      return moment(date).format("Do MMM YYYY");
    },
  },
  components: {
    mdbIcon
  },
  props: {
    deadline: {
      type: String,
      required: true,
    },
    live: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      currentTime: Date.parse(this.deadline) - Date.parse(new Date()),
      liveTime: Date.parse(this.live) - Date.parse(new Date()),
      day: "",
      month: "",
      year: "",
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  computed: {
    seconds() {
      return Math.floor((this.currentTime / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.currentTime / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.currentTime / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.currentTime / (1000 * 60 * 60 * 24));
    },
    secondsLive() {
      return Math.floor((this.liveTime / 1000) % 60);
    },
    minutesLive() {
      return Math.floor((this.liveTime / 1000 / 60) % 60);
    },
    hoursLive() {
      return Math.floor((this.liveTime / (1000 * 60 * 60)) % 24);
    },
    daysLive() {
      return Math.floor(this.liveTime / (1000 * 60 * 60 * 24));
    },
  },
  mounted() {
    setInterval(() => {
      this.countdown();
    }, 500);
    setInterval(() => {
      this.countdownLive();
    }, 500);
  },
  methods: {
    countdown() {
      this.currentTime = Date.parse(this.deadline) - Date.parse(new Date());
      if (this.currentTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    },
    countdownLive() {
      this.liveTime = Date.parse(this.live) - Date.parse(new Date());
      if (this.liveTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.liveTime = null;
      }
    }
  },
};
</script>

<style lang="css">
.timer {
  width: 100%;
}
@media (min-width: 768px) {
  .timer {
    width: 350px;
  }
}
</style>
