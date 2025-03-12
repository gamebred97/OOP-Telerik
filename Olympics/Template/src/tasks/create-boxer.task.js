/* eslint-disable */
import { OlympiansFactory } from '../factories/olympians.factory.js';
import { OlympicsCommittee } from '../providers/olympics-committee.js';

export class CreateBoxerTask {

  #factory = OlympiansFactory;
  #committee = OlympicsCommittee;

  run(firstname, lastname, country, category, wins, losses) {
    const boxer = this.#factory.createBoxer(firstname, lastname, country, category, wins, losses);
    this.#committee.olympians.push(boxer);
  
    return 'Boxer created';
  }

}
