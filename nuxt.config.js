module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
      require('autoprefixer')({
        browsers: ['last 3 versions']
      })
    ],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      const proxy = {
        proxy: {
          '/api': 'http://127.0.0.1:5000'
        }
      }
      config.devServer = Object.create({}, config.devServer, proxy)
      config.resolve.alias['nuxt-class-component'] = '~plugins/nuxt-class-component'
    },
    babel: {
      plugins: ['transform-decorators-legacy', 'transform-class-properties']
    },
    vendor: ['axios', 'd3']
  },
  router: {
    middleware: ['auth']
  },
  css: [
    '~assets/main.scss',
    { src: '~assets/style/vars.sass', lang: 'sass' }
  ],
  plugins: [
    { src: '~plugins/d3', ssr: false }
  ]
}
