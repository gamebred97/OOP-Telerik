/* eslint-disable */
import { CreateBoxerTask } from '../tasks/create-boxer.task.js';
import { CreateSprinterTask } from '../tasks/create-sprinter.task.js';
import { ListOlympiansTask } from '../tasks/list-olympians.task.js';

export class TaskRunner {

  static #createBoxerTask = new CreateBoxerTask();
  static #createSprinterTask = new CreateSprinterTask();
  static #listOlympiansTask = new ListOlympiansTask();

  static createBoxer(firstname, lastname, country, category, wins, losses) {
    return TaskRunner.#createBoxerTask.run(firstname, lastname, country, category, wins, losses);
  }

  static createSprinter(firstname, lastname, country, personalRecords) {
    return TaskRunner.#createSprinterTask.run(firstname, lastname, country, personalRecords);
  }

  static listOlympians(key, order) {
    return TaskRunner.#listOlympiansTask.run(key, order);
  }

}
