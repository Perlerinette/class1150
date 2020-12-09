// const header = document.getElementById('header');
// console.log(header);

// document.getElementById('header').style.color="green";
// header.innerText = "hello world";

// const errorList = document.getElementsByClassName('error-list');
// console.log(errorList);

// errorList[1].innerText = "Success!";

// // example 1 looping
// for(let i = 0; i< errorList.length; ++i){
//     errorList[i].style.color = 'red';
// }


// var img = document.createElement("img");
// img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
// var src = document.getElementById("header");
// src.appendChild(img);

var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
var src = document.querySelector("body");
src.appendChild(img);



// // example 2 looping
// for(error of errorList){
//     error.style.color = 'green';
// }

// // example 3 looping forEach CANNOT DO
// // errorList.forEach((error) => (error.style.color = 'purple'));

// const tags = document.getElementsByTagName("p");
// console.log(tags);
// tags[0].innerText = "Test";

// const listings = document.getElementsByTagName("li");
// console.log(listings);

// listings[0].style.fontStyle = "italic";

// const header = document.querySelector("h1"); //OR
// const header = document.querySelector("#header");
// console.log(header);

// const errorList = document.querySelector(".errorList");
// console.log(errorList);

// const errorList2 = document.querySelector("body > div > ul > li:nth-child(2)");
// console.log(errorList2);

// const headerTags = document.querySelectorAll("h1");
// console.log(headerTags);

// console.log(headerTags[0]);

// headerTags.forEach(h => {
//     h.style.color = "blue"
// });

// const listItems = document.querySelectorAll(".error-list");

// listItems.forEach(li => {
//     li.style.fontStyle = "italic"});