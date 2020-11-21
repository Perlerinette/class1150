/*
ARRAYS
*/

/*
what is an array?
it has [] brackets
it can hold multiple datatypes
arrays can list datatypes in an ordered, numbered way
*/

let students = ['Tony', 'Marshall', 'Lau', 23, true, ['Ryan', 'Madelyn']];
console.log(typeof students); // typeof doesn't tell me my variable, it returns ti's an array -> object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[5]);

let name = students[5][1]; // will grab Madelyn
console.log(name);

// recall for-of loop -> gives the values of the array
let food = ['pecan pie', 'shrimp', 'quasedilla', 'cheese cake', 'hotdog'];

for (f of food){
    console.log(f + ' is amazing');
}

//array methods
//PUSH() adds item at the end of the array
food.push('chocolate');
console.log(food);

//SPLICE() removes a certain number of items and add one
food.splice(1,2,'bananas'); // takes 3 arguments: the position of insertion, the number of things to remove, item(s) to add
console.log(food);

food.splice(3,0,'pizzas'); 
console.log(food);

//POP() removes the last element of an array
food.pop();
console.log(food);

//SLICE() returns section of array
food = food.slice(2,4); // the 1st number is the first element to slice from the array, while the second number is the stop position (not to be included)
console.log(food);

// forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers
food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => {
    console.log(`the ${food} is at the position ${index}`);
})

let movies = ['300', 'snowwhite', 'notebook', 'spiderman', 'dino dana'];

movies.push('rudolf');
console.log(movies);

movies.splice(3, 1, 'Cinderella');
console.log(movies);

movies.forEach( movie => console.log(movie));
console.log(movies.length);

// let's do the following with an array
// we will check if we are working with an array
// flip the values within the array ( what was in index 4 is now in 0,3 to 1, etc)
// using a method only, let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5); // another way to declare an array let arr = [0,1,2,3,4,5]

if( arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}