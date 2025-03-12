/* eslint-disable */
import { Boxer } from '../models/boxer.model.js';
import { Sprinter } from '../models/sprinter.model.js';

export class OlympiansFactory {

  static #boxers = [];
  static #sprinters = [];

  static get boxers(){
    return this.#boxers.slice();
  }

  static get sprinters(){
    return this.#sprinters.slice();
  }

  static createBoxer(firstname, lastname, country, category, wins, losses) {
    
    if(this.boxerExists(firstname)) throw new Error(`Boxer ${firstname} already exists`);

    const boxer = new Boxer(firstname, lastname, country, category, wins, losses);
    
    this.#boxers.push(boxer)
   return boxer
  }

  static createSprinter(firstname, lastname, country, personalRecord) {
    
    if(this.sprinterExists(firstname)) throw new Error(`Sprinter ${firstname} already exists`);

    const sprinter = new Sprinter(firstname, lastname, country, personalRecord);
    this.#sprinters.push(sprinter)
    return sprinter
  }

  static boxerExists(name){
    return this.#boxers.some(b => b.firstname === name);
  }

  static sprinterExists(name){
    return this.#sprinters.some(s => s.firstname === name);
  }

}
