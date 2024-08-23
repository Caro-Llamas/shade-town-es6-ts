
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

export class Frame {
    constructor(color = "", price = 0, cssClass = "") {
        this.color = color;
        this.price = price;
        this.cssClass = cssClass;
    }
}

export class Sunglasses {
    constructor(model = new Model(), lenses = new Lenses(), frame = new Frame()){
        this.model = new Model(model.name, model.price, model.thumbImg, model.cssClass);
        this.lenses = new Lenses(lenses.color, lenses.price, lenses.cssClass);
        this.frame = new Frame(frame.color, frame.price, frame.cssClass);
    }
}