// export default function (removeBtnArray, url) {
// 	removeBtnArray.forEach(btn => {
// 		btn.addEventListener("click", async () => {
// 			const isDelete = confirm("Are you sure ?");

// 			if (isDelete) {
// 				const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
// 				btn.parentElement.parentElement.remove();
	
// 				await fetch(`${url}/${fakeID}`, {
// 					method: "DELETE"
// 				});
// 			} else {
// 				alert("Good !");
// 			}
// 		});
// 	});
// }

export default function (removeBtnArray, url, deleteModal) {
	removeBtnArray.forEach(btn => {
		const btnYes = document.querySelector(".yes");
		const btnNo = document.querySelector(".no");
		btn.addEventListener("click", async (e) => {
			
			//const isDelete = confirm("Are you sure ?");
			const isDelete = deleteModal.classList.add("modal_wrapper-active");
			
			if (isDelete && e.target.class === btnYes) {
				
				const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
				btn.parentElement.parentElement.remove();
			
				
		
			await fetch(`${url}`, {
				method: "POST",
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({ isComplete: false, isDelete: false })
			});
	
				await fetch(`${url}/${fakeID}`, {
					method: "DELETE"
				});
			} else {
				btn.addEventListener("click", (e) => {
					
					
					if (e.target.matches(".modal_wrapper")){
						deleteModal.classList.remove("modal_wrapper-active");
					}
				});
			}
			
			// signInModal.addEventListener("click", (e) => {
			// 	e.preventDefault();
				
		
			
			// 	if (e.target.matches(".modal_wrapper")){
			// 		signInModal.classList.remove("modal_wrapper-active");
			// 	}
			// });
			//let state1 = true;

			// if (isDelete) {
			// 	const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
			// 	btn.parentElement.parentElement.remove();
			
	
			// 	await fetch(`${url}/${fakeID}`, {
			// 		method: "DELETE"
			// 	});
			// } else {
			// 	alert("Good !");
			// }

			// if (state1) {
			// 	const fakeID = parseInt(btn.parentElement.previousElementSibling.firstElementChild.textContent);
			// 	btn.parentElement.parentElement.remove();
			// 	await fetch (`${url1}/`, {
			// 		method: "POST",
			// 	headers: {
			// 		"content-type": "application/json"
			// 	},
			// 	body: JSON.stringify({ isDelete: true })
			// 	});

			// }
				
	});
});
}
