import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

let inputs = [];

if (process.env.TAILWIND_CONFIG) {
    inputs = [`resources/css/${process.env.TAILWIND_CONFIG}.css`];
} else {
    inputs = [
        /** CSS is dynamically imported in the app.js file. */
        'resources/js/app.js',
    ];
}

export default defineConfig({
    plugins: [
        laravel({
            input: inputs,
            refresh: true,
        }),
        vue({
            template: {
                compilerOptions: {
                    compatConfig: {
                        MODE: 2,
                    }
                },
                transformAssetUrls: {
                    video: [],
                    source: [],
                    img: [],
                    image: [],
                    use: []
                },
            },
        }),
    ],
    css: {
        postcss: {
            plugins: [
                require("tailwindcss")({
                    config: process.env?.TAILWIND_CONFIG
                        ? `tailwind-${process.env.TAILWIND_CONFIG}.config.js`
                        : "./tailwind.config.js",
                }),
                require("autoprefixer"),
            ]
        }
    },
    build: {
        outDir: process.env?.TAILWIND_CONFIG
            ? `./public/build/${process.env.TAILWIND_CONFIG}`
            : "./public/build",
        minify: false,
    },
    resolve: {
        alias: {
            "@": '/resources/js',
            "vue": "@vue/compat"
        }
    }
});
