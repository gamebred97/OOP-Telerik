/* eslint-disable */
import { Person } from '../../src/models/person.js';

describe('Person', () => {

  describe('constructor', () => {
    it('should throw if name is invalid', () => {
      expect(() => new Person('K', 27, ['KKK'])).toThrow('Invalid name');
      expect(() => new Person('Kiro Skalata', 27, ['KKK'])).not.toThrow()
    });

    it('should throw if the passed age value is invalid' , () => {
      expect(() => new Person('Test Test' , 165 , ['KKK'])).toThrow('Invalid age')
      expect(() => new Person('Test test' , 27 , ['KKK'])).not.toThrow()
    })

    it('should throw if the passed friends value is invalid' , () => {
      expect(() => new Person('Kiro Skalata', 27, 'KKK')).toThrow('Invalid friends list!');
      expect(() => new Person('Test test' , 24 , ['Ana' , 'Ivo'])).not.toThrow()
    })

    it('should set the name correctly' , () => {
      const person = new Person('Sasho' , 27 , ['Mitko' , 'Bobi'])
      expect(person.name).toBe('Sasho')

    })

    it('should set the age correctly' , () => {
      const person = new Person('Sasho' , 27 , ['Mitko' , 'Bobi'])
      expect(person.age).toBe(27)
    })

    it('should set the friend correctly' , () => {
      const person = new Person('Sasho' , 27 , ['Mitko' , 'Bobi'])
      expect(person.friends).toEqual(['Mitko' , 'Bobi'])
    })
  });

  describe('name' , () => {

    it('setter should throw if the value is invalid' , () => {
      const person = new Person('Kiro Skalata' , 27 , ['Gosho' , 'Pesho'])
      expect(() => {
        person.name = 'K';
      }).toThrow('Invalid name')
    })

    it('setter should set the value correctly' , () => {
      const person = new Person('Kiro Skalata' , 27 , ['Gosho' , 'Pesho']);
      person.name = 'Pesho Iv'
      expect(person.name).toBe('Pesho Iv')
    })
  })


  describe('age' , () => {

    it('setter should throw if the value is invalid' , () => {
      const person = new Person('Kiro Skalata' , 27 , ['Gosho' , 'Pesho'])
      expect(() => {
        person.age = 277;
      }).toThrow('Invalid age')
    })

    it('setter should set the value correctly' , () => {
      const person = new Person('Kiro Skalata' , 27 , ['Gosho' , 'Pesho']);
      person.age = 45
      expect(person.age).toBe(45)
    })
  })


  describe('friends' , () => {

    it('throw if you try to set it to a new value', () => {
      const person = new Person('John', 30, ['Ana' , 'Maria']);
    
      expect(() => {
        person.friends = ['Pesho']; 
      }).toThrow("Cannot set property friends of #<Person> which has only a getter");
    });

    it('should return a copy of the array, a different reference, but structurally the same', () => {
      const person = new Person('John', 30, ['Ana' , 'Maria']);

      const copyPerson = person.friends;
      expect(copyPerson).toEqual(['Ana' , 'Maria'])
      expect(copyPerson).not.toBe(person.friends)
    })
  })

  describe('printInfo' , () => {

    it('should return the correct string' , () => {
      const person = new Person('John', 30, ['Ana' , 'Maria']);
      expect(person.printInfo()).toBe(`Name: ${person.name}\nAge: ${person.age}\nFriend count: ${person.friends.length}`)
    })
    
  })

  

});
