/*
ARROW FUNCTIONS
*/

// normal function declaration
function coffee(){
    return 'coffe is not good';
}


// normal function expression
let tea = function(){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

// arrow functions are always anonymous
// arrow function expression

let hotChocolate = () => {
    return 'miam hot chocolate';
}
console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};
console.log(animals(3,2));


// concise vs body block
// concise body

let apples = x => `there are ${x} apples`;
console.log(apples(5));

//block body
let bananas = x => {
    return `there are ${x} bananas`;
}
console.log(bananas(8));

// return must be explicitly written in a block body function

let func = () => 'hi';
console.log(func());

let otherFunc = () =>
'hi';

console.log(otherFunc());