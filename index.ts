import { Model, Lenses, Frame, Sunglasses } from "./sunglasses.ts"
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
        new Frame("charcoal", 0, "color-charcoal"),
        new Frame("tan", 0, "color-tan"),
        new Frame("rose", 0, "color-rose")
    ]
}

let sunglasses = new Sunglasses(
    new Model("aviator", 300, "./images/thumb-aviator.png", "frame-aviator"), 
    new Lenses("sepia", 20, "color-sepia"), 
    new Frame("charcoal", 0, "color-charcoal")
)

let productDetailsEl: HTMLElement | null = document.getElementById("productDetails")
let productImage: HTMLElement | null = document.getElementById("productImage")
let productFrames: HTMLElement | null = document.getElementsByClassName("product-image_frame")[0] as HTMLElement
let productLenses: HTMLElement | null = document.getElementsByClassName("product-image_lenses")[0] as HTMLElement

let sunglassesNew: Sunglasses = sunglasses

const setSunglasses = (sunglassesNew = sunglasses) =>  sunglassesNew 

function render(sunglassesNew: Sunglasses) {
    console.log(sunglassesOptions)

    let {model, lenses, frame} = sunglassesNew
    sunglassesNew = {
        model: {
            name: model.name,
            price: model.price,
            thumbImg: model.thumbImg,
            cssClass: model.cssClass,
        },
        lenses: {
            color: lenses.color,
            price: lenses.price,
            cssClass: lenses.cssClass,
        },
        frame: {
            color: frame.color,
            price: frame.price,
            cssClass: frame.cssClass,
        }     
    }
   
    
    let price: string = `$ ${model.price + lenses.price + frame.price}`
    
    if(productDetailsEl === null) {
        console.error("Element with id: productDetails not found")
    }else{
        productDetailsEl.innerHTML = 
        `<h1> ${model.name} </h1>
        <p>Custom: ${lenses.color} lenses, ${frame.color} frames</p>
        <p>${price} </p>`
    }

    if(productImage === null) {
        console.error("Element with id: productImage not found")
    } else {
        let currClass = productImage.classList[1]
        productImage.classList.replace(currClass, model.cssClass)
    }
    
    if(productFrames === null) {
        console.error("Element with class: product-image_frame not found")
    } else {
        let currFramesClass = productFrames.classList[1]
        if(currFramesClass === null) {
            console.error("No class found")
        } else {
            productFrames.classList.replace(currFramesClass, frame.cssClass)
        }
    }
    
    if(productLenses === null) {
        console.error("Element with class: product-image_lenses not found")
    } else { 
        let currLensesClass = productLenses.classList[1]
        if(currLensesClass === undefined) {
            console.error("No class found")
        } else {
            productLenses.classList.replace(currLensesClass, lenses.cssClass)
        }
        
    }
    
    
    
    
}

//Highlight current selection
function addHighlight(clickedItem: HTMLElement) {

    if (Array.from(clickedItem.classList).includes("product-thumb")) {
        let thumbs = document.getElementsByClassName("product-thumb")
        for(let thumb of thumbs){
            thumb.classList.remove("selected")
        }
    } else if (Array.from(clickedItem.classList).includes("product-color-swatch")) {
        let swatches = clickedItem.closest("ul")?.querySelectorAll("button")
        
        if(swatches) {
            for (let swatch of swatches) {
                swatch.classList.remove("selected")
            }
        }
    }
    clickedItem.classList.add("selected") 
}


document.body.addEventListener("click", function(event) {
    let clickedItem: HTMLElement | null = event.target as HTMLElement
    let {model, lenses, frame} = sunglassesNew
    console.log(sunglassesNew)
    //if sunglassesNew defined take variable from updates 
        //else use original sunglasses object
    if (!sunglassesNew) {
        sunglassesNew = sunglasses
    }
    
    // update model
    if(clickedItem === null) {

    } else if (Array.from(clickedItem.classList).includes("product-thumb")) {

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
                color: lenses.color,
                price: lenses.price,
                cssClass: lenses.cssClass,
            },
            frame: {
                color: frame.color,
                price: frame.price,
                cssClass: frame.cssClass,
            }     
        }
       
        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
    
    // update colors for frames / lenses
    if(clickedItem === null) {

    } else if (Array.from(clickedItem.classList).includes("product-color-swatch")) {
        let currColor = clickedItem.dataset.color
        
        // check nearest parent div
            //lenses
        if (clickedItem.closest("div")?.classList[0] === "product-lenses") {
            let colorOptions = sunglassesOptions.lenses.filter((item) => item.color === currColor)[0]
            
            let color = colorOptions.color
            let price = colorOptions.price
            let cssClass = colorOptions.cssClass
        
            sunglassesNew = {
                model: {
                    name: model.name,
                    price: model.price,
                    thumbImg: model.thumbImg,
                    cssClass: model.cssClass,
                },
                lenses: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                },
                frame: {
                    color: frame.color,
                    price: frame.price,
                    cssClass: frame.cssClass,
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
                    name: model.name,
                    price: model.price,
                    thumbImg: model.thumbImg,
                    cssClass: model.cssClass,
                },
                lenses: {
                    color: lenses.color,
                    price: lenses.price,
                    cssClass: lenses.cssClass,
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