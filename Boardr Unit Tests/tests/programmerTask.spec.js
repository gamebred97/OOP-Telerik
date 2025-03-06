/* eslint-disable */
import { Task } from "../src/models/board-items/task.model.js";
import { programmerLevel } from "../src/common/programmer-level.enum.js";
import { Employee } from "../src/models/employee.model.js";
import { ProgrammerTask } from "../src/models/board-items/tasks/programmer-task.model.js";

describe('Programmer Task', () => {

    it('should extend the Task model', () => {
        expect(ProgrammerTask.prototype).toBeInstanceOf(Task);
      });

    describe('Constructor' , () => {

        it('should throw if passed programmerLevel is invalid' , () => {
            expect(() => {
                new ProgrammerTask('Fix bug #37', new Date('12/12/2026'), 'INVALID_LEVEL', new Employee('Ali Baba'))
            }).toThrow('Invalid programmer level')
        })

        it('should throw if passed assignee is not a Employee object' , () => {
            expect(() => {
                new ProgrammerTask('Fix bug #37', new Date('12/12/2026'), programmerLevel.SENIOR, 'ala bala');
            }).toThrow('Assignee can only be an Employee')
        })

        it('should assign correctly the values of programmingLevel and assignee' , () => {
            const employee = new Employee('Ceci Razceci')
            const task = new ProgrammerTask('Fix bug #37', new Date('12/12/2026'), programmerLevel.SENIOR, employee)
 
            expect(task.programmerLevel).toBe(programmerLevel.SENIOR)
            expect(task.assignee).toBe(employee)
        })       
    })

    it('should not be able to change the value of programmingLevel' , () => {
        const task = new ProgrammerTask('Fix bug #37', new Date('12/12/2026'), programmerLevel.SENIOR, new Employee('Kobrata Mulev'))
        expect(() => {
            task.programmerLevel = programmerLevel.JUNIOR;
        }).toThrow();
    })
    
    it('should not be able to change the value of assignee' , () => {
        const employee = new Employee('Misho Shamara')
        const task = new ProgrammerTask('Pod prikritie' , 'for test' ,programmerLevel.SENIOR, employee)
        expect(() => {
            task.assignee = new Employee('Mitio Ochite')
        }).toThrow();
    })
})