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
		console.log("woof");
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
		console.log("purr");
	}
}

let dog = new Dog("Pug");
console.log(dog.species);
dog.makeSound();
dog.bark();

let cat = new Cat("Cat");
console.log(cat.species);
cat.makeSound();
cat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
