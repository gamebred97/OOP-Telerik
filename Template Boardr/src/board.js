/** The Board class holds tasks */
import { Task } from './task.js';

export class Board {

    /** @type {Task[]} Holds the list of taks in the board */
    _tasks = [];


    /**
     * Adds a task to the board.
     * @param {Task} task - The task to add.
     * @throws {Error} If the provided task is not an instance of Task. 
     */
    add(task){
        if (!(task instanceof Task)) throw new Error('Invalid task object');
        if (!this._tasks.includes(task)){
            this._tasks.push(task);
        }
    }

    /**
     * Removes task from the board.
     * @param {Task} task - The task to remove.
     * @throws {Error} If the task does not exist. 
     */
    remove(task) {
        const taskIndex = this._tasks.indexOf(task);

        if (taskIndex === -1) throw new Error('Task does not exist');

        this._tasks.splice(taskIndex, 1);
    }

    /**
     * Returns a string representation of the board and its tasks.
     * @returns {string} The formatted string displaying all tasks.
     */
    toString(){
     
        if (this._tasks.length === 0){
            return 'No tasks at the moment';
        } else {
             return `---Task Board---\nTasks:\n${this._tasks.map(task => task.toString()).join('\n')}`;
        }
        
        }

   
}