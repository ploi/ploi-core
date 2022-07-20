import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
    plugins: [
        laravel([
            'resources/sass/app.scss',
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
    }
});
