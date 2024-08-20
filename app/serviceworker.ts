// src/service-worker.ts
export {}; // This file is treated as a module



// Augment the global scope
declare global {
    interface ServiceWorkerGlobalScope {
        caches: CacheStorage;
        fetch: typeof fetch;
        // Add any other global augmentations here
    }
}


const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', (event: ExtendableEvent) => {
    event.waitUntil(
        caches.open('static-cache')
            .then((cache: Cache) => {
                return cache.addAll([
                    '/',
                    '/index.html',
                    '/globals.css',
                    '/page.tsx',
                    '/images/buzzIcon.svg'
                ]);
            })
    );
});

sw.addEventListener('fetch', (event: FetchEvent) => {
    event.respondWith(
        caches.match(event.request)
            .then((response: Response | undefined) => {
                return response || fetch(event.request);
            })
    );
});