class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor(value) {
		this.root = null;
	}

	insert(value, tree = this.root) {
		const newNode = new Node(value);
		if (this.root == null) {
			this.root = newNode;
		}
		else {
			let currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					} else {
						currentNode = currentNode.left;
					}
				} else {
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					} else {
						currentNode = currentNode.right;
					}
				}
			}
		}
	}

	search(value) {
		let currentNode = this.root;
		let found = false;
		while (currentNode !== null && found == false) {
			if (value == currentNode.value) {
				found = true;
			} else if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				currentNode = currentNode.right;
			}
		}
		if (found) {
			return currentNode;
		}
		return undefined;
	}

	delete(value) {
		// TODO
		console.log("método a implementar...");
	}
}

const tree = new BinarySearchTree();