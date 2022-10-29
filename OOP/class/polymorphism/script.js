"use strict";

// առանց պոլիմորֆիզմի

// function welcome () {
// 	console.log("Welcome to our website");
// }

// function hello (userName) {
// 	console.log(`Hello dear ${userName}`);
// }

// function greetings (firstName, lastName) {
// 	console.log(`Greetings dear ${firstName} ${lastName}`);
// }

// welcome();
// hello("John");
// greetings("John", "Smith");

// example 1
// պոլիմորֆիզմով

/*function allInOne (...params) {
	if (params.length === 0) {
		console.log("Welcome to our website");
	} else if (params.length === 1 && typeof(params[0]) === "string") {
		console.log(`Hello dear ${params[0]}`);
	} else if (params.length === 2 && typeof(params[0]) === "string") {
		console.log(`Greetings dear ${params[0]} ${params[1]}`);
	} else if (params.length === 1 && typeof(params[0]) === "number") {
		console.log(`Lucky number is ${params[0]}`);
	}
}*/

// allInOne();
// allInOne("John");
// allInOne("John", "Smith");
// allInOne(16);

// example 2

const data = [
	{name: "John", id: 100},
	{name: "Alex", id: 101},
	{name: "Mike", id: 102}
];

// առանց պոլիմորֆիզմի
// function customNameSearch (name) {
// 	return data.filter(obj => obj.name === name);
// }

// function customIdSearch (id) {
// 	return data.filter(obj => obj.id === id);
// }

// // console.log(customNameSearch("Alex"));
// // console.log(customIdSearch(102));

// պոլիմորֆիզմով
/*function find (...params) {
	if (typeof(params[0]) === "string") {
		return data.filter(obj => obj.name === params[0]);
	} else if (typeof(params[0]) === "number") {
		return data.filter(obj => obj.id === params[0]);
	}
}*/

// console.log(find("John"));
// console.log(find(101));

// example 2 || class

class Animal {
	say() {
		console.log("rrr, I'm an animal");
	}
}

class Dog extends Animal {
	say(){
		console.log("woof, woof !!!");
	}
}

class Cat extends Animal {
	say() {
		console.log("meow, meow");
	}
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

// animal.say();
// dog.say();
// cat.say();

// հարցնում ենք արդյո՞ք dog object-ը օրինակ է նշված class-ներին
// console.log(dog instanceof Animal); // true
// console.log(dog instanceof Dog); // true
// console.log(dog instanceof Cat); // false

function f (... s){
    if (s extends Animal){
        console.log("woof, woof !!!");

    } else if (Animal instanceof animal){
        console.log("woof, woof !!!");

    } else if (Animal instanceof animal){
        console.log("something is wrong");

    }

}

console.log(f(dog));
console.log(f(cat));


/*

2

class Car {
    constructor (brand){
        this.brand = brand;
        this._brand = brand;
        let Brand = brand;
    }

        #brand = "confidential";

        show() {
            console.log(`${this.#brand} is confidential`);
        }
}

const car = new Car ("Rolls-Royce");
console.log(car);
console.log(car._brand);
console.log(car.#brand); */
/*

3

class Box {
	constructor (height, weight) {
        this.height = height;
        this.weight = weight;
		
	}

    static square = 50 * 50;

    static calcArea () {
        console.log("The area is 2500");
    }
}

class NewBox extends Box {}

console.log(Box.square);
console.log(NewBox.square);

Box.calcArea();
NewBox.calcArea(); */