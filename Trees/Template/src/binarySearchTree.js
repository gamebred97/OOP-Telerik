import { BinarySearchTreeNode } from "./binarySearchTreeNode.js";

export class BinarySearchTree {
  #root = null;

  get root() {
    return this.#root;
  }

  get height(){
    return this.calculateHeight(this.#root)
  }

  calculateHeight(node){
    if (node === null) return 0;

    const leftHeight = this.calculateHeight(node.left);
    const rightHeight = this.calculateHeight(node.right);

    return  1 + Math.floor(leftHeight, rightHeight);
  }

  insert(value) {
    const tree = new BinarySearchTreeNode(value);

    if (this.#root === null) {
      this.#root = tree;
      return;
    }

    let current = this.#root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = tree;
          return;
        }
        current = current.left;
      } else if (value > current.value){  
        if (current.right === null) {
          current.right = tree;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  search(value) {
    let current = this.#root;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }

    }
    return false;
  }

  dfsInorder() {
    const result = [];

    function inOrder(node){
      if (node === null) return;

      inOrder(node.left);
      result.push(node.value);
      inOrder(node.right)
    }
    inOrder(this.#root);

    return result;
  }

  bfs() {
    const result = [];
  if (this.#root === null) return result;

  const queue = [this.#root];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value); 

    if (current.left !== null) {
      queue.push(current.left);
    }
    if (current.right !== null) {
      queue.push(current.right); 
    }
  }

  return result;
  }

  dfsPreorder() {
    const result = [];

    function preOrder(node){
      if (node === null) return;

      result.push(node.value);
      preOrder(node.left);
      preOrder(node.right)
    }
    preOrder(this.#root);

    return result;
  }

  dfsPostorder() {
    const result = [];

    function postOrder(node){
      if (node === null) return;

      postOrder(node.left);
      postOrder(node.right)
      result.push(node.value);
    }
    postOrder(this.#root);

    return result;
  }



  remove(value) {
    const removeNode = (node, value) => {
      if (node === null) return null;

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
     
        if (node.left === null && node.right === null) {
        
          return null;
        } else if (node.left === null) {
        
          return node.right;
        } else if (node.right === null) {
        
          return node.left;
        } else {
      
          let minRightNode = this.findMin(node.right);
          node.value = minRightNode.value;
          node.right = removeNode(node.right, minRightNode.value);
          return node;
        }
      }
    };

    this.#root = removeNode(this.#root, value);
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  dfsInorder() {
    const result = [];

    function inOrder(node) {
      if (node === null) return;

      inOrder(node.left);
      result.push(node.value);
      inOrder(node.right);
    }

    inOrder(this.#root);
    return result;
  }

  // this function is used to help with testing
  __testSetup(root) {
    this.#root = root;
  }
}

