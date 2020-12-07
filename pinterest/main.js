import { gallery } from './data.js'

console.log(gallery)

const galleryPics = document.getElementById("gallery-container")
let textIn = document.getElementById("in-box")
textIn.addEventListener("input", showPics)

function showPics(e){
    e.preventDefault()
    let countin = 0
    let pics = ""
    let world = textIn.value
    const propertyData = Object.keys(gallery)
    const stringData = propertyData.toString()

    if(world.toUpperCase() == stringData.toUpperCase()){
        for(let i of gallery.Café)
        pics += `<img src="${i}" id="pic-${countin += 1} class="pictures" `
    }
    galleryPics.innerHTML = pics
}

