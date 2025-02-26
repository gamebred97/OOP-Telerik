/* eslint-disable */
import { User } from './user.js';
import { gender } from '../common/gender.enum.js';

export class Staff extends User {

    #yearsOfExperience;
    #salary;
    #description;
    

    constructor(firstName, lastName, genderr, email, yearsOfExperience, salary, description) {

        super(firstName, lastName, genderr, email);
       
        if(typeof yearsOfExperience !== 'number'  || yearsOfExperience < 0) throw new Error('Invalid years of experience');
        this.#yearsOfExperience = yearsOfExperience;

        if(typeof salary !== 'number' || salary < 0) throw new Error('Invalid years of experience');
        this.#salary = salary;

        if (typeof description !== 'string' || description.length < 2 || description.length > 100) throw new Error('Invalid staff title');
        this.#description = description;
        
    }

    get yearsOfExperience(){
        return this.#yearsOfExperience;
    }

    get salary() {
        return this.#salary;
    }

    get description() {
        return this.#description;
    }

    toString(){
        return `${this.firstName} ${this.lastName}\nId: ${this.id}\nEmail: ${this.email}\nYears Of Experience: ${this.yearsOfExperience}\nSalary: ${this.salary}\nDescription ${this.description}`
    }

}
