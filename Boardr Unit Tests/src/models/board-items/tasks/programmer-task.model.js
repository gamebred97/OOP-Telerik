/* eslint-disable */
import { programmerLevel } from "../../../common/programmer-level.enum.js";
import { Employee } from "../../employee.model.js";
import { Task } from "../task.model.js";


export class ProgrammerTask extends Task{

    #programmerLevel;

    constructor(name, dueDate, programmerLevelValue ,assignee) {

        super(name, dueDate, assignee);

        if(!Object.values(programmerLevel).includes(programmerLevelValue)) throw new Error('Invalid programmer level');
        this.#programmerLevel = programmerLevelValue;
    }

    get programmerLevel(){
        return this.#programmerLevel;
    }
}