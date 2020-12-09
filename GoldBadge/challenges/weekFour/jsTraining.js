/*
Write a function that adds together all the numbers between any two numbers. Your function will accept two parameters. One for the starting number and another for the ending number. console.log the ifnal sum of the numbers.
*/



function countingSum(firstNumber, secondNumber){
    let sum = 0;
    for(let i = firstNumber; i<=secondNumber; i++){
        sum += i; 
    }
    console.log(sum);
}

countingSum(1,100);
countingSum(35,77);
countingSum(234,567);

/*
Create a pet object
It should contain the following properties:

animal - string
name - string
gender - string
age - integer
likes - array

*/

var myPet = {
    animal: "cat",
    name: "Maggie",
    gender: "female",
    age: 17,
    likes: ["playing", "eating", "sleeping"] 
}

console.log(myPet.likes[2]);
console.log(myPet.likes);


/*
Area of a trapezoid
write a function that accepts the parameters b1, b2, h
your function should console.log the area of a trapezoid 1/2(b1+b2)h
*/

function areaCalculate(b1, b2, h){
    console.log(0.5*(b1+b2)*h);
}

areaCalculate(2,5,3);


/*
A farmer is asking you to tll him how many legs can be counted among all his animals. The farmer breeds 3 species:
chickens = 2 legs
cows = 4 legs
pigs = 4legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals
*/



/*
area of the triangle
*/

