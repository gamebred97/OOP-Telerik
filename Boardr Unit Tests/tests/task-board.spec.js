/* eslint-disable */
import { TaskBoard } from "../src/models/task-board.model.js";
import { Task } from "../src/models/board-items/task.model.js";
import { Board } from "../src/models/board.model.js";
import { ManagerTask } from "../src/models/board-items/tasks/manager-task.model.js";
import { projectType } from "../src/common/project-type.enum.js";
import { programmerLevel } from "../src/common/programmer-level.enum.js";
import { Employee } from "../src/models/employee.model.js";
import { ProgrammerTask } from "../src/models/board-items/tasks/programmer-task.model.js";

describe('Task Board' , () => {

    it('should extend the Board model' , () => {
        const taskBoard = new TaskBoard();
        expect(taskBoard).toBeInstanceOf(Board)
    })

    it('should throw if item is not an instance of Task, ManagerTask, or Programming task' , () => {
        const taskBoard = new TaskBoard()
        expect(() => taskBoard.add({})).toThrow(); 
        expect(() => taskBoard.add("invalid task")).toThrow(); 
        expect(() => taskBoard.add(null)).toThrow();
    })

    it('should not throw if item is an instance of Task, ManagerTask, or ProgrammerTask' , () => {
        const taskBoard = new TaskBoard()
        expect(() => taskBoard.add(new Task("General Task", new Date('22/12/2025')))).not.toThrow();
        expect(() => taskBoard.add(new ManagerTask("Manager Task", new Date(), projectType.EXTERNAL_PRODUCT, new Employee("Alice Walker")))).not.toThrow();
        expect(() => taskBoard.add(new ProgrammerTask("Fix bug", new Date(), programmerLevel.SENIOR, new Employee("Bob Marley")))).not.toThrow();
    })

    it('should not throw if item is an instance of Task, ManagerTask, or ProgrammerTask', () => {
        const taskBoard = new TaskBoard();
        const task = new Task('validName', new Date('2026/06/05'));
        const assignee = new Employee('validName');      
        const managerTask = new ManagerTask('validName', new Date('2026/06/05'), projectType.EXTERNAL_PRODUCT, assignee);
        const programmerTask = new ProgrammerTask('validName', new Date('2026/06/05'), programmerLevel.JUNIOR, assignee);
  
        expect(() => taskBoard.add(task)).not.toThrow();
        expect(() => taskBoard.add(managerTask)).not.toThrow();
        expect(() => taskBoard.add(programmerTask)).not.toThrow();
      });
})
