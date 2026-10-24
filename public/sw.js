// minimum code is "install" and "activate" (2 lines)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(client.claim()));