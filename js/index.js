// const head = document.getElementById('parent');
// console.log(head);

// const classDom = document.getElementsByClassName("item");
// // console.log(classDom);
// for (let item of classDom){
//     item.style.color = "green"; 
// }

// const myTags = document.getElementsByTagName("li");
// // console.log(myTags);
// for(let i = 0; i < myTags.length; i++){
//     // console.log(myTags[i]);
//     let element = myTags[i];
//     element.style.color = "blue";
// }

// const h1 = document.querySelector("#list-item");
// console.log(h1);

// const li = document.querySelectorAll(".item");
// // console.log(li);
// for(let i = 0; i < li.length; i++){
//     let iitemAll = li[iitemAll];
//     iitemAll.style.color = "red";
// }


// const parent = document.querySelector(".grandparent");
// console.log(parent.children[0]);

// const gp = document.querySelector(".grandparent");
// const children = gp.querySelectorAll(".item");
// console.log(children);

// const children = document.querySelector(".item");
// const parent = children.parentElement.parentElement;
// console.log(parent);

// const children = document.querySelector(".item");
// const gp = children.closest(".grandparent");
// console.log(gp);

// const chacha = document.getElementById("parent-two");
// console.log(chacha.previousElementSibling);

// const h3 = document.createElement("h3");
// h3.innerText = "made by js";

// const container = document.querySelector(".grandparent");
// container.appendChild(h3);
// console.log(h3);

// const header = document.createElement("h2");
// header.innerText = "Made by JS";

const container = document.querySelector(".grandparent");
const newDiv = document.createElement("div");
newDiv.innerHTML = `
    <h1>Hello World</h1>
    <h2>How Are You?</h2>
`
// container.appendChild(newDiv);
let h1 = document.getElementById("parent-one");

container.insertBefore(newDiv.h1);