"use strict";

const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const form = document.querySelector("form");

// box.style.boxSizing = "border-box";

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const width = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(`width: ${width}`);
// console.log(`height: ${height}`);

/* 
	offsetHeight: Number
	offsetWidth: Number
	offsetTop: Number
	offsetLeft: Number
	offsetParent: HTML TAG
*/

// btn.addEventListener("click", () => {
// 	 box.style.height = box.scrollHeight + "px";
// 	//console.log(box.scrollTop);
// });

body.style.height = 1000 + "px";
const colors = ["red", "green", "yellow", "blue", "brown", "orange", "black", "grey", "yellowgreen", "pink"];
function changeColor (height) {
	body.style.height = body.offsetHeight + "px";
	 height = height ++ ? body.style.background = colors[Math.floor(Math.random() * colors.length)]: body.style.background = "";
	
}

changeColor(100);

// btn.addEventListener("click", () => box.scrollTo({
// 	top: 0,
// }));

function m (start, end) {
	btn.addEventListener("click", () => body.scrollTo({
		top: 0,
		
	}));
end = body.offsetHeight + "px";
	// box.scrollHeight + "px" ?  btn.style.display = "block" : btn.style.display = "none";
	
	if(start < end){
		btn.style.display = "none";
	} 
	
	 if (end == 1000 + "px")  {
		btn.style.display = "block";
	}
	}
	m();

	


//box.style.color = "red"; 

// console.log(box.getBoundingClientRect());

// const aaa = window.getComputedStyle(box);
// console.log(aaa.display);

// console.log(window.getComputedStyle(box).getPropertyValue("display"));

// console.log(window.getComputedStyle(box).display);