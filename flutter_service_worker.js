'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c199ff58a0472bcf7c561fa01a17eb40",
".git/config": "088ccaa79627db9bb66644510c76244e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "aec7cc502678f79db7420fcad0bda860",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3890e73affc92d5852850b11e6c67b8c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aadf5c6c2957726875d22b95bb20be9e",
".git/logs/refs/heads/main": "aadf5c6c2957726875d22b95bb20be9e",
".git/logs/refs/remotes/origin/HEAD": "364d229e953fc2c27019e7ab408dd954",
".git/logs/refs/remotes/origin/main": "04be347f55982b764a36e1b203e46662",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/13/75dc1d2f8d46a52456a370eedca89914452e32": "6d115ffa7b0afa7b8a59f07aa84d11e3",
".git/objects/22/43240a840ea7702a2bf85b07d1fb92c8611267": "eeb92a429fa55c84ee7d4089d931ab40",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/38/484ce0d52a549c454b4ca5693131231d4fb8d5": "efad14673fcd58ce505e3fb1629616db",
".git/objects/39/d2325dfed17a2b7fcf1e2e0856fd58598c0ed7": "1415ed6ac8f727ce32c0209ec482b6b7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/681f99daa3da8dbf9e1d40809fafce06e64b21": "b3a95c8ef205bda72e03a01ae08c0973",
".git/objects/4e/ef62cc4b81ec3d81d6a2d5b49b283736f14538": "f2ff69c9fcf1f392d8c5f44205948bd6",
".git/objects/57/0f27f569cdf8266d1205f59d4c523e7494899c": "a23c36d4987d426e92cbc2b597ff38de",
".git/objects/58/0990f89d3d9455b40efba72b8c18152cd4721e": "0c6b1f56755131ef46a5c5d33156f382",
".git/objects/5c/b7cddd9aa37b75fa8024d73a0b38482a1fdc11": "4743c918e6faedb668d55ffe465db525",
".git/objects/61/21322d36d6c55bb6d7776031e5d6ff92266553": "cd8f67333977fe019b176dd128b89b67",
".git/objects/6b/79d89a88e25c35877dd72b4397651aeca48d4b": "42723bfff3c40b40940ddee45131f862",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/11c39ad1cdd058e4c12581daf4bee6dc667966": "821276a1f8d64ba137da50e54b551263",
".git/objects/83/4cb49db9da8cb7a52602c0037402985010b1dd": "421a22e5fefaa8bf90db679c5ffc0a20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/10500c9236e0387be783ef3339a734e2c361dc": "a131636ab01d20f56345e3a85c428c27",
".git/objects/94/56aed84c998c1188a93a272c5102ee452c14da": "3b53756e87e1fc3e6643f06575f38663",
".git/objects/96/13a350292e8be9afaebe8dd3ba4d1503e9b5a0": "7d96663d1aa733fcfbc4d73827e2d0c3",
".git/objects/98/551f6a42a3cbe8dce9649c97abf4a4357cb049": "a47d890c2ffe8b6fd63c0492a68e22a0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/1dd29eb931d4156fe0955c9b7c5fe7c7162bc0": "f75407796427ec7dfd53bcb7f201050a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/eb132796bee4787ddd8bf6cabe772554424634": "4f4f8c0e7ecc07d4c37238d9625b737b",
".git/objects/b1/3763af66b5ad02036ff182d49ab1cf0f9f3a16": "ad09be1607ec434c608d2cddf0ee2a37",
".git/objects/b3/9436304d2c965475b67fd5d03627adc1650b6f": "57814859b267dcd59d28072586bc4af9",
".git/objects/b4/7f70a2e1cc2dff075c3abbff78008f252c8a9f": "1a73ac0965ae6c95920e32ef919d581a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a0695ce5ecf41ec71edd4698664ed1d433f4bf": "8bbf8738b280c146d847f866859e8e6d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/4f781b2c3ff392f760d3435cb81a4449c91fa4": "612b4fe25f2b24911d5da355e60e6235",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2a18dc051ae266c9b9376a9912806f0051c349": "d53c0c2894f214404096ac72e85a4372",
".git/objects/fa/f52d6e466ff7bf64d1303e2affbbf9ab94186d": "c7f410bb9d6533bc83b43e10a0808c69",
".git/objects/pack/pack-c3f582d229909dd9070bfe0bfeac8f6f0708c06e.idx": "89fd301dba198958054502373806b731",
".git/objects/pack/pack-c3f582d229909dd9070bfe0bfeac8f6f0708c06e.pack": "f6b84f28820a1ce021e0e7aea5845013",
".git/packed-refs": "9ba3ff3c066c5daac361022e76c93e20",
".git/refs/heads/main": "3787a133def08ef8f9aa5f57c3b1a2a5",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3787a133def08ef8f9aa5f57c3b1a2a5",
"assets/AssetManifest.json": "79eb27bc8910b02d317e464588bb7a4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "8b5f0b8e497484f7604f333baa4fbc5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/web/icons/Icon-512.png": "d100b57c3a7e5f5a98e469cf08d7cef3",
"favicon.ico": "f540ee034f8150c2401765470d2e590c",
"icons/Icon-192.png": "d4f1657340152af967ad9cf190d490bb",
"icons/Icon-512.png": "d100b57c3a7e5f5a98e469cf08d7cef3",
"icons/Icon-maskable-192.png": "6ea0f2b93ff1ed4122d9b583c5bc5978",
"icons/Icon-maskable-512.png": "e1c614d3870e86d50141429e8120f65a",
"index.html": "e3dad3f45148a73cdbf4fabfed11df57",
"/": "e3dad3f45148a73cdbf4fabfed11df57",
"LICENSE": "524ad59d5e6cf7be722892af4688fdf1",
"main.dart.js": "eeb248811fec4680f15089a55bf0d15e",
"manifest.json": "5adb561d46acf968450f6436af4c3940",
"README.md": "77c98daa6594b59d8d41d8fd8367e65c",
"version.json": "8f1b9f0c1ec73b108652324766ef0a99"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
