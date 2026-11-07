var V="pulse-studio-v1",A=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","fonts/Poppins-Bold.ttf","fonts/Poppins-Medium.ttf"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(A)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
