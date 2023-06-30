// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";

const selectorEl = document.querySelector(".breed-select");
const imgEl = document.createElement("img");
const divEl = document.querySelector(".cat-info");
const loaderEl = document.querySelector(".loader");
const errorEl = document.querySelector(".error");
let nameOfCat = document.createElement("h2")//`<p> ${selectorEl.name} </p>`;
let infoOnCat = document.createElement("p");
const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU"
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
     .then((response) => {
   loaderEl.style.display = "block";
   return response.json();
 })
.then((data) => {
   data = data.filter(img=> img.image?.url!=null)
   
  storedBreeds = data;
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
   
     if(!breed.image)continue
      option.value = i;
      option.innerHTML = `${breed.name}`;
      selectorEl.appendChild(option);
    }

    loaderEl.style.display = "none";

    divEl.append(imgEl);
    imgEl.classList = "breed-image"
    imgEl.src = storedBreeds[0].image.url;
    
    divEl.prepend(nameOfCat)
    nameOfCat.innerText = storedBreeds[selectorEl.value].name
    nameOfCat.className = "nameOfCat"
    
    divEl.append(infoOnCat)
    infoOnCat.innerText = storedBreeds[selectorEl.value].description
    infoOnCat.className = "infoOnCat"
})
.catch(function(error) {
    console.log(error);
    errorEl.style.display = "block"
    
});

selectorEl.addEventListener("change", function showBreedImage() {
    imgEl.src = storedBreeds[selectorEl.value].image.url;
    nameOfCat.innerText = storedBreeds[selectorEl.value].name
    infoOnCat.innerText = storedBreeds[selectorEl.value].description
    console.log(selectorEl.value)

}) 
