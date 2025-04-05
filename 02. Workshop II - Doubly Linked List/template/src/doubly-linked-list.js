import LinkedListNode from "./linked-list-node.js";

export default class DoublyLinkedList {
  head = null;
  tail = null;
  #count = 0;


  addFirst(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    node.prev = null;
    this.#count++;
  }

  addLast(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.#count++;
  }

  removeFirst() {
    const value = this.head.value;
    this.head = this.head.next;
    this.#count--;
    return value;
  }

  removeLast() {
    const value = this.tail.value;
    this.tail = this.tail.prev;
    this.#count--;
    return value;
  }

  insertBefore(node, value) {
    if (!node) {
      throw new Error("Node cannot be null");
    }

    const newNode = new LinkedListNode(value);

    newNode.prev = node.prev;
    newNode.next = node;

    if (node.prev) {
      node.prev.next = newNode;
    } else {
      this.head = newNode;
    }

    node.prev = newNode;

    this.#count++;
  }

  insertAfter(node, value) {
    if (!node) {
        throw new Error("Node cannot be null");
      }

    const newNode = new LinkedListNode(value);
    
    newNode.next = node.next;
    newNode.prev = node;

    if(node.next){
        node.next.prev = newNode;
       
    } else {
        this.tail = newNode;
    }
    node.next = newNode;
    this.#count++;
  }

  find(el) {

    let current = this.head;

    while(current){
        if (current.value === el){
            return current;
        }
        current = current.next;
    }
    return null;
  }

  values() {
    const values = [];

    let current = this.head;

    while(current){
        values.push(current.value);
        current = current.next;
    }
    return values;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail
  }

  get count() {
    return this.#count;
  }
}

const test = new DoublyLinkedList();
test.addLast(1);
test.addLast(2);
test.addLast(3);
test.addLast(4);
test.addLast(5);


console.log(test.values());

const el = test.find(3)

if (el){
  test.insertAfter(el , 2.5)
}

console.log(test.values());

// console.log(test.head.next.prev === test.head)
// console.log(test.tail.prev.next === test.tail);
