'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "74b569388d1d08d02f8e4778bfe52636",
"assets/assets/loginUi.jpg": "65cc154c071c8e9e1cf4ed8d8a62d087",
"assets/assets/sayara-logo.png": "356c3cf2bf545a877dfb559591b2ef80",
"assets/FontManifest.json": "d1c1af11f3005694b8d589ec8b479cc3",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "349ab69c914909aa54079184cca8cf1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/grafpix/lib/fonts/captainicon.ttf": "1d31a28cd5c4a89c81173b554ccd6a96",
"assets/packages/grafpix/lib/fonts/fa_brands.ttf": "273dc9bf9778fd37fa61357645d46a28",
"assets/packages/grafpix/lib/fonts/fa_solid.ttf": "2aa6edf8f296a43b32df35f330b7c81c",
"assets/packages/grafpix/lib/fonts/grafpix.ttf": "10d143dccb30a3d06c597706d0124437",
"assets/packages/grafpix/lib/fonts/typicons.ttf": "29f9630f7d87a79830d1c321e1600f2e",
"index.html": "9af85bb373995d53f0074414a1590f3a",
"/": "9af85bb373995d53f0074414a1590f3a",
"main.dart.js": "2f9b955c5615b5283d0296089632a6fe"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
