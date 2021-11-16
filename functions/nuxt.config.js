/* eslint-disable nuxt/no-cjs-in-config */
module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Team Parker Racing | Official Website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Team Parker Racing is a British racing team that competes in many different motorsport chamiponships.',
      },
      {
        property: 'og:title',
        content: 'Team Parker Racing - Official website',
      },
      {
        property: 'og:description',
        content:
          'Team Parker Racing is a British racing team that competes in many different motorsport chamiponships.',
      },
      {
        property: 'og:url',
        content: 'https://teamparkerracing.com/',
      },
      {
        property: 'og:image',
        content:
          'https://firebasestorage.googleapis.com/v0/b/team-parker-racing.appspot.com/o/logo%2FTPR%20Logo.png?alt=media&token=b45d4815-0394-40dd-9a5e-41c8e8124546',
      },
      { property: 'og:site_name', content: 'Team Parker Racing' },
      { property: 'og:type', content: 'website' },
      { name: 'robots', content: 'index,follow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://apps.elfsight.com/p/platform.js', defer: true },
      {
        hid: 'mailchimp1',
        type: 'text/javascript',
        src: '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
      },
      {
        hid: 'mailchimp2',
        innerHTML: `
        (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      },
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-P0W1M0FBQ3',
        async: true,
      },
      {
        hid: 'gtag',
        type: 'text/javascript',
        charset: 'utf-8',
        innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-P0W1M0FBQ3')
        `,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap-css-only/css/bootstrap.min.css',
    'mdbvue/build/scss/mdb.lite.scss',
    'hooper/dist/hooper.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  router: {
    middleware: ['auth'],
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    transpile: ['mdbvue'],
  },
}
