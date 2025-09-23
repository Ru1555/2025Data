const readline = require('readline-sync');

var weight = 0;
while (weight < 10 || weight > 120) 
{
    weight =readline.questionInt("Your weight? (10-120kg) = ");
} 

var height = 0;
while (height < 100 || height > 200) 
    {
        height =readline.questionInt("Your height? (100-200kg) = ");
    } 

var mbi = weight / ((height / 100) **2);

console.log("Hello! YOur MBI is: " + mbi);