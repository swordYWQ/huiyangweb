module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '封箱胶带,胶带生产厂家,美纹纸,双面胶,封箱胶厂家',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: "封箱胶带,胶带生产厂家,美纹纸,双面胶,封箱胶厂家" },
      { hid: 'description', name: 'description', content: "封箱胶带,胶带生产厂家,美纹纸,双面胶,封箱胶厂家" }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: [
    // '~/assets/css/main.css',
    // '~/assets/css/style.css',
    // '~/assets/css/iconfont/iconfont.css',
    '~/assets/css/style.scss',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
  ],
  generate: {
    minify: {
      collapseBooleanAttributes: true,
      collapseWhitespace: false,
      decodeEntities: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeAttributeQuotes: false,
      removeComments: false,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: false,
      removeStyleLinkTypeAttributes: false,
      removeTagWhitespace: false,
      sortAttributes: true,
      sortClassName: false,
      trimCustomFragments: true,
      useShortDoctype: true
    },
    routes: [
      '/'
    ]
  }
}
