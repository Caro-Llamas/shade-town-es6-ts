import { Model, Lenses, Frame, Sunglasses } from "./sunglasses.js"
//To do: create a sunglasses class with default values 

let sunglassesOptions = {
    models: [
        {
            name: "aviator",
            price: 300,
            thumbImg: "thumb-aviator.png",
            cssClass: "frame-aviator",
        },
        {      
            name: "half-frame",
            price: 200,
            thumbImg: "thumb-half-frame.png",
            cssClass: "frame-half",
        },
        {
            name: "round",  
            price: 250,
            thumbImg: "thumb-round.png",
            cssClass: "frame-round",
        },
        {  
            name: "wayfarer",
            price: 250,
            thumbImg: "thumb-wayfarer.png",
            cssClass: "frame-wayfarer",
        }],
    lenses: [
        {
            color: "sepia",
            price: 20,
            cssClass: "color-sepia",
        },
        {
            color: "rainbow",
            price: 50,
            cssClass: "color-rainbow",
        },
        {
            color: "iridescent",
            price: 30,
            cssClass: "color-iridescent",
        }],
    frames: [
        {
            color: "charcoal",
            price: 0,
            cssClass: "color-charcoal",
        },
        {
            color: "tan",
            price: 0,
            cssClass: "color-tan",
        },
        {
            color: "rose",
            price: 0,
            cssClass: "color-rose",
        },
    ],
}

let sunglasses = new Sunglasses(
    new Model("aviator", 300, "./images/thumb-aviator.png", "frame-aviator"), 
    new Lenses("sepia", 20, "color-sepia"), 
    new Frame("charcoal", 0, "color-charcoal")
)


// let sunglasses = {
//     model: {
//         name: "aviator",
//         price: 300,
//         thumbImg: "./images/thumb-aviator.png",
//         cssClass: "frame-aviator",
//     },
//     lenses: {
//         color: "sepia",
//         price: 20,
//         cssClass: "color-sepia",
//     },
//     frame: {
//         color: "charcoal",
//         price: 0,
//         cssClass: "color-charcoal",
//     }     
// }

console.log(sunglasses)
let productDetailsEl = document.getElementById("productDetails")
let productImage = document.getElementById("productImage")
let productFrames = document.getElementsByClassName("product-image_frame")[0]
let productLenses = document.getElementsByClassName("product-image_lenses")[0]

let sunglassesNew = ""

const setSunglasses = (sunglassesNew = sunglasses) =>  sunglassesNew 

function render(sunglassesNew) {
    console.log(sunglassesNew)
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

        let modelOptions = sunglassesOptions.models.filter((item) => item.name === currName)[0]
        
        let name = modelOptions.name
        let price = modelOptions.price
        let thumbImg = modelOptions.thumbImg
        let cssClass = modelOptions.cssClass
        
        sunglassesNew = {
            model: {
                name: name,
                price: price,
                thumbImg: thumbImg, 
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
            let colorOptions = sunglassesOptions.lenses.filter((item) => item.color === currColor)[0]
            
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
            .filter((item) => item.color === currColor)[0]
            
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