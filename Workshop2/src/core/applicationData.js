/* eslint-disable */
import { ShoppingCart } from "../models/shoppingCart.js";
import { Category } from "../models/category.js";
import { Product } from "../models/product.js";
import { Shampoo } from "../models/shampoo.js";
import { Toothpaste } from "../models/toothpaste.js";
import { Gender } from "../models/gender.js";
import { Usage } from "../models/usage.js"

export class ApplicationData {
    #products = [];
    #categories = []
    #shoppingCart = new ShoppingCart();

    /**
    * @type {Product[]}
    */
    get products() {
        return Object.freeze([...this.#products]);
    }

    /**
    * @type {Category[]}
    */
    get categories() {
        return Object.freeze([...this.#categories]);
    }

    /**
    * @type {ShoppingCart}
    */
    get shoppingCart() {
        return this.#shoppingCart;
    }

    /**
    * @param {string} name
    *
    * @returns {Product}
    */
    findProductByName(name) {
        for (const product of this.#products) {
            if (product.name === name) {
                return product;
            }
        }

        throw new Error(`Product ${name} does not exist!`);
    }

    /**
    * @param {string} name
    *
    * @returns {Category}
    */
    findCategoryByName(name) {
        for (const category of this.#categories) {
            if (category.name === name) {
                return category;
            }
        }

        throw new Error(`Category ${name} does not exist!`);
    }

    /**
    * @param {string} name
    */
    createCategory(name) {
        if (this.categoryExists(name)) {
            throw new Error(`Category ${name} already exists!`);
        }

        const category = new Category(name);
        this.#categories.push(category);
    }

    /**
    * @param {string} name
    * @param {string} brand
    * @param {number} price
    * @param {Gender} gender
    * @param {Usage} usage
    * @param {number} milliliters
    *
    * @returns {Shampoo}
    */
    createShampoo(name, brand, price, gender, usage, milliliters) {
       
        
            const shampoo = new Shampoo(name, brand, price, gender, usage, milliliters);

            this.#products.push(shampoo);
        
    }

    /**
    * @param {string} name
    * @param {string} brand
    * @param {number} price
    * @param {Gender} gender
    * @param {string} ingredients
    *
    * @returns {Toothpaste}
    */
    createToothpaste(name, brand, price, gender, ingredients) {
       
            const products = new Toothpaste(name, brand, price, gender, ingredients);

            this.#products.push(products);
        
    }

    /**
    * @param {string} name
    * 
    * @returns {boolean}
    */
    categoryExists(name) {
        return this.#categories.some(c => c.name === name);
    }

    /**
    * @param {string} name
    * 
    * @returns {boolean}
    */
    productExists(name) {
        return this.#products.some(p => p.name === name);
    }
}
