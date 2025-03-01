/* eslint-disable */
import { Gender } from "./gender.js";

export class Product {

  static #minNameLength = 3;
  static #maxNameLength = 10;
  static #minBrandLength = 2;
  static #maxBrandLength = 10;
  static #minPrice = 0;
  #name;
  #brand;
  #price;
  #gender;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  */
  constructor(name, brand, price, gender) {
    
    this.#name = this.validateString(name,Product.#minNameLength , Product.#maxNameLength);
    this.#brand = this.validateString(brand, Product.#minBrandLength, Product.#maxBrandLength);
    this.#price = this.validatePrice(price,Product.#minPrice);
    this.#gender = this.validateGender(gender);
  }

  /**
  * @type {string}
  */
  get name() {
    return this.#name;
  }

  /**
  * @type {string}
  */
  get brand() {
    return this.#brand;
  }

  /**
  * @type {number}
  */
  get price() {
    return this.#price;
  }

  /**
  * @type {Gender}
  */
  get gender() {
    return this.#gender;
  }


  validateString(value, min ,max){
    if (!value) {
        throw new Error("Invalid input!");
      }

      if (value.length < min || value.length > max) {
        throw new Error(`Length must be between ${min} and ${max}`);
      }
      return value;
  }

  validateGender(value){
    if(!Object.values(Gender).includes(value)) throw new Error('Invalid gender')
        
      return value;
  }

  validatePrice(value, min){
    if (value < min) {
      throw new Error(`Product price must be greater than ${min}`);
    }
    return value;

  }



  /**
  * @returns {string}
  */
  print() {
    const productInfo = [
      `#${this.#name} ${this.#brand}`,
      ` #Price: $${this.#price}`,
      ` #Gender: ${Gender[this.#gender]}`,
      `${this.additionalInfo()}`,
      " ==="
    ];

    return productInfo.join("\r\n");
  }

  /**
  * @abstract
  *
  * @returns {string}
  */
  additionalInfo() {
    throw new Error("Not implemented! Implementation must be provided by the classes extending Product!");
  }
}