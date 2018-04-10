const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: './'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hst2125-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'image/x-icon', href: '//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' }
    ]
  },
  plugins: ['~plugins/buefy'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  routerBase,
  build: {
    /*
    ** Run ESLint on save
    */
    //publicPath: 'HST2125-nuxt/',
    /*extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }*/
    extend (config, { isDev, isClient }) {
      if (!isDev) {
        // relative links, please.
        config.output.publicPath = './_nuxt/'
      }
      return config;
    }
  },
  //mode: 'spa',
  router: {
    //base: './',
    linkActiveClass: 'is-active'//,
    //base: process.env.DEPLOY_ENV === 'STATIC' ? '/nuxt-example/' : '/'
    //base: process.env.NODE_ENV === 'dev' ? '' : '/HST2125-Nuxt/'
  },
}
