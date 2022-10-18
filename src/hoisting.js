//hoisting
//mechanisn where variables and functions can be used before
//declaring them

console.clear();
console.log(num1);
num1 = 521;
console.log(num1);
let num1;

console.log(str1);
str1 = "demo hoisting string";
console.log(str1);
let str1;

//the variables and function declaration are moved to the top
//of their scope before code excecution
// js has two steps in executing a particular script
//1->creation       2->execution

//sum(5,10);
var total = 600;
var sum = function (num1, num2) {
  console.log(total);
  total = num1 + num2;
  var total;
  console.log(total);
};

sum(78, 79);
