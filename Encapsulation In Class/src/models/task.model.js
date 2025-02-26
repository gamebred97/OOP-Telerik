import { status } from '../common/status.enum.js';

/** The Task class holds all relevant data and behavior a task might have. */
export class Task {
  // One way to indicate that a field should not be touched is to put an underscore before its name.
  // This won't prevent your colleges from directly interacting with it.
 
  /** @type {string} */
  #name;
  /** @type {Date} */
  #dueDate;
   /** @type {status} */
  #status;

/**
   * Creates a new Task instance.
   * @param {string} name - The name of the task.
   * @param {Date} dueDate - The due date of the task.
   */
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.#status = status.TODO;
  }

  /**
   * Gets the task name.
   * @returns {string}
   */
  get name(){
    return this.#name;
  }

    /**
   * Sets the task name.
   * @param {string} value - The new task name (must be 6-20 characters long).
   * @throws {Error} If the value is not a string or does not meet length constraints.
   */
  set name(value){
    if (!value || typeof value !== 'string' || (value.length < 6 && value.length > 20)) throw new Error('Wrong input');
    this.#name = value;
  }

  /**
   * Gets the due date of the task.
   * @returns {Date}
   */
  get dueDate(){
    return this.#dueDate;
  }

   /**
   * Sets the due date of the task.
   * @param {Date} value - The new due date.
   * @throws {Error} If the value is not a Date instance.
   */
  set dueDate(value){
    if (!(value instanceof Date)) throw new Error('Error');
    this.#dueDate = value;
  }

  /**
   * Gets the status of the task.
   * @returns {status}
   */
  set status(value){
    this.#status = value;
  }

  /**
   * Sets the status of the task.
   * @param {status} value - The new status.
   */
  get status(){
    return this.#status;
  }

  /** Sets the task status to TODO. */
  reset() {
    // missing implementation
    this.#status = status.TODO;
  }

  /** Sets the task status to IN_PROGRESS. */
  advance() {
    // missing implementation
    this.#status = status.IN_PROGRESS;
  }

  /** Sets the task status to DONE. */
  complete() {
    // missing implementation
    this.#status = status.DONE;
  }

  /** Transforms the task data into a formatted string */
  toString() {
    return `Name: ${this.#name}\n` + 
           `Status: ${this.#status}\n` +
           `Due: ${this.#dueDate.toLocaleDateString()} ${this.#dueDate.toLocaleTimeString()}`;
  }
}
