class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}

	pop() {
		const LAST_ITEM = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return LAST_ITEM;
	}

	delete(index) {
		const DELETED_ITEM = this.data[index];
		this.shiftIndex(index);
		return DELETED_ITEM;
	}

	shift() {
		const DELETED_ITEM = this.data[0];
		this.shiftIndex(0);
		return DELETED_ITEM;
	}

	unshift(item) {
		this.unshiftIndex();
		this.data[0] = item;
		return this.data;
	}

	unshiftIndex() {
		++this.length;
		for (let i = this.length -2; i >= 0; i--) {
			this.data[i + 1] = this.data[i];
		}
	}

	shiftIndex(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[--this.length];
	}
}

const myArray = new MyArray();
myArray.push('Diego');
myArray.push('Karen');
myArray.push('Oscar');
console.log(myArray);
console.log(myArray.get(1));
console.log(myArray.length);
console.log(myArray.pop());
console.log(myArray);
myArray.push('Mirta');
myArray.push('Angel');
myArray.push('Alicia');
myArray.push('Roberto');
console.log(myArray);
console.log(myArray.delete(2));
console.log(myArray);
console.log(myArray.shift());
console.log(myArray);
console.log(myArray.unshift('Primero'));
console.log(myArray);
