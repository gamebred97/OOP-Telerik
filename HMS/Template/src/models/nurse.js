/* eslint-disable */
import { Staff } from './staff.js';
import { gender } from '../common/gender.enum.js';

export class Nurse extends Staff{

    #departmentId;

    constructor (firstName, lastName, gender, email, yearsOfExperience, salary, description,departmentId) {
        super(firstName, lastName, gender, email, yearsOfExperience, salary, description);
        
        if(typeof departmentId !== 'number' || departmentId < 0) throw new Error('Invalid department ID');
        this.#departmentId = departmentId;
    }

    get departmentId(){
        return this.#departmentId;
    }

    toString(){
        return `${this.firstName} ${this.lastName}\nId: ${this.id}\nEmail: ${this.email}\nYears Of Experience: ${this.yearsOfExperience}\nSalary: ${this.salary}\nDescription ${this.description}\nDepartment ID: ${this.#departmentId}`
    }
}

