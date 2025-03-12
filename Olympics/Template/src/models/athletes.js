/* eslint-disable */
export class Athlete {

    static MIN_NAME_LENGTH = 2;
    static MAX_NAME_LENGTH = 20;

    #firstname;
    #lastname;
    #country;

    constructor(firstname, lastname, country){

        if(!firstname || typeof firstname !== 'string' || firstname.length < Athlete.MIN_NAME_LENGTH || firstname.length > Athlete.MAX_NAME_LENGTH){
            throw new Error('Invalid first name');
        }

        if(!lastname || typeof lastname !== 'string' || lastname.length < Athlete.MIN_NAME_LENGTH || lastname.length > Athlete.MAX_NAME_LENGTH){
            throw new Error('Invalid last name');
        }

        if(!country || typeof country !== 'string' || country.length < Athlete.MIN_NAME_LENGTH || country.length > Athlete.MAX_NAME_LENGTH){
            throw new Error('Invalid country name');
        }

        this.#firstname = firstname;
        this.#lastname = lastname;
        this.#country = country;

    }

    get firstname() {
        return this.#firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    get country() {
        return this.#country;
    }
    
    print(){
        return `${this.#firstname} ${this.lastname} from ${this.#country}`;
    }
}