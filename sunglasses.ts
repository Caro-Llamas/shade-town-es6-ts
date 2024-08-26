
export class Model {
    name: string;
    price: number;
    thumbImg: string;
    cssClass: string;

    constructor(name: string = "", price: number = 0, thumbImg: string = "", cssClass: string = "") {
        this.name = name;
        this.price = price;
        this.thumbImg = thumbImg;
        this.cssClass = cssClass;
    }
}

export class Lenses {
    color: string;
    price:number;
    cssClass: string;

    constructor(color: string = "", price: number = 0, cssClass: string = "") {
        this.color = color;
        this.price = price;
        this.cssClass = cssClass;
    }

}

export class Frame {
    color: string;
    price: number;
    cssClass: string;

    constructor(color: string = "", price: number = 0, cssClass: string = "") {
        this.color = color;
        this.price = price;
        this.cssClass = cssClass;
    }
}

export class Sunglasses {
    model: Model;
    lenses: Lenses;
    frame: Frame;
    
    constructor(model = new Model(), lenses = new Lenses(), frame = new Frame()){
        this.model = new Model(model.name, model.price, model.thumbImg, model.cssClass);
        this.lenses = new Lenses(lenses.color, lenses.price, lenses.cssClass);
        this.frame = new Frame(frame.color, frame.price, frame.cssClass);
    }
}