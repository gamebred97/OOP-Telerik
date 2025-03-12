import Stack from '../src/stack.js';

describe('count should', () => {
    it('return 0 when stack empty', () => {
        const stack = new Stack();
        expect(stack.count).toBe(0);
    });

    it('return correct count when not empty', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(1);
        stack.push(2);
        expect(stack.count).toBe(3);

        stack.pop();
        stack.pop();
        expect(stack.count).toBe(1);
    })
});

describe('isEmpty should', () => {
    it('return true when stack empty', () => {
        const stack = new Stack();
        expect(stack.isEmpty).toBe(true);

        stack.push(1);
        stack.pop();
        expect(stack.isEmpty).toBe(true);
    });

    it('return false when not empty', () => {
        const stack = new Stack();
        stack.push(1)
        expect(stack.isEmpty).toBe(false);
    })
});

describe('peek() should', () => {
    it('throw when stack empty', () => {
        expect(() => new Stack().peek()).toThrow();
    });

    it('return correct item', () => {
        const stack = new Stack();
        stack.push(5);
        expect(stack.peek()).toBe(5);

        stack.push(8);
        expect(stack.peek()).toBe(8);
    });

    it('not remove item', () => {
        const stack = new Stack();
        stack.push(5);

        expect(stack.count).toBe(1);
        const _ = stack.peek();
        expect(stack.count).toBe(1)
    });
});

describe('pop() should', () => {
    it('throw when stack empty', () => {
        expect(() => new Stack().pop()).toThrow();
    });

    it('return correct item', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);

        stack.push(4);
        expect(stack.pop()).toBe(4);
    });

    it('remove item', () => {
        const stack = new Stack();
        stack.push(5);

        expect(stack.count).toBe(1);
        const _ = stack.pop();
        expect(stack.count).toBe(0)
    });
});

describe('push() should', () => {
    it('add item(s)', () => {
        const stack = new Stack();

        stack.push(1);
        expect(stack.count).toBe(1);

        for (let x = 0; x < 100; x++) {
            stack.push(x);
        }
        expect(stack.count).toBe(101);
    });
});

describe('Stack implementation', () => {
    it('should not use an array', () => {
        const stack = new Stack();
        expect(stack.splice).toBeUndefined();
    });
});