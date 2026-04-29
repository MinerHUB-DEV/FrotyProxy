/* sw.js */
importScripts('https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@latest/dist/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
