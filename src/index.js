import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";
//console.log(axios.defaults.headers.common["x-api-key"]);

const di = document.querySelector(".cat-info");
const li = document.createElement("li");
const p = document.querySelector(".error");
let url;



//https://api.thecatapi.com/v1/images/search?breed_ids=breed_identifier

function load() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            console.log(response.url);
            return response//.json()
        }).then(data => {
            console.log(data.url)
            url = data.url
           
        })
}                                                                                                                                                                                                                                                          



p.addEventListener("click", load)



di.append(li)

li.innerHTML = `<img src=${url} alt=hiii>`