const e=document.querySelector(".breed-select");console.log(e);let o=[];fetch("https://api.thecatapi.com/v1/breeds",{headers:{myApiKey:"live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU"}}).then((e=>e.json())).then((n=>{console.log(n),o=n;for(let n=0;n<o.length;n++){const t=o[n];let c=document.createElement("option");t.image&&(c.value=n,c.innerHTML=`${t.name}`,e.appendChild(c),console.log(t.name))}var t;t=0,document.getElementById("breed_image").src=o[t].image.url})).catch((function(e){console.log(e)}));
//# sourceMappingURL=index.9a56a1a8.js.map
