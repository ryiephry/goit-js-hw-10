!function(){var e=document.querySelector(".breed-select");console.log(e);var n=[];fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU"}}).then((function(e){return e.json()})).then((function(o){o=o.filter((function(e){var n;return null!=(null===(n=e.image)||void 0===n?void 0:n.url)})),n=o,console.log(n);for(var t=0;t<n.length;t++){var r=n[t],c=document.createElement("option");r.image&&(c.value=t,c.innerHTML="".concat(r.name),e.appendChild(c),console.log(r.name))}var l;l=0,console.log(l),document.getElementById("breed_image").src=n[l].image.url,document.querySelector(".loader").textContent=n[l].temperament})).catch((function(e){console.log(e)}))}();
//# sourceMappingURL=index.61a0f2c1.js.map
