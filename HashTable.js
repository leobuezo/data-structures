class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	hashMethod(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this.hashMethod(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	remove(key) {
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];
		let currentElement = undefined;
		let index = 0;
		let found = false;
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (found == false && currentBucket[i][0] === key) {
					currentElement = currentBucket[i];
					index = i;
					found = true;
				}
			}
		}
		if(found) {
			this.data[address].splice(index, 1);
			return currentElement;
		}
		return undefined;
	}


}
const myHashTable = new HashTable(50);
console.log(myHashTable.set("Leo", 1983));
console.log(myHashTable.set("Luis", 1984));
console.log(myHashTable.set("Ale", 1974));
console.log(myHashTable.set("Beto", 1970));
console.log(myHashTable.set("Tito", 1990));
console.log(myHashTable.get("Ale"));
console.log(myHashTable.remove("Ale"));
console.log(myHashTable.get("Ale"));
console.log(myHashTable.remove("Tito"));
console.log(myHashTable.remove("Luis"));
console.log(myHashTable.remove("Beto"));
console.log(myHashTable.set("Tito", 1990));
