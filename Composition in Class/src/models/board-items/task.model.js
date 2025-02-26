import { taskStatus } from '../../common/task-status.enum.js';
import { BoardItem } from './board-item.model.js';

export class Task extends BoardItem {

  
  #dueDate;
 

  constructor(name, dueDate) {
    // Reuse base class constructor first
    super(name ,taskStatus.TODO);
    // Set through the setters to validate fields
    this.dueDate = dueDate;
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
    super.reset(taskStatus.TODO);
  }

  advance() {
    super.reset(taskStatus.IN_PROGRESS);
  }

  complete() {
    super.reset(taskStatus.DONE);
  }

  toString() {
    return `* Task *\n${super.toString()}\nDue: ${this.#dueDate.toLocaleDateString()} ${this.#dueDate.toLocaleTimeString()}`;
  }
}
