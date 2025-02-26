import { Task } from './task.model.js';

/** The Board class holds tasks */
export class Board {
  /** @type {Task[]} Holds the list of tasks */
  #tasks;
 
 /**
   * Creates a new Board instance.
   */
  constructor(){
    this.#tasks = [];
   
  }

   /**
   * Gets a copy of the tasks array.
   * @returns {Task[]} A shallow copy of the tasks array.
   */
  get task(){
    return this.#tasks.slice();
  }

  /**
   * Gets the number of tasks on the board.
   * @returns {number} The count of tasks.
   */
  get taskCount() {
    return this.#tasks.length;
  }


  /** Adds a new task to the board. */
  add(task) {
    // missing implementation
    if(!(task instanceof Task)) throw new Error('Invalid task object');
    if (!this.#tasks.includes(task)){
      this.#tasks.push(task);
    }
  }
  
  /** Removes a task from the board. */
  remove(task) {
    // missing implementation
    const index = this.#tasks.indexOf(task);

    if(index === -1) throw new Error('Task does not exist');
    this.#tasks.splice(index, 1);
  }

  /** Transforms the board data into a formatted string. */
  toString() {
    const titles = '---Task Board---\n\nTasks:\n\n';

    if (this.#tasks.length) {
      return titles + this.#tasks.join('\n--------\n');
    }

    return `${titles}No tasks at the moment.`;
  }
}
