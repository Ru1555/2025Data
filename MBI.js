const readline = require('readline-sync');

var weight = 0;
while (weight < 10) 
    

var height = readline.questionInt("Your height? (cm) = ");
var mbi = weight / ((height / 100) **2);

console.log("Hello! YOur MBI is: " + mbi);