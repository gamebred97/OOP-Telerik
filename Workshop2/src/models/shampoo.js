/* eslint-disable */
import { Product } from './product.js';
import { Usage } from './usage.js';
import { Gender } from './gender.js';

export class Shampoo extends Product {
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {number} milliliters
  * @param {Usage} usage
  */

  static MIN_PRICE_MILLILITERS = 0;

  #milliliters;
  #usage;

  constructor(name, brand, price, gender, milliliters, usage) {
    
    super(name ,brand, price, gender);
    this.#milliliters = this.#validateMilliliters(milliliters);
    this.#usage = this.#validateUsage(usage);
    
  }

  get milliliters(){
    return this.#milliliters;
  }

  get usage(){
    return this.#usage;
  }

 

  #validateMilliliters(milliliters){
    if (milliliters < Shampoo.MIN_PRICE_MILLILITERS) {
      throw new Error(`Product price must be greater than ${Shampoo.MIN_PRICE_MILLILITERS}`);
    }
    return milliliters;
  }


  #validateUsage(usg){
    if(!Object.values(Usage).includes(usg)) throw new Error('Invalid usage')
    
    return usg;
  }

  additionalInfo() {
    return `#Milliliters: ${this.#milliliters}\n#Usage: ${this.#usage}`
  }

  print(){
    return `#${super.name} ${super.brand}\n`+
  `#Price: $${super.price}\n`+
  `#Gender: ${Gender[super.gender]}\n`+
  `${this.additionalInfo()}\n===`
  }
}
