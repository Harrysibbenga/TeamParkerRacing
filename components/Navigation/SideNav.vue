<template>
  <div>
    <div id="mySidenav" class="sidenav d-flex flex-center flex-column">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/news">News</NuxtLink>
      <NuxtLink v-if="currentUser" to="/admin" @click.native="reset()">
        Admin</NuxtLink
      >
    </div>
    <nav id="main-nav" class="shrink">
      <div class="d-flex justify-content-between p-3">
        <NavigationBurger
          :toggle="isPanelOpen"
          @click.native="toggle()"
        ></NavigationBurger>
        <NuxtLink to="/" class="logo-back">
          <img
            :src="require('~/assets/TPR Logo.png')"
            class="logo"
            alt="Team Parker Racing Logo"
          />
        </NuxtLink>
      </div>
    </nav>
    <div id="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  computed: {
    isPanelOpen() {
      return this.$store.getters['menu/isNavOpen']
    },
    currentUser() {
      return this.$store.getters['users/user']
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    window.addEventListener('scroll', this.scroll)
    this.scroll()
  },
  methods: {
    toggle() {
      console.log(this.isPanelOpen)
      if (!this.isPanelOpen) {
        this.openNav()
        this.$store.dispatch('menu/toggleNav')
      } else {
        this.closeNav()
        this.$store.dispatch('menu/toggleNav')
      }
    },
    reset() {
      this.$store.dispatch('menu/reset')
    },
    openNav() {
      if (this.window.width <= 768) {
        document.getElementById('mySidenav').style.width = '100%'
        document.getElementById('main').style.marginLeft = '100%'
      } else {
        document.getElementById('mySidenav').style.width = '250px'
        document.getElementById('main').style.marginLeft = '250px'
      }
    },
    closeNav() {
      document.getElementById('mySidenav').style.width = '0'
      document.getElementById('main').style.marginLeft = '0'
    },
    handleResize() {
      this.window.height = window.innerHeight
      this.window.width = window.innerWidth
      console.log(this.window.width)
      console.log(this.window.height)
    },
    scroll() {
      const navbar = document.getElementById('main-nav')
      const navClasses = navbar.classList
      if (document.documentElement.scrollTop >= 100) {
        if (navClasses.contains('shrink') === false) {
          navClasses.toggle('shrink')
        }
      } else if (navClasses.contains('shrink') === true) {
        navClasses.toggle('shrink')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  height: 80px;
  width: auto;
  transition: height 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
#main-nav {
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

#main-nav.shrink {
  .logo {
    height: 60px;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #144982;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;

  a {
    padding: 10px 0;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }

  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
}

#main {
  transition: margin-left 0.5s;
}

.logo-back {
  background-color: transparent;
  height: auto;
  padding: 5px 20px;
}
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
