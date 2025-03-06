/* eslint-disable */
import { Task } from './board-items/task.model.js';
import { ManagerTask } from './board-items/tasks/manager-task.model.js';
import { ProgrammerTask } from './board-items/tasks/programmer-task.model.js';
import { Board } from './board.model.js';

export class TaskBoard extends Board{
  add(item) {
    if (!(item instanceof Task)) {
      throw new Error('The provided value is not an objected created from the BoardItem class!');
    }

    super.add(item);
  }

}
