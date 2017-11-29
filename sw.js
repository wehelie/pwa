importScripts('./node_modules/workbox-sw/build/importScripts/workbox-sw.dev.v2.1.1.js');

const staticAssets = [
    './',
    './styles.css',
    './app.js',
    './fallback.json',
    './images/demo.gif'
];


const wb = new WorkboxSW();

console.log(wb);

wb.precache(staticAssets);


// self.addEventListener('install', async event => {
//     const cache = await caches.open('news-static');
//     cache.addAll(staticAssets);
// });

// self.addEventListener('fetch', event=> {
//    const req = event.request;
//    const url =  new URL(req.url);
//    if (url.origin === location.origin) {
//        event.respondWith(cacheFirst(req));
//    } else {
//        event.respondWith(networkFirst(req));
//    }
//    event.respondWith(cacheFirst(req));
// });

// async function cacheFirst(req) {
//     const cachedResponse = await caches.match(req);
//     return cachedResponse || fetch(req);
// }

// async function networkFirst(req) {
//     const cache  = await caches.open('news-dynamic');

//     try {
//         const res =  await fetch(req);
//         cache.put(req, res.clone());
//         return res;
//     } catch (error) {
//         const cachedResponse =  await cache.match(req);
//         return cachedResponse || caches.match('./fallback.json');
//     }
// }