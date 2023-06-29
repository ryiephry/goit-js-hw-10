// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";

const url = "https://api.thecatapi.com/v1/breeds";
const myApiKey = "live_JkIDDOSMLEOX7RxnSCknMTfyPGIScNdHrVgoxdX9KjEQULxovwvDQAbEsCBDOyHU";
const selectEl = document.querySelector(".breed-select");
let storedBreeds = [];

fetch(url, { headers: {
        'x-api-key' : myApiKey
    }
})
    .then((response) => {
        return response.json();
    })

    .then((data) => {
       
        
        data = data.filter(img => img.image?.url != null);
        
        storedBreeds = data;
        console.log(storedBreeds)
    
        for (let i = 0; i < storedBreeds.length; i++) {

            const breed = storedBreeds[i];
            let option = document.createElement('option');
     
            //skip any breeds that don't have an image
            if (!breed.image) continue
     
            //use the current array index
            option.value = i;
            option.innerHTML = `${breed.name}`;
            selectEl.appendChild(option);
           // console.log(breed.name)
            
            
        }
s
        showBreedImage(0);
      //  showBreedImage(option.value)
    })
       .catch(function(error) {
              console.log(error);
   
       });
    
function showBreedImage(index){ 

    document.getElementById("breed_image").src = storedBreeds[index].image.url;
}




