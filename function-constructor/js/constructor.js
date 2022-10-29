"use strict";

// class Phone {
//     constructor(brand, model, countryOfOrigin) {
//     this.brand = brand;
//     this.model = model;
//     this.countryOfOrigin = countryOfOrigin;
//     }
//     sayCountryOfOrigin () {
//         console.log(`The country of origin ${this.brand} is ${this.countryOfOrigin}`);
//     }
// }
// const phone1 = new Phone ("Xiaomi", "PocophoneF1", "China");
// const phone2 = new Phone ("Samsung", "Galaxy A23", "South Korea");
// const phone3 = new Phone ("Apple", "Iphone 13", "USA");

// phone1.sayCountryOfOrigin();
// phone2.sayCountryOfOrigin();
// phone3.sayCountryOfOrigin();

// console.log(phone1);
// console.log(phone2);
// console.log(phone3);

const car = {
    brand: "Mercedes-Benz",
    model: "S500",
    year: 2022

};

const car1 = {
    year: 2021

};
const car4 = Object.assign(car, car1);
const car3 = Object.create(car);
Object.setPrototypeOf(car1, car);
Object.getPrototypeOf(car);



