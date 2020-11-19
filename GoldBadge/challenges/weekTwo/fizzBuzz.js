/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY
    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif
*/




var FB = 15;

/******* BRONZE   ********/
// if ((FB%3) == 0) {
//     if( (FB%5) == 0 ){
//         console.log('Fizz Buzz');
//     } else {
//         console.log('Fizz');
//     }
    
// } else if ((FB%5) == 0){
//     console.log('Buzz');
// } else {
//     console.log('NO FIZZ BUZZ');
// }

/******* SILVER   ********/
// switch( (FB%3) == 0 ){
//     case true:
//         switch( (FB%5) == 0){
//             case true:
//                 console.log('Fizz Buzz');
//                 break;
//             case false:
//                 console.log('Fizz');
//                 break;
//         }
//     break;
//     case false:
//         switch( (FB%5) == 0){
//             case true:
//                 console.log('Buzz');
//                 break;
//             case false:
//                 console.log('NO FIZZ BUZZ');
//                 break;
//         }
//     break;
      
// }

switch(true) {
    case FB%15 == 0://FB%3 && FB%5 == 0:
        console.log('Fizz Buzz');
        break;
    case FB%3 == 0:
        console.log('Fizz');
        break;
    case FB%5 == 0:
        console.log('Buzz');
        break;
    default:
        console.log('No fizz buzz');
        break;   
}


/******* GOLD   ********/
// (((FB%3) || (FB%5)) == 0) ? console.log('Fizz Buzz') :
// ((FB%3) == 0 && (FB%5) != 0) ? console.log('Fizz') :
// ((FB%5) == 0 && (FB%3) != 0) ? console.log('Buzz') :
// console.log('NO FIZZ BUZZ');