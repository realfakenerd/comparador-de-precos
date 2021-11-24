import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { publish } from 'gh-pages';
const ghpages = require('gh-pages');

export default defineConfig({
    server: {
        port: 5000,
        host: true
    },

    plugins: [
        svelte(),
        // @ts-ignore
        publish('dist', (err) => {
            console.log("Published to github", err)
        })
    ],
});
