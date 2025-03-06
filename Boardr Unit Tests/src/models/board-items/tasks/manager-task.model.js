/* eslint-disable */
import { Task } from "../task.model.js";
import { projectType } from "../../../common/project-type.enum.js";
import { Employee } from "../../employee.model.js";

export class ManagerTask extends Task{

    #projectType;
    constructor(name, dueDate, projectTypeValue ,assignee) {

        super(name, dueDate, assignee);

        if(!Object.values(projectType).includes(projectTypeValue)) throw new Error('Invalid project type!');
        
        this.#projectType = projectTypeValue;
    }

    get projectType(){
        return this.#projectType;
    }
}