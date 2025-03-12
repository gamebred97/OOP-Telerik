import Queue from '../src/queue.js';

    describe('count should', () => {
        it('return 0 when queue empty', () => {
            const queue = new Queue();
            expect(queue.count).toBe(0);
        });

        it('return correct count when not empty', () => {
            const queue = new Queue();
            queue.enqueue(1);
            queue.enqueue(1);
            queue.enqueue(2);
            expect(queue.count).toBe(3);

            queue.dequeue();
            queue.dequeue();
            expect(queue.count).toBe(1);
        })
    });

describe('isEmpty should', () => {
    it('return true when queue empty', () => {
        const queue = new Queue();
        expect(queue.isEmpty).toBe(true);

        queue.enqueue(1);
        queue.dequeue();
        expect(queue.isEmpty).toBe(true);
    });

    it('return false when not empty', () => {
        const queue = new Queue();
        queue.enqueue(1)
        expect(queue.isEmpty).toBe(false);
    })
});

describe('peek() should', () => {
    it('throw when queue empty', () => {
        expect(() => new Queue().peek()).toThrow();
    });

    it('return correct item', () => {
        const queue = new Queue();
        queue.enqueue(5);
        expect(queue.peek()).toBe(5);

        queue.enqueue(7);
        expect(queue.peek()).toBe(5);
    });

    it('not remove item', () => {
        const queue = new Queue();
        queue.enqueue(5);

        expect(queue.count).toBe(1);
        const _ = queue.peek();
        expect(queue.count).toBe(1)
    });
});

describe('dequeue() should', () => {
    it('throw when queue empty', () => {
        expect(() => new Queue().dequeue()).toThrow();
    });

    it('return correct item', () => {
        const queue = new Queue();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);

        queue.enqueue(4);
        expect(queue.dequeue()).toBe(4);
    });

    it('remove item', () => {
        const queue = new Queue();
        queue.enqueue(5);

        expect(queue.count).toBe(1);
        const _ = queue.dequeue();
        expect(queue.count).toBe(0)
    });
});

describe('enqueue() should', () => {
    it('add item(s)', () => {
        const queue = new Queue();

        queue.enqueue(1);
        expect(queue.count).toBe(1);

        for (let x = 0; x < 123; x++) {
            queue.enqueue(x);
        }
        expect(queue.count).toBe(124);
    });
});

describe('Queue implementation', () => {
    it('should not use an array', () => {
        const queue = new Queue();
        expect(queue.push).toBeUndefined();
        expect(queue.pop).toBeUndefined();
    });
});