import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        laravel([
            /** CSS is dynamically imported in the app.js file. */
            'resources/js/app.js',
        ]),
        vue({
            template: {
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
    resolve: {
        alias: {
            "@": '/resources/js'
        }
    },
    optimizeDeps: {
        include: ['codemirror/addon/edit/continuelist.js']
    },
    build: {
        commonjsOptions: {
            include: ['codemirror/addon/edit/continuelist.js', 'node_modules', ]
        }
    },
});
