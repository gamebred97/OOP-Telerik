/* eslint-disable */
import { OlympiansFactory } from '../factories/olympians.factory.js';
import { OlympicsCommittee } from '../providers/olympics-committee.js';

export class CreateSprinterTask {

  #factory = OlympiansFactory;
  #committee = OlympicsCommittee;

  run(firstname, lastname, country, personalRec) {
    const sprinter = this.#factory.createSprinter(firstname, lastname, country, personalRec);
    this.#committee.olympians.push(sprinter)
  

    return 'Sprinter created';
  }

}
