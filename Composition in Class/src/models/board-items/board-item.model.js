/* eslint-disable */
export class BoardItem {

    static NAME_MIN_LENGTH = 6;
    static NAME_MAX_LENGTH = 20;
    #name;
    #status;
   

    constructor(name, status){
        this.name = name
        this.#status = status;
    }

    get name(){
        return this.#name;
    }

    set name(value) {
       this.#name = this.validateString(value, BoardItem.NAME_MIN_LENGTH, BoardItem.NAME_MAX_LENGTH)

    }
    
    get status(){
        return this.#status
    }
  
    validateString(value, min , max){
        if (!value) {
            throw new Error('Name not provided!');
          }
      
          if (value.length < min || value.length > max) {
            throw new Error('Name length not within constraints!');
          }
      
          return value;
    }

      reset(status) {
        this.#status = status;
      }
    
      advance(status) {
        this.#status = status;
      }
    
      complete(status) {
        this.#status = status;
      }
    
      toString() {
        return `Name: ${this.#name}\nStatus: ${this.#status}`;
      }
}

