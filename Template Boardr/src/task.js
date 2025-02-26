import { status } from './status.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.

  /** @type {string} The name of the task. */
  _name;

  /** @type {Date} The due date of the task. */
  _dueDate;

  /** @type {string} The status of the task. */
  _status;


  /**
   * Creates a new Task instance.
   * @param {string} name - The name of the task.
   * @param {Date} dueDate - The due date of the task.
   * @throws {Error} If the name is invalid or dueDate is not a Date object.
   */
  constructor(name , dueDate){
    this.changeName(name);
    this.changeDueDate(dueDate);
    this._status = status.TODO;
  }

    /**
   * Changes the name of the task.
   * @param {string} value - The new name of the task.
   * @throws {Error} If the name is not a string or is outside the valid length range.
   */
  changeName(value) {
    if (!value || typeof value !== 'string' || (value.length < 6 && value.length > 20)) throw new Error('Wrong input');

      this._name = value;
  }

  /**
   * Changes the due date of the task.
   * @param {Date} value - The new due date.
   * @throws {Error} If the value is not a Date object.
   */
  changeDueDate(value) {

    if (!(value instanceof Date)) throw new Error('Error');
    this._dueDate = value;
  }
  
  /**
   * Resets the task status to TODO.
   */
  reset() {
    this._status = status.TODO;
  }

  /**
   * Advances the task status to IN_PROGRESS.
   */
  advance() {
    this._status = status.IN_PROGRESS;
  }

  /**
   * Marks the task as completed by setting its status to DONE.
   */
  complete() {
    this._status = status.DONE;
  }

   /**
   * Returns a string representation of the task.
   * @returns {string} The formatted task details.
   */
  toString(){
    return `Name: ${this._name}\nStatus: ${this._status}\nDue: ${this._dueDate.toString()}`;
  }
}
