const e=document.querySelector(".breed-select"),n=document.createElement("img"),t=document.querySelector(".cat-info"),l=document.querySelector(".loader"),a=document.querySelector(".error");let c=document.createElement("h2"),o=document.createElement("p"),r=[];fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU"}}).then(e=>(l.style.display="block",e.json())).then(a=>{r=a=a.filter(e=>e.image?.url!=null);for(let n=0;n<r.length;n++){let t=r[n],l=document.createElement("option");t.image&&(l.value=n,l.innerHTML=`${t.name}`,e.appendChild(l))}l.style.display="none",t.append(n),n.classList="breed-image",n.src=r[0].image.url,t.prepend(c),c.innerText=r[e.value].name,c.className="nameOfCat",t.append(o),o.innerText=r[e.value].description,o.className="infoOnCat"}).catch(function(e){console.log(e),a.style.display="block"}),e.addEventListener("change",function(){n.src=r[e.value].image.url,c.innerText=r[e.value].name,o.innerText=r[e.value].description,console.log(e.value)});
//# sourceMappingURL=index.975ce75c.js.map
