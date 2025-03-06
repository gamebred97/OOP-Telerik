/* eslint-disable */

export class Employee {


    static MIN_NAME = 5;
    static MAX_NAME = 40;
    static #idCounter = 0;

    
    #name;
    #id;

    constructor(name){
        this.#name = this._validateName(name, Employee.MIN_NAME, Employee.MAX_NAME)
        this.#id = Employee.generateID();
    }

    get name() {
        return this.#name;
    }

    get id(){
        return this.#id
    }

    static generateID(){
        return ++Employee.#idCounter;
    }

    _validateName(value,min,max){

        if(!value || value.length < min || value.length > max) throw new Error('Invalid name');

        return value;
    }
}
