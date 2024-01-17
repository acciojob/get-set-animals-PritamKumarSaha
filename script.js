//complete this code
class Animal {
	constructor(species) {
		this._species = species;
	}
	get species() {
		return this._species;
	}
	makeSound() {
		console.log("Animal makes sound");
	}
}

class Dog extends Animal {
	constructor(species) {
		super(species);
	}
	bark() {
		console.log("woof");
	}
	makeSound() {
		console.log(`The ${species} makes a sound`);
	}
}

class Cat extends Animal {
	constructor(species) {
		super(species);
	}
	purr() {
		console.log("purr");
	}
	makeSound() {
		console.log(`The ${species} makes a sound`);
	}
}

let myDog = new Dog("Golden Retriever");
console.log(myDog.species);
myDog.makeSound();
myDog.bark();

const myCat = new Cat("Siamese");
console.log(myCat.species);
myCat.makeSound();
myCat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
