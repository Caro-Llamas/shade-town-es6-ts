import { Lenses } from "./lenses.mjs";
import { Model } from "./model.mjs";
import { Frames } from "./frames.mjs";
import { Sunglasses } from "./sunglasses.mjs"
//To do: create a sunglasses class with default values 

let sunglassesOptions = {
    models: [
        new Model("aviator", 300, "thumb-aviator.png", "frame-aviator"),
        new Model("half-frame", 200, "thumb-half-frame.png", "frame-half"),
        new Model("round", 250, "thumb-round.png", "frame-round"),
        new Model("wayfarer", 250, "thumb-wayfarer.png", "frame-wayfarer")
    ],
    lenses: [
        new Lenses("sepia", 20, "color-sepia"),
        new Lenses("rainbow", 50, "color-rainbow"),
        new Lenses("iridescent", 30, "color-iridescent")
    ],
    frames: [
        new Frames("charcoal", 0, "color-charcoal"),
        new Frames("tan", 0, "color-tan"),
        new Frames("rose", 0, "color-rose")
    
    ],
}


let sunglasses = new Sunglasses(
            new Model ("aviator", 300, "./images/thumb-aviator.png", "frame-aviator"), 
            new Lenses("sepia", 20, "color-sepia"), 
            new Frames("charcoal", 0, "color-charcoal")
        )


let productDetailsEl = document.getElementById("productDetails")
let productImage = document.getElementById("productImage")
let productFrames = document.getElementsByClassName("product-image_frame")[0]
let productLenses = document.getElementsByClassName("product-image_lenses")[0]

let sunglassesNew = '' 

const setSunglasses = (sunglassesNew = sunglasses) => { return sunglassesNew }

function render(sunglassesNew) {
    
    sunglassesNew = {
        model: {
            name: sunglassesNew.model.name,
            price: sunglassesNew.model.price,
            thumbImg: sunglassesNew.model.thumbImg,
            cssClass: sunglassesNew.model.cssClass,
        },
        lenses: {
            color: sunglassesNew.lenses.color,
            price: sunglassesNew.lenses.price,
            cssClass: sunglassesNew.lenses.cssClass,
        },
        frame: {
            color: sunglassesNew.frame.color,
            price: sunglassesNew.frame.price,
            cssClass: sunglassesNew.frame.cssClass,
        }     
    }
    
    let price = `$ ${sunglassesNew.model.price + sunglassesNew.lenses.price + sunglassesNew.frame.price}`
    
    productDetailsEl.innerHTML = 
    `<h1> ${sunglassesNew.model.name} </h1>
     <p>Custom: ${sunglassesNew.lenses.color} lenses, ${sunglassesNew.frame.color} frames</p>
     <p>${price} </p>`
    
    let currClass = productImage.classList[1]
    productImage.classList.replace(currClass, sunglassesNew.model.cssClass)
    
    let currFramesClass = productFrames.classList[1]
    productFrames.classList.replace(currFramesClass, sunglassesNew.frame.cssClass)
    
    let currLensesClass = productLenses.classList[1]
    productLenses.classList.replace(currLensesClass, sunglassesNew.lenses.cssClass)
    
}

//Highlight current selection
function addHighlight(clickedItem) {

    if (Array.from(clickedItem.classList).includes("product-thumb")) {
        let thumbs = document.getElementsByClassName("product-thumb")
        for(let thumb of thumbs){
            thumb.classList.remove("selected")
        }
    } else if (Array.from(clickedItem.classList).includes("product-color-swatch")) {
        let swatches = clickedItem.closest("ul").querySelectorAll("button")
        for(let swatch of swatches){
            swatch.classList.remove("selected")
        }
    }
    clickedItem.classList.add("selected") 
}


document.body.addEventListener("click", function(event) {
    let clickedItem = event.target
    //if sunglassesNew defined take variable from updates 
        //else use original sunglasses object
    if (!sunglassesNew) {
        sunglassesNew = sunglasses
    }
    
    // update model
    if (Array.from(clickedItem.classList).includes("product-thumb")) {

        let currName = clickedItem.dataset.name

        let modelOptions = sunglassesOptions.models.filter(returnItem = (item) => item.name === currName)[0]
        
        let name = modelOptions.name
        let price = modelOptions.price
        let thumbImg = modelOptions.thumbImg
        let cssClass = modelOptions.cssClass
        
        sunglassesNew = {
            model: {
                name: name,
                price: price,
                thumbImg: sunglassesNew.model.thumbImg, //***
                cssClass: cssClass,
            },
            lenses: {
                color: sunglassesNew.lenses.color,
                price: sunglassesNew.lenses.price,
                cssClass: sunglassesNew.lenses.cssClass,
            },
            frame: {
                color: sunglassesNew.frame.color,
                price: sunglassesNew.frame.price,
                cssClass: sunglassesNew.frame.cssClass,
            }     
        }
       
        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
    
    // update colors for frames / lenses
    if (Array.from(clickedItem.classList).includes("product-color-swatch")) {
        let currColor = clickedItem.dataset.color
        
        // check nearest parent div
            //lenses
        if (clickedItem.closest("div").classList[0] === "product-lenses") {
            let colorOptions = sunglassesOptions.lenses.filter(returnColor = (item) => item.color === currColor)[0]
            
            let color = colorOptions.color
            let price = colorOptions.price
            let cssClass = colorOptions.cssClass
        
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                },
                frame: {
                    color: sunglassesNew.frame.color,
                    price: sunglassesNew.frame.price,
                    cssClass: sunglassesNew.frame.cssClass,
                }     
            }
        } 
        
        //frames
        else {
            let colorOptions = sunglassesOptions.frames
            .filter(returnColor = (item) => item.color === currColor)[0]
            
            let color = colorOptions.color
            let price = colorOptions.price
            let cssClass = colorOptions.cssClass
            
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: sunglassesNew.lenses.color,
                    price: sunglassesNew.lenses.price,
                    cssClass: sunglassesNew.lenses.cssClass,
                },
                frame: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                }     
            }
        }

        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
})

render(sunglasses)