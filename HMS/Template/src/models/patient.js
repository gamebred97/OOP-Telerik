/* eslint-disable */
import { User } from './user.js';
import { gender } from '../common/gender.enum.js';

export class Patient extends User {

    #isInsured;

    constructor(firstName, lastName, genderr, email, isInsured) {

        super(firstName, lastName, genderr, email);

        isInsured === true ? true : false;
        this.#isInsured = isInsured;
    }

    get isInsured(){
        return this.#isInsured;
    }

    toString(){
        return `${super.toString()}\nHas insurance: ${this.isInsured ? 'Yes' : 'No'}`
    }
}




