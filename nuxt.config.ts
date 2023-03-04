const baseURL = "https://mcdr.zhanganzhi.com";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {charset: "utf-8"},
                {name: "description", content: "MCDR Plugin Catalogue"},
                {
                    name: "keywords",
                    content: "MCDReforged, MCDR, Minecraft, Plugin Catalogue"
                },
            ],
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "https://avatars.githubusercontent.com/u/63280128"
                },
            ],
        },
    },

    css: [
        "@/assets/main.scss",
        "open-props/style",
    ],

    imports: {
        dirs: [
            "stores",
        ]
    },

    modules: [
        "@element-plus/nuxt",
        [
            "@nuxtjs/i18n",
            {
                baseUrl: baseURL,
                locales: [
                    {
                        code: "en-US",
                        iso: "en-US",
                        file: "en-US.js",
                        name: "English",
                    },
                    {
                        code: "zh-CN",
                        iso: "zh-CN",
                        file: "zh-CN.js",
                        name: "简体中文",
                    },
                ],
                defaultLocale: "en-US",
                strategy: "no_prefix",
                langDir: "locales",
                vueI18n: {
                    fallbackLocale: "en-US",
                },
            }
        ],
        [
            "@pinia/nuxt",
            {
                autoImports: [
                    "defineStore",
                ],
            }
        ],
    ],

    nitro: {
        preset: "vercel-edge",
    },

    runtimeConfig: {
        public: {
            baseURL: baseURL,
        },
    },

    telemetry: false,
});
