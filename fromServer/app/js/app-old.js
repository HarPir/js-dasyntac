"use strict";
// CRUD = Create (POST), Read (GET), Update (PUT), Delete (DELETE)
/*const root = document.querySelector("#root");

const title = document.createElement("h1");
const subTitle = document.createElement("p");
const form = document.createElement("form");
const screenBlock = document.createElement("div");
const screenInput = document.createElement("input");
const screenAddBtn = document.createElement("button");

const listsBlock = document.createElement("div");

title.textContent = "CRUD";
subTitle.textContent = "Async Application";

form.id = "app-form";
screenBlock.id = "screenBlock";
screenInput.type = "text";
screenInput.placeholder = "Type here...";
screenAddBtn.textContent = "ADD";
screenAddBtn.id = "screenAddBtn";

listsBlock.id = "listsBlock";

root.prepend(title, subTitle);
root.append(form);
form.prepend(screenBlock);
form.append(listsBlock);
screenBlock.append(screenInput, screenAddBtn);

const url = "http://localhost:8888/todo/";

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = screenInput.value.trim();

	if (val !== "") {
		fetch(url, {
			method: "POST",
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({title: val})
		});
	}

	this.reset();
});

fetch(url)
.then(data => data.json())
.then(data => {
	data.forEach(todo => {
		listsBlock.innerHTML += `
			<div class="listsBlock__item">
				<div class="listsBlock__item__content">
					<span>${todo.id}</span>
					<input type="text" value="${todo.title}" readonly>
				</div>
				<div class="buttons">
					<button data-rm>Remove</button>
					<button data-ed>Edit</button>
					<button data-sv>Save</button>
					<button data-end>End</button>
				</div>
			</div>
		`;
	});

	return data;
})
.then(data => {
	const removeBtns = document.querySelectorAll("[data-rm]");
	const editBtns = document.querySelectorAll("[data-ed]");
	const saveBtns = document.querySelectorAll("[data-sv]");
	const endBtns = document.querySelectorAll("[data-end]");

	editBtns.forEach((btn, index) => {
		btn.addEventListener("click", function () {
			const input = this.parentElement.previousElementSibling.lastElementChild;
			
			input.classList.add("edit");
			input.removeAttribute("readonly");

			saveBtns.forEach((saveBtn, saveBtnIndex) => {
				if (index === saveBtnIndex) {
					saveBtn.style.display = "inline-block";
					btn.style.display = "none";
				}
			});	
						
		});
	});

	endBtns.forEach((btnEnd, index) => {
		btnEnd.addEventListener("click", function () {
		
			 const input = this.parentElement.previousElementSibling.lastElementChild;
			editBtns.forEach((btnEnd, endBtnIndex) => {
				if (index === endBtnIndex) {
					input.style.color = "green";
				btnEnd.remove("data-ed");
					
				}
				
			});

		});

	});

	function changeDB (btnArray, method) {
		btnArray.forEach(btn => {
			btn.addEventListener("click", function () {	
				data.forEach(todo => {
					const fakeId = btn.parentElement.previousElementSibling.firstElementChild.textContent;
					const forEddited = btn.parentElement.previousElementSibling.lastElementChild;
					if (parseInt(fakeId) === todo.id) {
						fetch(`${url}${todo.id}`, {
							method: method,
							headers: {
								"content-type":"application/json"
							},
							body: method === "PUT" ? JSON.stringify({title: forEddited.value.trim()}) : ""
						});
					}
				});
			});
		});
	}

	changeDB(removeBtns, "DELETE");
	changeDB(saveBtns, "PUT");
});


// const a = 7;

// try {
// 	//console.log(a);
// 	console.log(b);
// 	//console.log(c);
// } catch (err) {
// 	//console.log(err);
// 	throw new Error(err + " Barev dzez")
// } 

// // finally {
// // 	console.log("Ամեն ինչ շատ վատ էր");
// // }

// console.log(10);

const b = 5;

try {
	console.log(c);
	//console.log(b);
	
} catch (error) {
	throw new Error ("error");
}

const num = 18;

try {
	console.log(num);
	//console.log(num1);
} catch (error) {
	throw new Error ("ERROR");

}

const number = 27;

try {
	//console.log(number);
	console.log(num);
} catch (error) {
	throw new Error ("ERROR");

}*/

const root = document.querySelector("#root");

const UI = {
	title: document.createElement("h1"),
	subTitle : document.createElement("p"),
	form : document.createElement("form"),
	screenBlock: document.createElement("div"),
	screenInput: document.createElement("input"),
	screenAddBtn: document.createElement("button"),
	listsBlock: document.createElement("div"),

	elementOptions () {
		this.title.textContent = "CRUD";
		this.subTitle.textContent = "Async Application";

		this.form.id = "app-form";
		this.screenBlock.id = "screenBlock";
		this.screenInput.type = "text";
		this.screenInput.placeholder = "Type here...";
		this.screenAddBtn.textContent = "ADD";
		this.screenAddBtn.id = "screenAddBtn";
		this.listsBlock.id = "listBlock";
	},

	appendElements () {
		root.append(this.title, this.subTitle, this.form, this.listsBlock);
		this.form.append(this.screenBlock);
		this.screenBlock.append(this.screenInput, this.screenAddBtn);
	},

	start () {
		this.elementOptions();
		this.appendElements();
	}
};

UI.start();
/*const url = "http://localhost:8888/todo/";

function post (method) {
UI.form.addEventListener("submit", function (e) {
	e.preventDefault();
	const val = UI.screenInput.value.trim();

	if (val !== "") {
		fetch(url, {
			method: method,
			headers: {
				"content-type":"application/json"
			},
			body: JSON.stringify({title: val})
		});
	}

	this.reset();
});
}

post("POST");*/

/* 
	Ստեղծել 4 ֆունցկիա հետևյալ անուններով՝ GET, POST, PUT, DELETE ու անել այնպես
	որպեսզի էդ 4 ֆունկցիաները առանց որևիցէ խնդրի աշխատեն մեր տվյալների բազայի ու
	ամենակարևորը մեր UI-ի հետ
	Հ․Գ․ CSS-ում փոխել եմ բոլոր կլասներն ու այդիները, որպեսզի հին կոդի հետ չաշխատեն
*/



const url = "http://localhost:8888/todo/";

function GET(){
	fetch(url)
	.then(data => data.json())
	.then(data => data.map((data) => {
		return createHTMLElement(data);
	}));
}

GET();

function FetchApi(){
	fetch(url)
	.then(data => data.json())
	.then(data => changeDB(data));
}

FetchApi();

function createHTMLElement({title,id}){
	return UI.listsBlock.innerHTML += `
		<div class="listsBlockItem">
			<div class="listsBlockItemContent">
				<span >${id}</span>
				<input type="text" value="${title}" readonly>
			</div>
			<div class="buttons">
				<button class="removeBtn">Remove</button>
				<button	class="editBtn" data-ed>Edit</button>
				<button class="saveBtn" data-sv>Save</button>
				<button class ="endBtn" data-end>End</button>
			</div>
		</div>
	`;
}
	

function POST(method){
	UI.form.addEventListener("submit", (e) => {
		e.preventDefault();
		const val = UI.screenInput.value.trim();
		if (val !== "") {
			fetch(url, {
				method: method,
				headers: {
					"content-type":"application/json"
				},
				body: JSON.stringify({title: val})
			});
		}
		this.reset();
	});
	
}

POST("POST");

function changeDB (data, method) {
	const btnArray = document.querySelectorAll(".buttons");
    const removeBtn = document.querySelectorAll(".removeBtn");
    const editBtns = document.querySelectorAll(".editBtn");
	const saveBtns = document.querySelectorAll(".saveBtn");
	const endBtn = document.querySelector(".endBtn");

    removeBtn.forEach(btn => {
        btn.addEventListener("click", () =>{
            method = "Delete";
        });
    });
    
    editBtns.forEach((btn, index) => {
		btn.addEventListener("click", function () {
			const input = this.parentElement.previousElementSibling.lastElementChild;

			input.classList.add("edit");
			input.removeAttribute("readonly");

			saveBtns.forEach((saveBtn, saveBtnIndex) => {
				if (index === saveBtnIndex) {
					saveBtn.style.display = "inline-block";
					btn.style.display = "none";
                    
				}
                saveBtn.addEventListener("click", () => {
                    method = "PUT";
                });
			}); 
		});
	});

	btnArray.forEach(btn => {
		btn.addEventListener("click", function () {	
			data.forEach(todo => {
				const fakeId = btn.previousElementSibling.firstElementChild.textContent;
				const forEddited = btn.previousElementSibling.lastElementChild;
				if (parseInt(fakeId) === todo.id) {
					fetch(`${url}${todo.id}`, {
						method: method,
						headers: {
							"content-type":"application/json"
						},
						body: method === "PUT" ? JSON.stringify({title: forEddited.value.trim()}) : ""
					});
				}
			});
		});
		
	});

	endBtn.forEach((btnEnd, index) => {
		btnEnd.addEventListener("click", function () {
		
			 const input = this.parentElement.previousElementSibling.lastElementChild;
			editBtns.forEach((endBtnIndex) => {
				if (index === endBtnIndex) {
					input.style.color = "green";
					editBtns.style.display = "none";
					
				}
				
			});

		});

	});
	
}
changeDB();

