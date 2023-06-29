// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";

const url = "https://api.thecatapi.com/v1/breeds";
const myApiKey = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";
const selectEl = document.querySelector(".breed-select");
console.log(selectEl);
let storedBreeds = [];


fetch(url, {
    headers: {
        "myApiKey": myApiKey
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)//.name
        
        storedBreeds = data

    
        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');
     
            //skip any breeds that don't have an image
            if (!breed.image) continue
     
            //use the current array index
            option.value = i;
            option.innerHTML = `${breed.name}`;
            selectEl.appendChild(option);
        }
    })
// need to set select.breed-select.value = to id of breed



