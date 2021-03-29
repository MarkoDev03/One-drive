self.addEventListener("install",e => {
     e.waitUntil(
         caches.open("static").then(cache => {
             return cache.addAll(["./","style.css","./media/none-pic.png"]);
        })
     );
 });
 self.addEventListener("fetch",e => {
     //console.error(`Intercepting fetch request for: ${e.request.url}`);
 });