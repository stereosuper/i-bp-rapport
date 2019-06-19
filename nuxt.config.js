import pkg from "./package";

export default {
    mode: "universal",

    /*
     ** Headers of the page
     */
    head: {
        title: "Rapport d’activité 2018 | i-BP",
        meta: [{
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Découvrez le kiosque à datas d’Informatique Banque Populaire, une manière innovante de vous plonger au coeur de l’activité 2018"
            },
            {
                hid: "keywords",
                name: "keywords",
                content: "informatique, banque, banquepopulaire, 2018, rapport d’activités, datas, illustrations, chiffres"
            },
            {
                name: 'msapplication-TileColor',
                content: '#da532c'
            },
            {
                name: 'theme-color',
                content: '#ffffff'
            },
            {
                property: 'og:title',
                content: `Rapport d’activité 2018 | i-BP`
            },
            {
                property: 'og:description',
                content: `Découvrez le kiosque à datas d’Informatique Banque Populaire, une manière innovante de vous plonger au coeur de l’activité 2018`
            },
            {
                property: 'og:image',
                content: `https://ibp-rapport.netlify.com/thumbnail-small.png`
            },
            {
                property: 'og:url',
                content: 'https://ibp-rapport.netlify.com/'
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            }
        ],
        link: [{
                rel: 'apple-touch-icon',
                sizes: '180x180',
                href: '/apple-touch-icon.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/favicon-32x32.png'
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/favicon-16x16.png'
            },
            {
                rel: 'manifest',
                href: '/site.webmanifest'
            },
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg',
                color: '#5bbad5'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: "#fff"
    },

    /*
     ** Global CSS
     */
    css: ["@/assets/scss/main.scss"],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/style-resources"],

    styleResources: {
        // your settings here
        scss: [
            "~/assets/scss/abstracts/_functions.scss",
            "~/assets/scss/abstracts/_mixins.scss",
            "~/assets/scss/abstracts/_placeholders.scss",
            "~/assets/scss/abstracts/_variables.scss"
        ]
    },

    /*
     ** Build configuration
     */
    build: {
        html: {
            minify: {
                removeRedundantAttributes: false
            }
        },
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            // if (ctx.isDev && ctx.isClient) {
            //     config.module.rules.push({
            //         enforce: "pre",
            //         test: /\.(js|vue)$/,
            //         loader: "eslint-loader",
            //         exclude: /(node_modules)/,
            //         options: {
            //             fix: true
            //         }
            //     });
            // }
        }
    }
};
