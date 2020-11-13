/*
COMMENTS

1-grammarAndTypes
    01-comments-and-console.js
*/

//value of a comment:
//communicates to anyone reading our code

//types of comments:
//1) single-line comment (more common) 
/*
2) multi-line comment 
*/ 

//console.log
//outputs some message to the console
console.log("this is a console.log message!");

console.log("you can separate parts of a console message with commas,", "just like this");

console.log(13,15,16,18);

//console.log and debugging
// we can debug with console.log message in 2 big ways:
//1) we can check the status of some javascript 'thing'
//2) we can check a process we have built with repeated console.log messages

//example 1:
var sampleName = 'Tyler'; //a var is a bucket that holds something
console.log(sampleName);

//example 2:
var sampleNum = 1;
sampleNum++;
sampleNum++;
console.log(sampleNum);