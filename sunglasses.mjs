import { Model } from "./model.mjs";
import { Lenses } from "./lenses.mjs";
import { Frames } from "./frames.mjs";

export class Sunglasses {
    contructor(model, lenses, frames){
        this.model = new Model(model.name, model.price, model.thumbImg, model.cssClass);
        this.lenses = new Lenses(lenses.color, lenses.price, lenses.cssClass);
        this.frames = new Frames(frames.color, frames.price, frames.cssClass);
    }

    // get model() {
    //     return this.model;
    // }

    // get lenses() {
    //     return this.lenses;
    // }

    // get frames() {
    //     return this.frames;
    // }

    // set model(model) {
    //     this.model = new Model(model.name, model.price, model.thumbImg, model.cssClass);
    // }

    // set lenses(lenses) {
    //     this.lenses = new Lenses(lenses.color, lenses.price, lenses.cssClass);
    // }

    // set frames(frames) {
    //     this.frames = new Frames(frames.color, frames.price, frames.cssClass);
    // }
}

