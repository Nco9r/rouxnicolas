
require('dotenv').config()
module.exports = {
  mode: 'universal',
  target: 'server',
  buildDir: 'nuxt-dist',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Développeur Web freelance Bordeaux - Création de sites internet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Développeur web freelance à Bordeaux et créateur de sites internet, refonte, intégration, référencement et stratégie digitale'},
      { name: 'keywords', content: 'site Web, site Internet, Développeur web freelance bordeaux, Développeur web freelance bègles, création de sites internet, refonte de sites internet, intégration, développement web, html, css, javascript, Bordeaux, Bègles, référencement bordeaux, référencement bègles.'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Développeur Web freelance - Création de sites internet'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Développeur web freelance et créateur de sites internet, refonte, intégration, référencement et stratégie digitale'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~assets/img/png/og_image.jpg',
        href: '~assets/img/png/og_image.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '~assets/img/png/og_image.jpg',
        href: '~assets/img/png/og_image.jpg'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;700;800&family=Playfair+Display:wght@900&display=swap'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/Default/Loading.vue',
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],

  serverMiddleware: [
    { path: '/api/index', handler: '~/api/index' },
    { path: '/api/newsletter', handler: '~/api/newsletter' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
 plugins: [
  {
    mode: "client"
  }
],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    '@nuxt/http',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
