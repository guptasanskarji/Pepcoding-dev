//////////////////// 12/02/2022 /////////////////////////////

//   FUNCTIONS :- 3 types of function  //

// 1.Normal function

//Function definition :-- 
       //         function_name(param1, param2){
       //           do something
       //         }

// Function invoke :--
      // function_name(arg1, arg2);

function add (a,b){
    console.log(a + b);
}

add(2, 6);

//
//  --> Functions can be returned
//  --> Function can be passed as parameters/arguments

function calculator(str,a,b){
    if(str == 'add'){
         return function add(a,b){
             console.log( a+b);
         }
    }
    else if(str == 'sub'){
        return function sub(a,b){
             console.log(a-b);
        }
    }
}

let returnedFunc = calculator('add',2,4);
console.log("returned function is \n" + returnedFunc);
returnedFunc();