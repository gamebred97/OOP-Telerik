/* eslint-disable */
import { ManagerTask } from "../src/models/board-items/tasks/manager-task.model.js";
import { Task } from "../src/models/board-items/task.model.js";
import { projectType } from "../src/common/project-type.enum.js";
import { Employee } from "../src/models/employee.model.js";


describe('Manager Task', () => {
    
    it("should extend the Task model" , () => {
        const managerTask = new ManagerTask('Assign case #80072F8', new Date('03/07/2026'), projectType.INTERNAL_PRODUCT, new Employee('Steve Wonder'))
;        expect(managerTask).toBeInstanceOf(Task)
    });

    describe('Constructor', () => {

        it('should throw if projectType is invalid', () => {
            expect(() => {
                new ManagerTask('Assign case #80072F8', new Date('03/07/2026'), 'INVALID_TYPE', new Employee('Steve Wonder'));
            }).toThrow('Invalid project type');
        });

        it('should throw if passed assignee is not a Employee object' , () => {
            expect(() => {
                new ManagerTask('Assign case #80072F8', new Date('03/07/2026'), projectType.INTERNAL_PRODUCT, new Object())
            }).toThrow('Assignee can only be an Employee')
        })

        it('should assign correctly the values of projectType and assignee' , () => {
            const employee = new Employee('Steve Wonder')
            const task = new ManagerTask('Mission impossible' , 'for test' ,projectType.EXTERNAL_PRODUCT, employee)

            expect(task.projectType).toBe(projectType.EXTERNAL_PRODUCT)
            expect(task.assignee).toBe(employee)
        })
    })

    it('should not be able to change the value of projectType' , () => {
        const task = new ManagerTask('Steve Wonder' , 'for test' ,projectType.EXTERNAL_PRODUCT, new Employee('Steve Wonder'))
        expect(() => {
            task.projectType = projectType.INTERNAL_PRODUCT;
        }).toThrow();
    })

    it('should not be able to change the value of assignee' , () => {
        const employee = new Employee('Steve Wonder')
        const task = new ManagerTask('Pod prikritie' , 'for test' ,projectType.EXTERNAL_PRODUCT, employee)
        expect(() => {
            task.assignee = new Employee('Baba Vanga')
        }).toThrow();
    })

});
