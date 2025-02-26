/* eslint-disable */
import { BoardItem } from './board-item.model.js';
import { issueStatus } from '../../common/issue-status.enum.js';

export class Issue extends BoardItem{

    static MIN_LENGTH_DESCRIPTION = 10;
    static MAX_LENGTH_DESCRIPTION = 40;
    #createdOn;
    #resolvedOn;
    #description;

    constructor(name ,description){
        super(name, issueStatus.RAISED);
        this.description = description;
        this.#createdOn = new Date();
        this.#resolvedOn = null;
    }

    get createdOn(){
        return this.#createdOn;
    }

    get resolvedOn(){
        return this.#resolvedOn;
    }


    get description() {
        return this.#description
    }
    
    set description(value) {    
        this.#description = super.validateString(value, Issue.MIN_LENGTH_DESCRIPTION, Issue.MAX_LENGTH_DESCRIPTION);
        
    }


    reset(){
       super.reset(issueStatus.RAISED);
       this.#resolvedOn = null;

    }

    advance(){
        if (this.status === issueStatus.RAISED) {
            super.advance(issueStatus.IN_REVIEW);
        } else {
            throw new Error('Cannot advance from the current status');
        }
        
    }

    complete(){
        if (this.status === issueStatus.RAISED) {
            super.advance(issueStatus.RESOLVED);
            this.#resolvedOn = new Date();
           
        } else {
            throw new Error('Cannot complete from the current status');
        }
    }

    toString(){

        return `* Issue *\n` +
        `${super.toString()}\n` +
        `Description: ${this.description}\n` +
        `Created on: ${this.#createdOn.toLocaleString()}\n` +
        `Resolved on: ${this.#resolvedOn ? this.#resolvedOn.toLocaleString() : 'Not yet resolved'}`;

        
    }

}