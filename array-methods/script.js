"use strict";
/*
// const arr = [14, 6, 89, 21];

// FOR EACH
// arr.forEach((item, index, currentArray) => {
// 	console.log(`${index}: ${item} => ${currentArray}`);
// });

// FILTER
// const filteredArr = arr.filter((item, index, currentArray) => {
// 	return item >= 10;
// });

// const filteredString = arr.filter(item => typeof(item) === "string");
// console.log(filteredString);
// console.log(filteredArr);

// MAP
// const newArr = arr.map(item => item);
// console.log(newArr);

// REDUCE
// const prices = [2500, 3800, 4600];
// const sale = [974, 1840, 2999];
// const all = [...prices, ...sale];

// const result = all.reduce((total, current) => {
// 	return total + current;
// }, 0);

// console.log(result);

// const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const totalLetters = letters.reduce((result, current, index) => {
// 	return [
// 		...result,
// 		index
// 	]
// }, []);

// console.log(totalLetters);


// SOME & EVERY
// const anotherArr = [24, 15, 68, 41, 76, "str"];
// const some = anotherArr.some(item => typeof(item) === "string");
// console.log(some);

// const every = anotherArr.every(item => typeof(item) === "number");
// console.log(every);

// CONCAT
// const firstArr = [2, 4, 6];
// const lastArr = [3, 5, 7];

// const z = [].concat(firstArr, lastArr);
// const y = [...firstArr, ...lastArr];

// console.log(z);
// console.log(y);

// FIND
// const findArr = [5, 50, 10, 87, 45, 0, 100, 95, 6];
// const found = findArr.find(item => item > 10); // 50
// const foundLast = findArr.findLast(item => item > 10); // 95
// const foundIndex = findArr.findIndex(item => item === 6);
// console.log(foundIndex);
// console.log(found);
// console.log(foundLast);

// FILL // WARRNING !!!

// const a = [1, 2, 3, 4];
// const b = [1, 2, 3, 4];
// const c = [1, 2, 3, 4];

// console.log(a.fill(0, 2, 3)); // [ 1, 2, 0, 4 ]
// console.log(b.fill(5, 1)); // [ 1, 5, 5, 5 ]
// console.log(c.fill(7)); // [ 7, 7, 7, 7 ]

// ARRAY 

const btns = document.querySelectorAll("button");
const test = Array.from(btns);

// console.log(Array.isArray(btns)); // false
// console.log(Array.isArray(test)); // true

console.log(Array.of(10, 5, 6, 7, 9, 50, "ssfs"));*/

// 1 

const numbers = [25, 27, 13, 5, 19];

numbers.forEach((item, index, currentArray) => {
    console.log(`${index}: ${item} => ${currentArray}`);
    //console.log(currentArray);
});

const names = ["Ani", "Karen", "Luiza", "Monte"];

names.forEach((item, index, currentArray) =>{
    console.log(`${index}: ${item} => ${currentArray}`);

});

const filtNums = numbers.filter((item, index, currentArray) => {
    return item <= 20;
});
console.log(filtNums);

const filteredNames = names.filter ((item, index, currentArray) => {
    return item[0] === "M";
});
console.log(filteredNames);

const mixedArr = [3, "Joe", true, 5, false];

const filtMixArr = mixedArr.filter(item => typeof(item) === "boolean");

console.log(filtMixArr);

const nums = [85, 73, 47, 22, 14, 62];

const filtNames = nums.filter((item, index) => {
    return nums[index] + nums[index] >= 100;
     
});
console.log(filtNames);

const prices = [730, 1500, 2700, 3150];

const filterOfPrices = prices.filter((item, index, currentArray) => {
    return item > 2000;
});
console.log(filterOfPrices);



const arr = [58, 8, 62, 49, 21];
const copyArr = arr.map(item => item);
console.log(copyArr);

const currency = ["AMD", "USD", "EUR", "GEL"];
const newArrCurrency = currency.map(item => item);
console.log(newArrCurrency);

const animals = ["lion", "tiger", "leopard", "elephant"];
const allAnimals = animals.map(item => item);
console.log(allAnimals);

const cars = ["BMW", "Mercedes-Benz", "Audi", "KIA"];
const carsList = cars.map(item => item);
console.log(carsList);

const city = ["Yerevan", "Gyumri", "Vanadzor", "Kapan"];
const cities = city.map(map => map);
console.log(cities);


const n = [750, 230, 742, 985, 617];

const result1 = n.reduce((total, current) => {
    return total + current;
}, 0);

console.log(result1);

const result2 = n.reduce((total, current) => {
    return total - current;
}, 1);

console.log(result2);

const result3 = n.reduce((total, current) => {
    return total / current;
}, 2);

console.log(result3);

const result4 = n.reduce((total, current) => {
    return total * current;
}, 3);

console.log(result4);

const result5 = n.reduce((total, current) => {
    return total - current;
}, 4);

console.log(result5);

const result6 = n.reduce((total, current) => {
    return total + current;
}, 5);

console.log(result6);

const result7 = n.reduce((total, current) => {
    return total * current;
}, 6);

console.log(result7);

const result8 = n.reduce((total, current) => {
    return total - current;
}, 7);

console.log(result8);


const array = [12, 47, 95, 97, 32, 17];
const res = array.some(item => item > 99);
console.log(res);

const list = [5, "password", true, "country", 15];
const list1 = list.some(item => typeof(item) === "number");
console.log(list1);

const result = array.every(item => typeof(item) === "number");
console.log(result);

const list2 = list.every(item => typeof(item) === "string");
console.log(list2);


const a = [7, 8, 9, 10, 17];
console.log(a.fill(5, 2, 4));

const numberList = [95, 97, 83, 51, 62, 27, 25];
const foundNumber = numberList.find(item => item < 80);
console.log(foundNumber);


