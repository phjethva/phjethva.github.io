'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c199ff58a0472bcf7c561fa01a17eb40",
".git/config": "088ccaa79627db9bb66644510c76244e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6c0f648cef5a8447ea2caf73b32f87d7",
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
".git/index": "183cd33599d32bb46de700f9682116fd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e3561231a69f606c3ca9807e56f07b7c",
".git/logs/refs/heads/main": "e3561231a69f606c3ca9807e56f07b7c",
".git/logs/refs/remotes/origin/HEAD": "364d229e953fc2c27019e7ab408dd954",
".git/logs/refs/remotes/origin/main": "61d376f38cc4c1a3bf1f132ff9097d35",
".git/objects/02/a07df78c4ef87ee8783e2b410f3999db0c401a": "ac53cdad22e40ab4070a9441639c342e",
".git/objects/03/db7b6ba6d7d3663528018018f30937db2ea489": "d93e5a6707a3624433af75b2c129328c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/4942ef20571e044b3096adad9c50e6f1bc0d1f": "22c27186d5c202e60274a75287cde71f",
".git/objects/0d/d484ce4b781ef62725b860295ad62bb0889d6d": "271dab2cd0bfab9a9c1a3beaac52f93a",
".git/objects/13/75dc1d2f8d46a52456a370eedca89914452e32": "6d115ffa7b0afa7b8a59f07aa84d11e3",
".git/objects/18/e15d4d0cdf36aa58e9a761545b08308b5bf163": "252485a204605e3e896e5c24c46f4e78",
".git/objects/19/be2051d6ae2a7b62e420114135f92c5efa4db2": "95afcc9acf5f61bd8ac4088dc2206e2b",
".git/objects/21/e8290c53662b193782f0c8df23f129ae7c13ce": "6dbdf70e5de60aa92f4b47cdf60592be",
".git/objects/22/34f5b97fa575decbb6c8124ef883560cd34083": "503f238698a5db1be32cfaaf698cee22",
".git/objects/22/43240a840ea7702a2bf85b07d1fb92c8611267": "eeb92a429fa55c84ee7d4089d931ab40",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/b7767a028b62119a1240248e0d9d599dc55a0e": "f81752128fd6fbee938f21644d38fd9a",
".git/objects/38/484ce0d52a549c454b4ca5693131231d4fb8d5": "efad14673fcd58ce505e3fb1629616db",
".git/objects/39/d2325dfed17a2b7fcf1e2e0856fd58598c0ed7": "1415ed6ac8f727ce32c0209ec482b6b7",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/7cb012dad3863e020d9b56fcbee06f31a66dab": "bace3824209c2901cb9604ad823d5a21",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f317640bf65bc6966d606b7a013ca36b4e5de1": "c881c46505a3a3d7d53a87391e6fa11d",
".git/objects/49/681f99daa3da8dbf9e1d40809fafce06e64b21": "b3a95c8ef205bda72e03a01ae08c0973",
".git/objects/4d/fa0f155a4849fdceed7f98cb66eec93f26728f": "dcf81555af1f4edc4dd098941d99a274",
".git/objects/4e/ef62cc4b81ec3d81d6a2d5b49b283736f14538": "f2ff69c9fcf1f392d8c5f44205948bd6",
".git/objects/4f/8834a149b173de8791582f19e75b57e3baf3df": "9f4a9757fe2cee14237a6e6b4494d080",
".git/objects/51/1aa2c915c6606fe505e3886a11ab3ff415ef92": "47e1c85bd2f805784d680ca17995de06",
".git/objects/57/0f27f569cdf8266d1205f59d4c523e7494899c": "a23c36d4987d426e92cbc2b597ff38de",
".git/objects/58/0990f89d3d9455b40efba72b8c18152cd4721e": "0c6b1f56755131ef46a5c5d33156f382",
".git/objects/5c/b7cddd9aa37b75fa8024d73a0b38482a1fdc11": "4743c918e6faedb668d55ffe465db525",
".git/objects/61/21322d36d6c55bb6d7776031e5d6ff92266553": "cd8f67333977fe019b176dd128b89b67",
".git/objects/6b/79d89a88e25c35877dd72b4397651aeca48d4b": "42723bfff3c40b40940ddee45131f862",
".git/objects/73/5721c2e5188ecb59d38b4caceae084674b03a1": "7a02b3b6f1aa295f8b870034ae3ac2cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ed22b339123e97d411fc80adec33246620af18": "105cd3fa7eac68c7f18e370052a38909",
".git/objects/7a/11c39ad1cdd058e4c12581daf4bee6dc667966": "821276a1f8d64ba137da50e54b551263",
".git/objects/7d/06272f93972f716e3446d2de768451adec7e84": "e6437589fdda91e9924b3e300483dacc",
".git/objects/81/6067f1a753dd1e682a718107a45e3f55e8824f": "74d7904dd4405812a7f3efca30da3017",
".git/objects/83/4cb49db9da8cb7a52602c0037402985010b1dd": "421a22e5fefaa8bf90db679c5ffc0a20",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8bb5e79dc672223735d669b66ac3e71d1f0413": "e74eb872897128620f982825efe251cb",
".git/objects/8c/9d094b8782c4a9a85e452c5851951a6920d542": "1b24250241ddf738753484c68bf29519",
".git/objects/91/10500c9236e0387be783ef3339a734e2c361dc": "a131636ab01d20f56345e3a85c428c27",
".git/objects/94/253d261d54fa13939fc32296a1c478ffe2f282": "2abfe4dad959a9a8d27fc660d32927a3",
".git/objects/94/56aed84c998c1188a93a272c5102ee452c14da": "3b53756e87e1fc3e6643f06575f38663",
".git/objects/96/13a350292e8be9afaebe8dd3ba4d1503e9b5a0": "7d96663d1aa733fcfbc4d73827e2d0c3",
".git/objects/98/551f6a42a3cbe8dce9649c97abf4a4357cb049": "a47d890c2ffe8b6fd63c0492a68e22a0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/1dd29eb931d4156fe0955c9b7c5fe7c7162bc0": "f75407796427ec7dfd53bcb7f201050a",
".git/objects/a3/4a53cc2cee42b572b93ba576678ff9d20f07a7": "cb6cc1fcc37006283b5bb3dc22fb908b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/91a7a565ad36354abba44e64acdfcd3164b8a3": "3311d5b6d9103e4ce6c5058bf99e4162",
".git/objects/b0/eb132796bee4787ddd8bf6cabe772554424634": "4f4f8c0e7ecc07d4c37238d9625b737b",
".git/objects/b1/3763af66b5ad02036ff182d49ab1cf0f9f3a16": "ad09be1607ec434c608d2cddf0ee2a37",
".git/objects/b2/15e9494f3e4deb367918f59cb171ece9a04f4b": "a59ee65e30d4d72a45b93e0aa21f97c3",
".git/objects/b2/f72da599b50be9fa5c00322452602990e3e77b": "cf4c5c1631ff5298fc6f021cf72338fe",
".git/objects/b3/9436304d2c965475b67fd5d03627adc1650b6f": "57814859b267dcd59d28072586bc4af9",
".git/objects/b4/7f70a2e1cc2dff075c3abbff78008f252c8a9f": "1a73ac0965ae6c95920e32ef919d581a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/5589410d207d3d7300f3f491e0f260ed6933f0": "7f1266a70d536e3e4c42a8c0cb42c3ee",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a0695ce5ecf41ec71edd4698664ed1d433f4bf": "8bbf8738b280c146d847f866859e8e6d",
".git/objects/d8/dc598f78d9ac15199d13ee0b8d591cc736e89c": "1adfc18023fa77217d0f419f8b1ab430",
".git/objects/d9/8747ddb74a43d50fbd1bf2887fa9d4a5dc0930": "0c0e30b8af0f2fb59a5f5129f2ed3b12",
".git/objects/da/93a50943b2d21239f6141209ded40ab41918f9": "eba6cf91f6a2db0a73e37c7ba6fffcbe",
".git/objects/df/67d4d88a146831c155f1416659df68b1445ccd": "f39eb8924100a119ff3079983c3553e9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/4f781b2c3ff392f760d3435cb81a4449c91fa4": "612b4fe25f2b24911d5da355e60e6235",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/2a18dc051ae266c9b9376a9912806f0051c349": "d53c0c2894f214404096ac72e85a4372",
".git/objects/f0/60f259e38ee4161705b1b5c8837b8f41bedb92": "3ce896d815a58f3efc53fa0fab2dae5c",
".git/objects/f2/fe33cfa2b79d096817c16b752278d8177dfb0a": "a2b7564709b688f5d51d2ee94bba0ce0",
".git/objects/fa/f52d6e466ff7bf64d1303e2affbbf9ab94186d": "c7f410bb9d6533bc83b43e10a0808c69",
".git/objects/pack/pack-c3f582d229909dd9070bfe0bfeac8f6f0708c06e.idx": "89fd301dba198958054502373806b731",
".git/objects/pack/pack-c3f582d229909dd9070bfe0bfeac8f6f0708c06e.pack": "f6b84f28820a1ce021e0e7aea5845013",
".git/packed-refs": "9ba3ff3c066c5daac361022e76c93e20",
".git/refs/heads/main": "432665f76a6411593c5bd6922769797d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "432665f76a6411593c5bd6922769797d",
"assets/AssetManifest.json": "4a4613939b71dabdc090269fffa3466f",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/ic_dart.png": "39a39e4059d05bb0f5aaec1157203a29",
"assets/ic_email.svg": "8e79ab399ff26dc0123d09e6246d60f1",
"assets/ic_facebook.svg": "7a34bd4995c7244ed9896da11ced27af",
"assets/ic_flutter.png": "7e7ebbd99fda1a58b4ae4f4d822160c7",
"assets/ic_github.svg": "4427fedd16df8ab5da0f388e0d94ffe2",
"assets/ic_heart.gif": "8c8e3311773a9b08c66b1301884bdb95",
"assets/ic_instagram.svg": "304fb3151e3b1f86d0150dc8144fcc3c",
"assets/ic_linkedin.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/ic_mobile_frame.png": "c87d45169111f798e6c6a7f82dff31d9",
"assets/ic_mobile_wallpaper.png": "ad91eeccfcfc60dec251c96dd7cd0702",
"assets/ic_phjethva.png": "265fbf7cd5f6aed99cf23183cd92dc08",
"assets/ic_skype.svg": "f7ffb3fd68dff1078b681676e51c668b",
"assets/ic_twitter.svg": "37caa6621fbf99d618c438b5a3c3ca5e",
"assets/ic_youtube.svg": "6c3781437eadf78643698de65b648042",
"assets/NOTICES": "8ac359992682a43fcdb0bb2e668d4c6b",
"assets/web/assets/ic_dart.png": "39a39e4059d05bb0f5aaec1157203a29",
"assets/web/assets/ic_email.svg": "8e79ab399ff26dc0123d09e6246d60f1",
"assets/web/assets/ic_facebook.svg": "7a34bd4995c7244ed9896da11ced27af",
"assets/web/assets/ic_flutter.png": "7e7ebbd99fda1a58b4ae4f4d822160c7",
"assets/web/assets/ic_github.svg": "4427fedd16df8ab5da0f388e0d94ffe2",
"assets/web/assets/ic_heart.gif": "8c8e3311773a9b08c66b1301884bdb95",
"assets/web/assets/ic_instagram.svg": "304fb3151e3b1f86d0150dc8144fcc3c",
"assets/web/assets/ic_linkedin.svg": "5100826d208b6c173e599d9463b36dcf",
"assets/web/assets/ic_mobile_frame.png": "c87d45169111f798e6c6a7f82dff31d9",
"assets/web/assets/ic_mobile_wallpaper.png": "ad91eeccfcfc60dec251c96dd7cd0702",
"assets/web/assets/ic_phjethva.png": "265fbf7cd5f6aed99cf23183cd92dc08",
"assets/web/assets/ic_skype.svg": "f7ffb3fd68dff1078b681676e51c668b",
"assets/web/assets/ic_twitter.svg": "37caa6621fbf99d618c438b5a3c3ca5e",
"assets/web/assets/ic_youtube.svg": "6c3781437eadf78643698de65b648042",
"assets/web/icons/Icon-512.png": "d100b57c3a7e5f5a98e469cf08d7cef3",
"favicon.ico": "f540ee034f8150c2401765470d2e590c",
"icons/Icon-192.png": "d4f1657340152af967ad9cf190d490bb",
"icons/Icon-512.png": "d100b57c3a7e5f5a98e469cf08d7cef3",
"icons/Icon-maskable-192.png": "6ea0f2b93ff1ed4122d9b583c5bc5978",
"icons/Icon-maskable-512.png": "e1c614d3870e86d50141429e8120f65a",
"index.html": "09fc815426994c959672ca7f3b682a84",
"/": "09fc815426994c959672ca7f3b682a84",
"LICENSE": "524ad59d5e6cf7be722892af4688fdf1",
"main.dart.js": "77719b078bc1b1142c3e8ef0840d7b66",
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
