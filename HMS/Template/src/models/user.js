/* eslint-disable */
import { gender } from '../common/gender.enum.js';

export class User {

  static #idCounter = 0
  #id;
  #firstName;
  #lastName;
  #gender;
  #email;

  constructor(firstName, lastName, genderr, email) {

      this.#id = ++User.#idCounter;

      if (typeof firstName !== 'string' || firstName.length < 2 || firstName.length > 40) throw new Error('Invalid first name');
      this.#firstName = firstName;

      if (typeof lastName !== 'string' || lastName.length < 2 || lastName.length > 50) throw new Error('Invalid first name');
      this.#lastName = lastName;

      if (!Object.values(gender).includes(genderr)) throw new Error('Invalid gender')
      this.#gender = gender;

      if (!email.includes('@') || email.length < 3 || email.length > 120) throw new Error('Invalid email');

      this.#email = email;    
  }

  get id() {
      return this.#id;
  }

  get firstName(){
    return this.#firstName;
  }



  get lastName() {
    return this.#lastName;
  }

 

  get gender() {
    return this.#gender;
  }


  get email() {
    return this.#email;
  }


  toString() {

    //throw new Error('Missing implementation!');
    return `${this.firstName} ${this.lastName}\nId: ${this.id}\nEmail: ${this.email}`
  }
}


