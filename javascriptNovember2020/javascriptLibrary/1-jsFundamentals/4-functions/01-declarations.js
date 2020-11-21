/*
FUNCTIONS
*/

//General ideas: at their broadest level, functions do the following:

//1) they take some input which the function will handle/process
//2) they process the input given to them
//3) they usually but not always return some value
//4) they can be invoked (used) as many times as we want, cutting down the code repetition

//example 1
function newFunc(num){
    return num+1;
}

console.log(newFunc(2));
console.log(newFunc(10));

//example 2
function sentence(firstName, lastName){
    return (`My first name is ${firstName} and my last name is ${lastName}`);
}

console.log(sentence('laurine', 'leung'));
let fullName = sentence('laurine', 'leung');
console.log(fullName);

// let's build another function that takes a complex type -- an array in this case

let arr = [1,true,{key: 'string'}, [0, false, null], 'hello'];
let arr2 = [5,6,7,8,9,10];

function iteratorFunc(newArr){
    for (let element of newArr){
        console.log(element);
    }
}

iteratorFunc(arr);
iteratorFunc(arr2);
