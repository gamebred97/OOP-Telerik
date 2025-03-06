/* eslint-disable */
import { taskStatus } from '../../common/task-status.enum.js';
import { BoardItem } from './board-item.model.js';
import { Employee } from '../employee.model.js';

export class Task extends BoardItem {

  #dueDate;
  #status;
  #assignee;
 

  constructor(name, dueDate, assignee = null) {
  
    super(name);
    
    if (new.target !== Task && !(assignee instanceof Employee)) {
      throw new Error('Assignee can only be an Employee');
    }
    
    this.dueDate = dueDate;
    this.#status = taskStatus.TODO;
    this.#assignee = assignee;
  }

  get assignee() {
    return this.#assignee;
  }


  get status() {
    return this.#status;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(value) {
    if (!value) {
      throw new Error('Due date not provided!');
    }

    if (value.valueOf() < Date.now().valueOf()) {
      throw new Error('Can\'t set due date to a date in the past!');
    }

    this.#dueDate = value;
  }

  reset() {
    this.#status = taskStatus.TODO;
  }

  advance() {
    this.#status = taskStatus.IN_PROGRESS;
  }

  complete() {
    this.#status = taskStatus.DONE;
  }

  toString() {
    return `${super.toString()}\n` + 
           `Status: ${this.#status}\n` +
           `Due: ${this.#dueDate.toLocaleDateString()} ${this.#dueDate.toLocaleTimeString()}`;
  }
}
