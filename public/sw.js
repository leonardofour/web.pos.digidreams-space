const CACHE_NAME = "my-pwa-cache-v2";

// Daftar file yang langsung di-cache saat install
const urlsToCache = [
  "/",
  "/offline.html",
];

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate SW
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch handler
self.addEventListener("fetch", (event) => {
  // Hanya cache permintaan GET
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then((response) => {
          // Cache resource yang valid
          if (
            response &&
            response.status === 200 &&
            response.type === "basic"
          ) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Kalau offline, coba fallback ke offline.html
          if (event.request.destination === "document") {
            return caches.match("/offline.html");
          }
        });
    })
  );
});
