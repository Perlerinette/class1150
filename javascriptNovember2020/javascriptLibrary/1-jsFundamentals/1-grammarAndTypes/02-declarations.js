/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
// definition of variables
var a = 1;  //bucket is a, content is 1
var b = 2;  //numbers, strings, text, true-false values..etc
// can store and access

console.log(a+b);   //

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) Javascript is case-sensitive --'hello' and "Hello" are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned to a value

Assignment refers to giving a variable a value.  This can be after initialization
*/

var x;
console.log("Declaration 1:", x); //undefined = bucket is empty

x = 10;
console.log("Initialization 1:", x);

x = 12;
console.log("Assignment 1:", x);

var y;
console.log("Declaration y:", y); 

y = 'hello';
console.log("Initialization y:", y);

y = 12;
console.log("Assignment y:", y);

/*
Var, let, const:

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
const = 'new' , declares unchangeable variables

*/

let tonight = 'great'; //more predictable behavior than var
const elevenFifty = 'amazing';
console.log(tonight, elevenFifty);

tonight = 'lovely'; //let so can be reassigned
console.log(tonight, elevenFifty);

elevenFifty = 'super';
console.log(tonight, elevenFifty);