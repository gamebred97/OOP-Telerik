import LinkedListNode from "./linked-list-node.js";


// class LinkedListNode {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next ? next : null;
//     }
// }

export default class Queue {

    #head = null;
    #tail = null;
    #count = 0;
    #isEmpty;

    enqueue(value){
        const node = new LinkedListNode(value)
        if(!this.#head){

            this.#head = node;
        } else {
            this.#tail.next = node;
        }
        this.#tail = node;
        this.#count++;
    }

    dequeue(){
        if(this.#isEmpty) {
            throw new Error("queue is empty")
        }

        const value = this.#head.value
        this.#head = this.#head.next;
        this.#count--
        return value
    }


    peek(){
        if(this.#isEmpty) {
            throw new Error("queue is empty")
        }
        const value = this.#head.value
        return value
    }

    get count(){
        return this.#count
    }

    get isEmpty(){
        return this.#head === null;
    }
}

// const queue = new Queue()
// queue.enqueue(1)
// console.log(queue.getHead());
// console.log(queue.getTail())
// console.log(queue.getHead() === queue.getTail())
// queue.enqueue(2)
// console.log(`----------------------------------------------`);
// console.log(`-----HEAD------ `);

// console.log(queue.getHead());
// console.log(`---------TAIL--------`);

// console.log(queue.getTail())

// queue.enqueue(3)
// console.log(queue.getHead());
// queue.enqueue(2)
// console.log(queue.dequeue())
// console.log(queue.getHead());

// console.log(queue.peek())