// let string = 'this is a string';
// let myNumber = 3;
// let myBoolean = true;
// let myArray = [0, "bonjour", true, []];
// let myObject = {name: 'Lau', isOn: true};
// let myUndefined = undefined;
// let myNull = null;

// console.log(typeof myBoolean);

/*
CHALLENGE 2
Types Challenge
​
​
BRONZE
​
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
​
​
--------------------------------------------------------------------------
​
SILVER
​
​
Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/



let myInfo = {
    name: 'Laurine',
    age: 36,
    isStudent: true,
    class: {mode: 'PT', classPerWeek: 3, length: '6 months'}
}


let myDataType = typeof (myInfo.age);
console.log(myDataType);

// if(myDataType === 'string'){
//     console.log('this is a string');
// }
// else if(myDataType === 'boolean'){
//     console.log('this is a boolean');
// }
// else if(myDataType === 'number'){
//     console.log('this is a number');
// }
// else if(myDataType === 'object'){
//     console.log('this is an object');
// }
// else {
//     console.log('what are you?');
// }

(myDataType === 'string') ? console.log('this is a string'):
(myDataType === 'boolean') ? console.log('this is a boolean') :
(myDataType === 'number') ? console.log('this is a number') :
(myDataType === 'object') ? console.log('this is an object') :
console.log('what are you?');