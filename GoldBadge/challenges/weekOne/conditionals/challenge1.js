// Relational Operators
/*
 Greater than >
 Less than: <
 Less Than or Equal  <=
 Great Than or Equal >=
*/

// Logical Operators
/*
 And &&
 Or ||
*/

// Equality Operators
/*
 Equal ==
 Not Equal !=
*/

// Strict
/*
 Equal ===
 Not Equal !==
*/

// let age = 25;
// if (age >= 21){
//     console.log('you can drink');
// }
// else{
//     console.log("you cannot");
// }

/* 
CHALLENGE 1
Who's name is longer?
BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
 */

 const nameOne = 'Laurine';
 const nameTwo = 'Matt';
 let diff = 0;

 let lengthOfNameOne = nameOne.length;
 let lengthOfNameTwo = nameTwo.length;

//  console.log(`The length of the name '${nameOne}' is ${lengthOfNameOne} letters`);
//  console.log(`The length of the name '${nameTwo}' is ${lengthOfNameTwo} letters`);

//  if(lengthOfNameOne > lengthOfNameTwo){
//      diff = lengthOfNameOne-lengthOfNameTwo;
//      console.log(`'${nameOne}' is the longest by ${diff} letters`);
//  }
//  else if(lengthOfNameOne < lengthOfNameTwo){
//      diff = lengthOfNameTwo-lengthOfNameOne;
//     console.log(`'${nameTwo}' is the longest by ${diff} letters`);
// }
// else{
//     console.log('Both names have the same length');
// }

diff = Math.abs(lengthOfNameOne-lengthOfNameTwo);
(lengthOfNameOne > lengthOfNameTwo) ? console.log(`The name '${nameOne}' is the longest by ${diff} letters`) :
(lengthOfNameOne < lengthOfNameTwo) ? console.log(`Name ${nameTwo} is the longest by ${diff} letters`) :
console.log('Both names have the same length');