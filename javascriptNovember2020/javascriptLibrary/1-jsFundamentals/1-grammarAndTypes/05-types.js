/*
TYPES

1-grammarAndTypes
    05-types.js
*/

//Boolean
//boolean can represent true/off, on/off, 0/1
var on = true; //reserved words in js (dark blue)
console.log(on);

let off = false;
console.log(off);


//Undefined
/* 
 Undefined usually means a variable has been declared but it's not assigned a value. Hint that something is forgotten.
*/

let grass;
console.log(grass);

var undef = undefined; 
console.log(undef);

//Null
//Null means a variable has been declared and assigned a value of null. Here it is intentional to make it empty, it's not forgotten
var empty = null;
console.log(empty);

/*
Null and undefined both represent variables with no value inside. Think of it this way -- null values are for gag gifts that are boxes, intentionally given with nothing inside (because that's the gag).background1Undefined values are gifts given when the person giving the gift has forgotten to put the gift inside (oops!)
*/

//Numbers
let myLiteralAge = 90;
console.log(myLiteralAge);

let precise = 999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2*10 + 0.1*10) / 10;
console.log(numbersAreHard);

//Dtrings
//Strings is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quote';
console.log(stringOne, stringTwo);

//string concatenation vs addition
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

let third = 1050 + '100'; // will treat number as a string
console.log(third);
console.log(typeof third); // tells type of the content of the bucket

//Interpolation
//lets you use strings with dynamic content (they require backticks)

//exeample 1
let age = 32;
let string = `my age is: ${age}`;
console.log(string);

//Objects
// What is an object?
/*It is a container that stores property and their values 
 (it can hold multiple types)

 Denoted by {}
 Have keys and values -- color(key):'blue' (value), separated with a colon, each key-value is separated with a comma.
EX: car -> it has a weight, a color, a value, etc.
*/

let hulk = {
    color: 'green',
    age: 42,
    isStrong:true
}

console.log(hulk);
console.log(hulk.age);

//Arrays
/*
Arrays stores multiple values in an ordered way. They hold multiple data types.

Denoted by []
They have values ('blue', 'green',.), separated by commas.

Array indexing starts at 0
*/

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush'];
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[0]);
console.log(typeof stepsToBrushTeeth);