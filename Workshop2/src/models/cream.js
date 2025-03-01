/* eslint-disable */
import { Product } from './product.js';
import { scent } from './scent.js';
import { Gender } from './gender.js';

export class Cream extends Product {

    static MIN_LENGTH_CREAM = 3;
    static MAX_LENGTH_CREAM = 15;

    #scent;

    constructor(name, brand, price, gender, scent){
    
       super(name, brand, price, gender)
       this.#scent = this.#validateScent(scent)

    }

   get scent() {
    return this.#scent;
   }

    #validateScent(value) {
        if(!Object.values(scent).includes(value)) throw new Error('Invalid scent')
        
        return value;
    }

    additionalInfo(){
        return `Scent: ${this.#scent}`
    }

}