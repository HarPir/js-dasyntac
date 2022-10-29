"use strict";

// resolve => ամեն ինչ բարեհաջող է անցել
// reject => մեր խնդրանքը մերժվել է

/*console.log("Պատրաստվում ենք միանալ սերվերին․․․");

const request = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Խնդրում ենք սպասել․․․");
	
		const product = {
			brand: "Google",
			type: "Mobile",
			name: "Pixel 7",
			storage: "512GB",
			price: 1088
		};

		resolve(product);
		// reject();

	}, 1000);
});

request.then(product => {
	product.status = "Վաճառված է";
	return product;
}).then(data => {
	data.isAnlocked = true;
	console.log(data);
}).catch(() => {
	throw new Error("Ինչ-որ բան սխալ է գնացել, խնդրում ենք փորձել կրկին");
}).finally(() => {
	console.log("Կապի ավարտ");
});

// const test = time => {
// 	return new Promise (resolve => {
// 		setTimeout(() => resolve(), time);
// 	});
// }

// Promise.all([test(1000), test(2000), test(3000), test(10000)])
// .then(() => console.log("Բոլորը աշխատեցին"));

// Promise.race([test(10), test(2000), test(3000), test(10000)])
// .then(() => console.log("Race is working..."));


// Օրինակ, որ Promise չի աշխատում միայն setTimeout-ով 
console.log("Before");

const data = new Promise((resolve, reject) => {
	const arr = [7, 5, 9, 2, 1, 3, 6, 0];

	if (Math.max(...arr) > 20) {
		resolve("Ամենամեծ թիվը մեծ է քսանից");
	} else {
		reject("Զանգվածի ոչ մի թիվը մեծ չէ քսանից");
	}
});

data.then(data => {
	console.log(data);
}).catch((e) => {
	console.log(e);
}).finally(() => {
	console.log("Օկեյ");
});

console.log("After");*/

const list = new Promise ((resolve, reject) => {

		const product = {
			brand: "Xiaomi",
			type: "Phone",
			model: "Poco F1",
		};

		resolve(product);
	   //reject();	
});

list.then(productDetails => {
	productDetails.color = "black";
	return productDetails;
}).then(productDetails => {
	productDetails.year = 2022;
	return productDetails;
}).then(productDetails => {
	productDetails.isAvailable = true;
	return productDetails;
}).then (productDetails => {
	console.log(productDetails);
}).catch (() => {
	throw new Error("Կապի խափանում, խնդրում ենք ստուգել ինտերնետ կապը");
}).finally(() => {
	console.log("Տվյալների բեռնումն ավարտված է");
});


const requestToDb = new Promise ((resolve, reject) => {
	setTimeout (() =>{
		console.log("Կատարվում է հարցում...");

		const comp = {
			brand: "hp",
			type: "laptop",
			model: "250g4",
		};

		resolve(comp);
		//reject();

	}, 1500);

});

requestToDb.then(comp => {
	comp.color = "grey";
	return comp;
}).then(comp => {
	comp.memory = "4GB";
	return comp;
}).then (comp => {
	comp.size = 15.6;
	return comp;
}).then(comp => {
	console.log(comp);
}).catch(() => {
	throw new Error ("Առաջացել է խնդիր, խնդրում ենք ստուգել ինտերնետ միացումը");
}).finally (() => {
	console.log("Ներկայացված են մոդելի հակիրճ տվյալները");

});

//Promise.race ([list, requestToDb]).then(() => console.log(""));

const a = h => {
		return new Promise (resolve => {
			setTimeout(() => resolve(), h);
	 	});
				 
	 };

const c =  Promise.race([a(1500), a(2500), a(3500), a(5500)])
.then(() => console.log("ok"));

 