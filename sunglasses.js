
export class Model {
    constructor(name = "", price = 0, thumbImg = "", cssClass = "") {
        this.name = name;
        this.price = price;
        this.thumbImg = thumbImg;
        this.cssClass = cssClass;
    }
}

export class Lenses {
    constructor(color = "", price = 0, cssClass = "") {
        this.color = color;
        this.price = price;
        this.cssClass = cssClass;
    }

}

export class Frames {
    constructor(color = "", price = 0, cssClass = "") {
        this.color = color;
        this.price = price;
        this.cssClass = cssClass;
    }
}

export class Sunglasses {
    contructor(model = new Model(), lenses = new Lenses(), frames = new Frames()){
        this.model = new Model(model.name, model.price, model.thumbImg, model.cssClass);
        this.lenses = new Lenses(lenses.color, lenses.price, lenses.cssClass);
        this.frames = new Frames(frames.color, frames.price, frames.cssClass);
    }
}