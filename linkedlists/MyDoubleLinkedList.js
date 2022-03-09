class MyNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.next = null;
	}
}

class MyDoubleLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		let newNode = new MyNode(value);
		newNode.prev = this.tail;
		this.tail.next = newNode; // head.next = node2 --> node2.next = node3 --> node3.next = ...
		this.tail = newNode; // this.tail = node2 --> this.tail = node3 --> this.tail = ...
		this.length++;
		return this;
	}

	prepend(value) {
		let newNode = new MyNode(value);
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(value, position) {
		if (position > 0 && position <= this.length + 1) {
			if (position == 1) {
				this.prepend(value);
				return this;
			}
			if (position == this.length + 1) {
				this.append(value);
				return this;
			}
			let newNode = new MyNode(value);
			let currentNode = this.head;
			for (let i = 1; i < position - 1; i++) {
				currentNode = currentNode.next;
			}
			let flag = currentNode.next;
			currentNode.next = newNode;
			newNode.next = flag;
			flag.prev = newNode;
			newNode.prev = currentNode;
			this.length++;
			return this;
		}
		return undefined;
	}

	remove(index) {
		if (index >= this.length || index < 0) {
			return "Index error";
		} else if (index === 0) {
			const nextNode = this.getIndex(index + 1);

			nextNode.previous = null;
			this.head = nextNode;
			this.length--;

			return this;
		} else if (index === this.length - 1) {
			const previousPointer = this.getIndex(index - 1);

			previousPointer.next = null;
			this.tail = previousPointer;
			this.length--;

			return this;
		} else {
			const previousPointer = this.getIndex(index - 1);
			const nextPointer = this.getIndex(index + 1);

			previousPointer.next = nextPointer;
			nextPointer.previous = previousPointer;
			this.length--;

			return this;
		}
	}

	getTheIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter < this.length) {
			if (counter !== index) {
				currentNode = currentNode.next;
				counter++;
			}
		}
		return currentNode;
	}
}

miLista = new MyDoubleLinkedList("I am Head!!");
console.log(miLista);
miLista.append("I am Second :) ");
console.log(miLista);
miLista.append("I am Third =D ");
console.log(miLista);
miLista.append("I am Fourth ;-) ");
console.log(miLista);
miLista.prepend("I am the New Head! xP")
console.log(miLista);
miLista.insert("In the middle...", 3);
console.log(miLista);
console.log(miLista.getTheIndex(3));
console.log(miLista.remove(3));
console.log(miLista);
