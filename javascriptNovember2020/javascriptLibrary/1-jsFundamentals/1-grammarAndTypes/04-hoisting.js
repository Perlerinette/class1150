/*
HOISTING


1- grammarAndTypes
    04-hoisting.js

*/

// example 1
console.log(scissors); // we haven't made a variable yet
var scissors = 'blue';

//example 1: breakdown
// JS polls all the variables at the top of the file
var scissors; // it gets hoisted at the top of the code
console.log(scissors); // it gets red
scissors = 'blue'; // it gets assigned after so we get an 'undefined'

//example 2
function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest();

//example 2 breakdown
function hoistTest(){
    var testVar;
    console.log(testVar);
    testVar = 10;
    console.log(testVar);
}
hoistTest();