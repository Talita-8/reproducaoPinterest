import { gallery } from './data.js'
import { filterText } from './functions.js'

//console.log(gallery, filterText)

const galleryPics = document.getElementById("gallery-container")
let textIn = document.getElementById("search-box")
textIn.addEventListener("keyup", showPics)

function showPics(){
    
    let sum1 = 0
    let sum2 = 1
    let pictures = ""
    let valueInput = textIn.value
    
   for(let x = 0; x <= 9 ; x++) {
    for(let i of filterText(gallery, valueInput)){
        pictures += `
        <img class="pictures" id="pic-${sum2++}" src="${i[1][sum1++]}" alt="">`
        
        console.log(pictures)
    }
    galleryPics.innerHTML = pictures
   }
}

