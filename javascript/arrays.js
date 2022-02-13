/////////        ARRAYS (12/02/2022) :- It is a collection of elements       ////////

let cars = ["BMW","AUDI", "MG", 1, 2, 3, true];
//in Js u can store different values of different types in array
console.log(cars);

// accessing the elements in an array
console.log(cars[0]);
console.log(cars[3]);

// Replacing elements in an array
cars[3] = "Mahindra";
console.log(cars[3]);


//adding element in an array 
cars[7]="honda";
console.log(cars);

// Methods of an array

// 1). pop method :-> this method removes the element from last of array
cars.pop();
console.log("after popping the elements\n" + cars);

// 2). push method :--> it pushes the new element at the end of an array
cars.push("TATA");
console.log("after pushing an element");
console.log(cars);

// 3). unshift method :--> it add element at the starting of an array
cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// 4). shift method :--> it removes element from 0th index of element
cars.shift();
cars.shift();
console.log(cars);

/////////       2D ARRAY              //////

let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////













