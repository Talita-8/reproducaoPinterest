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

const inicialButton = document.getElementById("inicial-page-button")
inicialButton.addEventListener("click", changeInicialButton)

function changeInicialButton(){
    inicialButton.style.backgroundColor = "black"
    inicialButton.style.color = " white"

    todayButton.style.backgroundColor = "white"
    todayButton.style.color = "black"

    followinButton.style.backgroundColor = "white"
    followinButton.style.color = "black"
}

const todayButton = document.getElementById("today-button")
todayButton.addEventListener("click", changeTodayButton)

function changeTodayButton(){
    todayButton.style.backgroundColor = "black"
    todayButton.style.color = "white"

    inicialButton.style.backgroundColor = "white"
    inicialButton.style.color = "black"

    followinButton.style.backgroundColor = "white"
    followinButton.style.color = "black"
}

const followinButton = document.getElementById("following-button")
followinButton.addEventListener("click", changefollowinButton)

function changefollowinButton(){
    followinButton.style.backgroundColor = "black"
    followinButton.style.color = "white"

    inicialButton.style.backgroundColor = "white"
    inicialButton.style.color = "black"

    todayButton.style.backgroundColor = "white"
    todayButton.style.color = "black"
}