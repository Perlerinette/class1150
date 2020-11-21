/*
Functions:

- JavaScript functions are defined with the function keyword and can be written as a function declaration or a function expression

- Function declaration are hoisted in our code, and run ONLY when we call them  (invoke them),
so any function in our code sits and waits to be run until we call it by name.

- Function expression are not hoisted, and are generally stored in variables

- Functions without names are known as anonymous functions

*/


// Function declaration
function sayHello(){
    console.log('Hello');
}

sayHello();

// Function expression
let bonjour = function() {
    console.log('Bonjour');
}

bonjour();

/*
Parameters

- Think of parameters as a newly declared variable that we have not given a value to yet
    - the value that we pass into our function when we call the function to run (which is known as an argument), is the value that gets assigned to the parameter

    - General naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number

*/

function myDog(husky){
    console.log(`My dogs name is ${husky}`);
}

myDog("Princess");
myDog("Luna");

function allMyDogs(smallHusky, bigHusky, borderCollie){
    console.log(`My dogs are named ${smallHusky}, ${bigHusky} and ${borderCollie}`);
}

allMyDogs("Mira", "Luna", "Charlie");

/*
Return

Functions can also manipulate the data sent to them, and return a new value
*/

function calculator(one, two, three){
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return average;
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);


/*
Arrow Functions

- Arrow functions (or fat arrow function) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations
    this means that arrow functions do not get hoisted

- They are two types of arrow functions: concise body and block body
    - the return happens automatically  with a concise body arrow function
    - the return does not happen automatically with a block body arrow function
*/

// concise body
let speak = (name) => console.log(`${name} goes wooof`);
speak("Laurine");

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner("Laurine", "Leung");
console.log(fullName);

// block body
let speaker = (name) => {
    console.log(`${name} says bonjour`)
}
speaker("Laurine");

let nameJoin = (first, last) => {
    return `${first} ${last}`;
}
let fullNames = nameJoin("laurine" , "Leung");
console.log(fullNames);

// PRACTICE I
// Write a function that takes two parameters  (Length and Width) that returns
// the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function area(width, length){
    return width * length;
}

let area1 = area(4, 8);
let area2 = area(2, 5);
console.log(area1, area2);


// Practice II

// Write a function that will convert dog years to human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21


function convert(dogYears){
    let humanYears = (dogYears -2)*4 +21;
    return humanYears;
}

console.log(convert(3));
