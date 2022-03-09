class MyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new MyNode(value);
        this.tail.next = newNode; // head.next = node2 --> node2.next = node3 --> node3.next = ...
        this.tail = newNode; // this.tail = node2 --> this.tail = node3 --> this.tail = ...
        this.length++;
        return this;
    }

    prepend(value) {
        let newNode = new MyNode(value);
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
            let nextNode = this.head;
            for (let i = 1; i < position - 1; i++) {
                nextNode = nextNode.next;
            }
            let tempNode = nextNode.next;
            nextNode.next = newNode;
            newNode.next = tempNode;
            this.length++;
            return this;
        }
        return undefined;
    }

    remove(index) {
        if (!this.getTheIndex(index)) {
            console.log("Este nodo no existe.");
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }

        let previousPoiner = this.getTheIndex(index - 1);
        let nextPointer = this.getTheIndex(index + 1);
        previousPoiner.next = nextPointer;
        this.length--;
        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.length) {
            if(counter !== index) {
                currentNode = currentNode.next;
                counter++;
            }
        }
        return currentNode;
    }
}

miLista = new MySinglyLinkedList("I am Head!!");
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
