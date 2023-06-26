import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";

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

    })
// need to set select.breed-select.value = to id of breed 