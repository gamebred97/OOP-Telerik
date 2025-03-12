/* eslint-disable */
import { boxingCategory } from '../common/boxing-category.enum.js';
import { Athlete } from './athletes.js';

export class Boxer extends Athlete{

    static MIN_WINS_LOSS = 0;
    static MAX_WINS_LOSS = 100;

    #category;
    #wins;
    #losses;

    constructor(firstname, lastname, country, category, wins, losses){
        super(firstname, lastname, country);

        if (!Object.values(boxingCategory).includes(category)) throw new Error('Invalid category');

        if (typeof wins !== 'number' || wins < Boxer.MIN_WINS_LOSS || wins > Boxer.MAX_WINS_LOSS){
            throw new Error('Invalid wins');
        }

        if (typeof losses !== 'number' || losses < Boxer.MIN_WINS_LOSS || losses > Boxer.MAX_WINS_LOSS){
            throw new Error('Invalid losses');
        }

        this.#category = category;
        this.#wins = wins;
        this.#losses = losses
    }

    get category() {
        return this.#category;
    }

    get wins() {
        return this.#wins;
    }

    get losses() {
        return this.#losses
    }

    additionalInfo(){
        return `Category: ${this.#category}\nWins: ${this.#wins}\nLosses: ${this.#losses}`
    }

    print(){
        return `BOXER: ${super.print()}\n${this.additionalInfo()}\n`
    }
    
}

// const boxer = new Boxer('Krasi' , 'Kostadinov', 'Bulgaria' , boxingCategory.Heavyweight, 25, 1)
// console.log(boxer.print());
