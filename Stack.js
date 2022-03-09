class MyNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class MyStack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new MyNode(value);
		if (newNode) {
			if (this.length === 0) {
				this.top = newNode;
				this.bottom = newNode;
			} else {
				const temp = this.top;
				this.top = newNode;
				this.top.next = temp;
			}
			this.length++;
		}
		return this;
	}

	pop() {
		if (this.length === 0) {
			return "pila vacía.";
		} else {
			this.top = this.top.next;
		}
		this.length--;
		return this;
	}
}

const miStack = new MyStack();
