/* eslint-disable */
import { Athlete } from "./athletes.js";
//import { Map } from "./map.js";

export class Sprinter extends Athlete{

    #personalRecords;

    constructor(firstname, lastname, country, personalRec){

        super(firstname, lastname, country);

        //!Throws error;
        if(!(personalRec instanceof Map)) throw new Error('Invalid personal record');
        this.#personalRecords = personalRec;
    }

    get personalRecords(){
        return this.#personalRecords;
    }

    print(){
        return `SPRINTER: ${super.print()}\nPERSONAL RECORDS:\n${Array.from(this.#personalRecords).map(([key, value]) => `${key}m: ${value}s`).join('\n')}\n`
    }
}

// const sprinter = new Sprinter('Asaffa', 'Powell', 'Jamaica', new Map([['100', 9.72], ['200', 19.9]]))
// console.log(sprinter.print());
