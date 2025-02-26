/* eslint-disable */
import { Staff } from './staff.js';
import { gender } from '../common/gender.enum.js';

export class Doctor extends Staff{

  #specialization;

  constructor (firstName, lastName, gender, email, yearsOfExperience, salary, description,specialization) {
    super(firstName, lastName, gender, email, yearsOfExperience, salary, description);
    
    if (typeof specialization !== 'string' || specialization.length < 2 || specialization.length > 25) throw new Error('Invalid specialization');
    this.#specialization = specialization;
  }


  get specialization() {
    return this.#specialization;
  }

  toString(){
    return `${this.firstName} ${this.lastName}\nId: ${this.id}\nEmail: ${this.email}\nYears Of Experience: ${this.yearsOfExperience}\nSalary: ${this.salary}\nDescription ${this.description}\nSpecialization: ${this.specialization}`
}

}
