/* eslint-disable */
import { Product } from './product.js';
import { Gender } from './gender.js';

export class Toothpaste extends Product {
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {string} ingredients
  */

  #ingredients;

  constructor(name, brand, price, gender, ingredients) {
   
    super(name, brand, price, gender)

    if (!ingredients || ingredients === '') throw new Error('Invalid ingredient!')

    this.#ingredients = this.#validateIngredients(ingredients);
  }

  get ingredients(){
    return this.#ingredients;
  }

  #validateIngredients(ingredients){
    if (Array.isArray(ingredients)) {
      return ingredients.map(ing => ing.trim()).join(', ');
    } else if (typeof ingredients === 'string') {
      return ingredients.split(',').map(ing => ing.trim()).join(', ');
    } 
  }

  additionalInfo(){
    return `Ingredients: ${this.#ingredients}`
  }

  print(){
    return `#${super.name} ${super.brand}\n`+
  `#Price: $${super.price}\n`+
  `#Gender: ${Gender[super.gender]}\n`+
  `${this.additionalInfo()}\n===`
  }
}