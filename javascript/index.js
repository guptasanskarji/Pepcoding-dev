////////////////////// 08/02/2022 /////////////////////////////////////
// javascript (1995) --> frontend + backend + database
//starting Javascript

// var let const

// Variable declaration
var a;       // int string float ?

//Variable initialization
a = 10;
console.log(typeof a);      // type-of operator --> it tells us the type of data stored in a variable
console.log(a);

a = 'hello';       // re-initialize of variable 'a'
console.log(typeof a);
console.log(a);

a = true;
console.log(typeof a);
console.log(a);

a = null;
console.log(typeof a);
console.log(a);

//Number
var num = 10;
console.log(num); 

//float
var float = 2.4;
console.log(float);

//Boolean
var t = true;
console.log(t);
var f = false;
console.log(f);

//string --> single quotes('') , double quotes("") , backtick(``)
var str = 'a';
console.log(str);
var str = "how r u?\nI m absolutely fine."       // backslash n(\n) used for new line
console.log(str);

//use of backticks
var b = `lets do 
something new`;                    
console.log(b);

var num = 200;
console.log(`Half of ${num} is ${num/2}`);

// var has some problems

// 1). Redeclaration is allowed
var r='hello';
console.log(r);

var r=100;
console.log(r);

// overcome krne ke liye -->  we use let keyword
let l=100;
console.log(l);

//let l="200";             // SyntaxError: Identifier 'l' has already been declared
//console.log(l);

l=300;                 // we can reinitialize a variable but we can't redeclare a variable
console.log(l); 

// loops in js
var num = 10;
for (var i=0;i<num;i++){
    if(i%2==0){
        console.log("num is even");
    }
}
console.log(i);

// 2nd problem with var keywords
// var keyword is function scoped (globally) and 
// let keyword is block scoped (inside the existing block only)
let j=20;
for (var i=0;i<num;i++){
    let j = 20;
    if(i%2==0){
        let hello = 1000;
        console.log(i);
        console.log(hello);
    }
}

 
// const keyword = na hi redeclare na hi reinitialize
const m=2;
console.log(m);
// m=4;                         //TypeError: Assignment to constant variable.
console.log(m);








