console.log(a); //undefined 
greet(); 
console.log(hello);
hello();           // hello is not a function
var a = 10;

// function
function greet() {
  console.log("hello pepcoders");
}

// function expression
var hello = function() {
    console.log("You guys rock");
}

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables to the top of their scope, prior to execution of the code.
