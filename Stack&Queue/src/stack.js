import LinkedListNode from "./linked-list-node.js";

export default class Stack {

    #top = null;
    #count = 0;
    #isEmpty;

    push(value){
      
        const stack = new LinkedListNode(value);
        stack.next = this.#top;
        this.#top = stack;
        this.#count++;
    }

    pop(){

        if(this.#isEmpty) throw new Error('throw when stack empty')
        
        const value = this.#top.value;
        this.#top = this.#top.next;
        this.#count--;
        return value;
    }

    peek(){

        if(this.#isEmpty) throw new Error('throw when stack is empty')
        
        const value = this.#top.value;
        return value

    }

    get count(){
        return this.#count
    }

    get isEmpty(){
        return this.#top === null;
    }

    getTop(){
        return this.#top
    }
}

// const stack = new Stack();
// stack.push(1)
// //console.log(stack.getTop());
// stack.push(2)
// //console.log(stack.getTop());
// stack.push(3)
// //console.log(stack.getTop());
// stack.pop()
// console.log(stack.peek());