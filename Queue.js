class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if (newNode) {
			if (this.length === 0) {
				this.top = newNode;
				this.bottom = newNode;
			} else {
				this.bottom.next = newNode;
				this.bottom = newNode;
			}
			this.length++;
		}
		return this;
	}

	dequeue() {
		if (this.length === 0) {
			return "Queue vacía.";
		} else {
			this.top = this.top.next;
		}
		this.length--;
		return this;
	}
}

const myQueue = new Queue();
