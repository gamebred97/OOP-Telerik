// Binary Node
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

//          A
//        /   \
//       B     C
//      / \     \
//     D   E     F
//                \
//                 G

// Recreate the binary tree
const root = new Node("A");
root.left = new Node("B");
root.right = new Node("C");
root.left.left = new Node("D");
root.left.right = new Node("E");
root.right.right = new Node("F");
root.right.right.left = new Node("G");

// DFS Pre-Order Traversal
function dfsPreOrder(node) {
	if (node === null) {
		return;
	}
	console.log(node.value);
	dfsPreOrder(node.left);
	dfsPreOrder(node.right);
}

console.log("DFS Pre-Order Traversal:");
dfsPreOrder(root); // A B D E C F G


// DFS In-Order Traversal
function dfsInOrder(node) {
	if (node === null) {
		return;
	}
	dfsInOrder(node.left);
	console.log(node.value);
	dfsInOrder(node.right);
}

console.log("DFS In-Order Traversal:");
dfsInOrder(root); // D B E A C G F

// DFS Post-Order Traversal
function dfsPostOrder(node) {
	if (node === null) {
		return;
	}
	dfsPostOrder(node.left);
	dfsPostOrder(node.right);
	console.log(node.value);
}

console.log("DFS Post-Order Traversal:");
dfsPostOrder(root); // D E B G F C A

// BFS Traversal
function bfs(root) {
	const queue = [];
	queue.push(root);

	while (queue.length > 0) {
		const node = queue.shift();

		console.log(node.value)

		if (node.left) {
			queue.push(node.left);
		}
		if (node.right) {
			queue.push(node.right);
		}
	}
}

console.log("BFS Traversal:");
bfs(root); // A B C D E F G