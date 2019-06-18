import pkg from "./package";

export default {
    mode: "universal",

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
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
                content: pkg.description
            },
            {
                name: 'msapplication-TileColor',
                content: '#da532c'
            },
            {
                name: 'theme-color',
                content: '#ffffff'
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
