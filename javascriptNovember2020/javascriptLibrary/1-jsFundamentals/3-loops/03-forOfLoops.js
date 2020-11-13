/*
FOR OF LOOPS

of requires that your "thing" you're looping through be iterable -- that means it needs to be numbered
*/

// let student = {name: 'Peter', isAwesome: true, degree: 'Javascript', week: 1};

// for(item of student){
//     console.log(item);
// }

let catArray = ['tabby', 'british', 'rag doll', 'burmese'];

for(cat of catArray){
    console.log(cat, 'says meow');
}