const readline = require('readline-sync');

var weight = readline.question("Your weight?  (kg) = ");
var height = readline.question("Your height?  (cm) = ");
var mbi = weight / ((height / 100) **2);

console.log("Hello! YOur MBI is: " + mbi);