import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";

const url = "https://api.thecatapi.com/v1/breeds";
const myApiKey = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";

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
        console.log(data)
    })