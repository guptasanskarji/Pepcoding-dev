/*

/////// 1  /////////////

let randomValue = { name: "Lydia" };
randomValue = 23;

if (!typeof randomValue === "string") {
  console.log("It's not a string!");
} else {
  console.log("Yay it's a string!");
}

///////////// 2 //////////////////////

const user = {
	email: "my@email.com",
	updateEmail: function (email){
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)

/////////////// 3 /////////////////////

const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
*/
///////////////// 4 //////////////////////

// let count = 0;
// const nums = [0, 1, 2, 3];

// for(var i in nums){
// 	if (i) count += 1
// }

// console.log(count)

// /////////// 5 //////////////////

//  const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// /* 4 */ emojis.length = 0;             

/////////////// 6 ///////////////

/*
const add = function (x) {
    return x + x;
}

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}
myFunc();
myFunc(3);

///////////// 7 /////////////

const person = {
    name: 'Lydia Hallie',
    address: {
      street: '100 Main St',
    },
  };
  
  Object.freeze(person);

  ///////////// 8 ////////////

  const person = { name: 'Lydia Hallie' };

Object.seal(person);

///////// 9 /////////////////////

const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(2));

/////// 10 //////////

const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  var randomValue = 'Lydia Hallie';
}

getInfo();

////// 11 ///////////

const add = function (x) {
    function inner (y) {
        function innermost (z) {
            console.log(x, y, z);
            return x + y + z;
        }
        innermost(6);
    }
    inner(5);
}

add(4);

////////// 12 /////////////////

const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
console.log('We have to buy bananas!');
} else {
console.log(`We don't have to buy bananas!`);
}

/////////////////// 13 /////////////

const person = {
    firstName: 'Lydia',
    lastName: 'Hallie',
    pet: {
      name: 'Mara',
      breed: 'Dutch Tulip Hound',
    },
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log(person.pet?.name);
  console.log(person.pet?.family?.name);
  console.log(person.getFullName?.());
  console.log(person.getLastName?.());

  ////////// 14 /////////////////

  let num = 1;
const list = ['🥳', '🤠', '🥰', '🤪'];

console.log(list[(num += 1)]);

////////////// 15 //////////////////

function sumValues(x, y, z) {
    return x + y + z;
  }
  sumValues([1, 2, 3])

//////////////// 16 ////////////

const person = {
    name: 'Lydia',
    age: 21,
  };
  
  const changeAge = (x = { ...person }) => (x.age += 1);
  const changeAgeAndName = (x = { ...person }) => {
    x.age += 1;
    x.name = 'Sarah';
  };
  
  changeAge(person);
  changeAgeAndName();
  
  console.log(person);

  /////////// 17 ///////////

  const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);

///////////// 18 ////////////

const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
  };
  
  const colors = ['pink', 'red', 'blue'];
  
  console.log(colorConfig.colors[1]);

  /////////// 19 /////////////

  function nums(a, b) {
    if (a > b) console.log('a is bigger');
    else console.log('b is bigger');
    return
    a + b;
  }
  
  console.log(nums(4, 2));
  console.log(nums(1, 2));

  ///////// 20 //////////

  const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const [x, y] of Object.entries(person)) {
    console.log(x, y);
  }

  /////// 21 ////////////

  let newList = [1, 2, 3].push(4);

console.log(newList.push(5));

////////////// 22 //////////////

console.log('I want pizza'[0]);

//////////// 23 ///////////

function checkAge(age) {
    if (age < 18) {
      const message = "Sorry, you're too young.";
    } else {
      const message = "Yay! You're old enough!";
    }
  
    return message;
  }
  
  console.log(checkAge(21));


//////////// 24 ////////////////
const person = {
    name: 'Lydia',
    age: 21,
  };
  
  let city = person.city;
  city = 'Amsterdam';
  
  console.log(person);

  /////////// 25 //////////

  const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };

console.log(admin);

///////// 26 /////////

console.log(3 + 4 + '5');


///////// 27 ////////////

const person = {
    name: 'Lydia',
    age: 21,
  };
  
  for (const item in person) {
    console.log(item);
  }

  ///////// 28 //////////////

  const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

/////////////// 29 //////////////

const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

/////////////// 30 ///////////////

var num = 8;
var num = 10;

console.log(num);
*/