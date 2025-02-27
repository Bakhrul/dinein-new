export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: false
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: "any",
        href: '/logo.png'
      },   
      {
        rel: 'preconnect',
        href:'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href:'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href:'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
      },{
        rel: 'stylesheet',
        href:'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
      }],
      script:[
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
        }
      ]
    },
  },
  modules: ['@nuxtjs/i18n', '@nuxt/image'],
  css: ['~/public/main.css'],
  i18n: {    
    locales: [{
      code: 'id',
      name: 'Indonesia',
      language: 'id-ID',
      file: 'id.ts',
    }, {
      code: 'en',
      name: 'English',
      file: 'en.ts',
      language: 'en-US'
    }, ],
    defaultLocale: 'id', // default locale of your project for Nuxt pages and routings
  }
})