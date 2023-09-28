import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/css/filament/admin/theme.css'
            ],
            refresh: true,
        }),
        vue({
            template: {
                compilerOptions: {
                    compatConfig: {
                        MODE: 3,
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
                require("tailwindcss"),
                require("autoprefixer"),
            ]
        }
    },
    build: {
        outDir: "./public/build",
        minify: false,
    },
    resolve: {
        alias: {
            "@": '/resources/js',
            "vue": "@vue/compat"
        }
    }
});
