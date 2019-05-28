import pkg from "./package";

export default {
    mode: "universal",

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            {
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
            }
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico"
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
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                    options: {
                        fix: true
                    }
                });
            }
        }
    }
};
