const CACHE_KEY = 'todo-v1';
const filesToCache = [
  '/',
  'index.html',
  'img/'
];

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(CACHE_KEY)
      .then(cache => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
  );
});

self.addEventListener('activate', e => {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(cacheList => {
      return Promise.all(
        cacheList.map(cache => {
          if (cache !== CACHE_KEY) {
            console.log('[ServiceWorker] Removing old cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', e => {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request)
      .then((response) => {
        return response || fetch(e.request);
      }))
});
