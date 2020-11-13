/*
SWITCH STATEMENTS
*/

let friend = 'Lau';


switch(friend){
    case 'Tom':
        console.log('Hi Tom');
        break;
    case 'Kim':
        console.log('Hi Kim');
        break;
    case 'Alex':
        console.log('Hi Alex');
        break;
    default:
        console.log(`Sorry, ${friend}, do I know you?`);  //ATtention! use ticks (below ESC) and not single quote
        
}

switch(typeof yep == 'string' || typeof yep == 'boolean'){
    case true:
        console.log('yep is a string or a boolean');
        break;
    default:
        console.log('yep is not a string or a boolean');
}