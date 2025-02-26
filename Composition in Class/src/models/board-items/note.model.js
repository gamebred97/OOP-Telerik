/* eslint-disable */
import { BoardItem } from './board-item.model.js';
import { noteImportance } from '../../common/note-importance.enum.js';
import { noteStatus } from '../../common/note-status.enum.js';

export class Note extends BoardItem{

    static MIN_LENGTH_DESCRIPTION = 6;
    static MAX_LENGTH_DESCRIPTION = 60;

    #description;
    #importance;

    constructor(name , description, importance = noteImportance.LOW) {

        super(name, noteStatus.CREATED);
        this.description = description;
        this.#importance = importance;
    }

    get importance(){
        return this.#importance;
    }

    get description() {
        return this.#description
    }
    
    set description(value) {    
        this.#description = this.validateString(value, Note.MIN_LENGTH_DESCRIPTION, Note.MAX_LENGTH_DESCRIPTION);
        
    }

  
    reset(){
        super.reset(noteStatus.CREATED)
    }

    advance(){
        super.advance(noteStatus.PENDING)
    }

    complete(){
        super.complete(noteStatus.APPROVED)
    }

    toString(){
        return `* Note *\n` + `${super.toString()}\n` +
        `Description: ${this.#description}`
    }
}

