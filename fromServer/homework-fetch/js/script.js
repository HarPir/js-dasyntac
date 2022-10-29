"use strict";

const postLink = "https://jsonplaceholder.typicode.com/posts/1";
const imgLink = "https://jsonplaceholder.typicode.com/photos/";
const comLink = "https://jsonplaceholder.typicode.com/comments/";

const mainDiv = document.createElement("div");
const postBlock = document.createElement("div");
const imgBlock = document.createElement("div");
const comBlock = document.createElement("div");

document.body.prepend(mainDiv);
mainDiv.append(postBlock);
mainDiv.append(imgBlock);
mainDiv.append(comBlock);

let i = 1;

const getPosts = setInterval(() => {
    fetch(`${postLink}${i}`)
    .then(response => response.json())
    .then(response => {
        postBlock.innerHTML += `
            <div style = "margin-bottom: 45px">
                <h2>${response.title}</h2>
                <p>${response.body}</p>
            
            </div>
        `;
    });

    if (i === 1) {
        clearInterval(getPosts);
    }
 });

 let b = 1;

 const getPhotos = setInterval(() => {
    fetch(`${imgLink}${i}`)
    .then(data => data.json())
    .then(data => {
        imgBlock.innerHTML += `
            <img src = ${data.url} alt = "${data.title}" style = "max-width: 600px; width: 100%; display: block; margin-bottom: 15px">
        `;
    });

    if (b === 3) {
        clearInterval(getPhotos);
    }
    b++;
 }, 1000);

 let c = 1; 

 const getComs = setInterval(() => {
    fetch(`${comLink}${i}`)
    .then(comList => comList.json())
    .then(comList => {
        comBlock.innerHTML += `
            <div style = "margin-bottom: 40px">
                <h2>${comList.name}</h2>
                <p>${comList.body}</p>
            </div>
        `;
    });

    if (c === 3) {
        clearInterval(getComs);
    }
    c++;
 }, 1000);


 const info = {
    userId: 15,
    author: "Wikipedia",
    title: "Յուպիտեր",
    body: "Յուպիտեր (լատ.՝ Jupiter) կամ Լուսնթագ, Արեգակից հեռավորությամբ հինգերորդ և արեգակնային համակարգի ամենամեծ մոլորակը։ Յուպիտերի զանգվածը կազմում է Արեգակի զանգվածի ընդամենը մեկ հազարերորդը (0,1%), միևնույն ժամանակ այն երկուսուկես անգամ մեծ է արեգակնային համակարգի բոլոր մնացած մոլորակների ընդհանուր զանգվածից։ Սատուրնի, Ուրանի և Նեպտունի հետ միասին դասվում է գազային հսկաների դասին։ Այս չորս մոլորակները երբեմն միասին նաև անվանվում են յուպիտերյաններ կամ արտաքին մոլորակներ։ \n Յուպիտերը մարդկությանը հայտնի է հնագույն ժամանակներից, ինչը և արտացոլված է տարբեր մշակույթների դիցաբանության մեջ և կրոնական պատկերացումներում՝ Միջագետքի, Բաբելոնի, Հունաստանի և այլն։ Հռոմեացիները մոլորակն անվանել են Հռոմեական աստվածների բարձրագույնի՝ Յուպիտերի անունով։"
  };

 fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    headers: {
        "content-type":"application/json",
      
    },
    body: JSON.stringify(info)
 })
 .then(newPost => newPost.json())
 .then(newPost => console.log(newPost));






