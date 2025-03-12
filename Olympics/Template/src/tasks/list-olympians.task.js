/* eslint-disable */
import { OlympiansFactory } from '../factories/olympians.factory.js';
import { OlympicsCommittee } from '../providers/olympics-committee.js';

export class ListOlympiansTask {
  #defaultKey = "firstname";
  #defaultOrder = "asc";
  #orderDirection = {
    asc: 1,
    desc: -1,
  };

  #factory = OlympiansFactory;
  #committee = OlympicsCommittee;

  run(key = this.#defaultKey, order = this.#defaultOrder) {
    if (OlympicsCommittee.olympians.length === 0) {
      return "No olympians added!";
    }

    
    if (!Object.keys(this.#orderDirection).includes(order)) {
      throw new Error("Invalid order!");
    }

    
    const direction = this.#orderDirection[order];

    const sortedOlympians = OlympicsCommittee.olympians.sort((a, b) => {
      if (a[key] && b[key]) {
        const comparison = a[key].localeCompare(b[key]);
        return comparison * direction;
      }
      return 0;
    });

    
    let string = "";
    sortedOlympians.forEach((olympian) => {
      string += olympian.print() + '\n'; 
    });
    
    return string;
  }
}