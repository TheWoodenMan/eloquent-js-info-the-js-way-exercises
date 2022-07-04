// https://javascript.info/variables

// Working with variables
// importance: 2
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// let admin;
// let name = "John";
// admin = name;

// alert(admin);
// Show the value of admin using alert (must output “John”).
// solution
// Giving the right name
// importance: 3
// Create a variable with the name of our planet. How would you name such a variable?

// const homePlanet = "earth";
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

// let currentVisitor = "John Doe";
// solution
// Uppercase const?
// importance: 4
// Examine the following code:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

// Would it be right to use upper case for birthday? For age? Or even for both?

// const BIRTHDAY = '18.04.1982'; // make uppercase? It's a constant determined outside of the code - so you could use all uppercase.

// const AGE = someCode(BIRTHDAY); // make uppercase? it's a value that will chance over time so it's better to write age in lowercase.

// https://javascript.info/function-basics

// Is "else" required?
// importance: 4
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else  {
//     // ...
//     return confirm("Did parents allow you?");
//   }
// }

// Will the function work differently if else is removed?

// Answer - no, when a function has a "return" command it ends the function there
// so if the parameter check isn't met, the rest of the function will resolve
// as normal.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm("Did parents allow you?");
// }

// Is there any difference in the behavior of these two variants?

// Functionally - no, though for readability and to show intent, it is
// semantically better to use "else or else if"

// solution
// Rewrite the function using '?' or '||'
// importance: 4
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// Rewrite it, to perform the same, but without if, in a single line.

// function checkAge(age) {
//   return age > 18 ? true : confirm("Did parents allow you?");
// }

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||
// solution

// function checkAge(age) {
//   if (age > 18) {
//     return true || confirm("Did parents allow you?");
//   }
// }

// function min(a, b) {
//   return min (a , b);
// }
// importance: 1

// Write a function min(a,b) which returns the least of two numbers a and b.

// For instance:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// solution

// importance: 4

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// function pow(x, n) {

//   return x ** n;
// }

// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

// function webPrompt() {
//   let n = prompt("What is the target number?");
//   let x = prompt("To what power do you want to raise it to?");

//   let powerOutput = n ** x;
//   alert(`${n} to the power of ${x} is ${powerOutput}`);
// }

// Run the demo

// P.S. In this task the function should support only natural values of n: integers up from 1.

// ****************************** The JS Way ****************************
// Coding time!
// Try to code each exercise twice, once with a while
// loop and the other with a for, to see for yourself
// which one is the most appropriate.

// Carousel
// Write a program that launches a carousel for 10 turns,
// showing the turn number each time.

// function carouselSpin(n) {
//   let i = 0;
//   do {
//     i++;
//     console.log(`Whee the carousel has gone around ${i} times!`);
//   } while (i < n);
// }
// When it's done, improve it so that the number of turns
// is given by the user.

// Parity
// Check the following program that shows even numbers
//(divisible by 2) between 1 and 10.

// function oddEvenRange(from, to) {
//   for (let i = from; i <= to; i++) {
//     if (i % 2 === 0) {
//       console.log(`${i} is even`);
//     } else if (i % 2 === 1) {
//       console.log(`${i} is odd`);
//     }
//   }
// }
// This program uses the modulo operator %,
//which calculates the remainder after division of one
// number by another. It's often used to assess number
//parity.

// console.log(10 % 2); // 0 because 10 = 5 * 2 + 0
// console.log(11 % 2); // 1 because 11 = 5 * 2 + 1
// console.log(18 % 3); // 0 because 18 = 3 * 6 + 0
// console.log(19 % 3); // 1 because 19 = 3 * 6 + 1
// console.log(20 % 3); // 2 because 20 = 3 * 6 + 2
// Improve the program so that it also shows odd numbers.
// Improve it again to replace the initial number 1 by a
//number given by the user.

// This program must show exactly 10 numbers including
//the first one, not 11 numbers!

// Input validation
// Write a program that continues to ask the user for a
// number until the entered number is less than or equal
// to 100.

// function numAsk() {
//   let askNum = function () {
//     let num = prompt("Pick a number from 1 to 100");
//     if (num < 49 || num > 100) {
//       askNum();
//     } else {
//       alert(`Gz the number ${num} is < 100`);
//     }
//   };
//   askNum();
// }

// When you are done with the above, improve the program
// so that the terminating number is between 50 and 100.

// Multiplication table
// Write a program that asks the user for a number, then
// shows the multiplication table for this number.

// function multTable() {
//   let product;

//   let rangeCheck = function () {
//     let n = prompt(`Pick a number between 1 and 10`);
//     if (n < 2 || n > 9) {
//       alert(`Sorry that's out of range, try a new number`);
//       rangeCheck();
//     } else {
//       for (let i = 1; i < 11; i++) {
//         product = i * n;
//         console.log(`${i} x ${n} = ${product}`);
//       }
//     }
//   };
//   rangeCheck();
// }

// When you are done, improve the program so it only
//accepts numbers between 2 and 9 (use the previous
//exercise as a blueprint).

// Neither yes nor no
// Write a program that plays "neither yes, nor no"
// with the user. Specifically, the programs asks the
// user to enter text until either "yes" or "no" is typed,
// which ends the game.

// function yesOrNo() {
//   let answer;
//   let askQuestion = function () {
//     answer = prompt(`Yes or No ahahaha??`);
//     if (answer === "yes" || answer === "no") {
//       alert(`I don't believe it, you answered ${answer}`);
//     } else {
//       askQuestion();
//     }
//   };
//   askQuestion();
// }

// FizzBuzz
// Write a program that shows all numbers between 1 and
//100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

// function fizzBuzz() {
//   for (i = 0; i < 100; i++) {
//     if (i % 15 === 0) {
//       console.log(`Fizz Buzz`);
//     } else if (i % 3 === 0) {
//       console.log(`Fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`Buzz`);
//     } else {
//       console.log(`${i}`);
//     }
//   }
// }

// TODO: create the character object here

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points and ${
      this.strength
    } as strength. She has ${this.xp} experience points and needs ${
      1000 - this.xp
    } to next level.`;
  },
};

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());

// TODO: create the dog object here

const dog = {
  name: "Hokku",
  species: "Shibe",
  size: "1' 3\"",
  bark() {
    return "Woof! OwO";
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// const circleRadius = function () {
//   return Number(prompt("Enter the circle radius:"));
// };

// const circle = {
//   r: 1,
//   getCircumference(r) {
//     return 2 * Math.PI * r;
//   },
//   circumference: 1,
//   getArea(r) {
//     return Math.PI * r ** 2;
//   },
//   area: 1,
// };

// function configureCircle() {
//   r = circleRadius();
//   circle.circumference = circle.getCircumference(r);
//   circle.area = circle.getArea(r);
// }
// configureCircle();

// TODO: create the circle object here
// const r = Number(prompt("Enter the circle radius:"));
// // const areaCalc = Math.PI * r ** 2;
// // const circumferenceCalc = 2 * Math.PI * r;

// const circle = {
//   area() {
//     return Math.PI * r ** 2;
//   },
//   circumference() {
//     return 2 * Math.PI * r;
//   },
// };

// // TODO: create the circle object here

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// Modeling a bank account
// Write a program that creates an account object with the following characteristics:

// A name property set to "Alex".
// A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

// const bank = {
//   name: "Alex",
//   balance: 0,
//   credit(num) {
//     if (num > 0) {
//       this.balance += Number(num);
//     } else if (num < 0) {
//       this.balance -= Number(num);
//     }
//   },
//   describe() {
//     return `${bank.name}'s account has ${bank.balance} pounds in it.`;
//   },
// };

// console.log(bank.describe());
// bank.credit(250);
// bank.credit(-80);
// console.log(bank.describe());

// Eloquent Javascript Ch. 4 - Data arrays and objects
// Exercises
// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function rangeDisplay(num1, num2, step = 1) {
  let outputArray = [];
  if (num2 > num1) {
    for (let i = num1; i <= num2; i += step) {
      outputArray.push(i);
    }
  } else if (num1 > num2) {
    for (let i = num1; i >= num2; i += step) {
      outputArray.push(i);
    }

    return outputArray;
  }
}
console.log(rangeDisplay(5, 2, -1));
let tenArray = rangeDisplay(1, 10, 2);

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// function sumArray(arr) {
//   return arr.reduce((a, b) => a + b, 0);
// }

// console.log(sumArray(tenArray));

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array.
//  If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
//   Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// // Your code here.

// function rangeDisplay(num1, num2, step) {
//   let outputArray = [];
//   if (num2 > num1) {
//     for (let i = num1; i <= num2; i += step) {
//       outputArray.push(i);
//     }
//   } else if (num1 > num2) {
//     for (let i = num1; i >= num2; i += step) {
//       outputArray.push(i);
//     }

//     return outputArray;
//   }
// }
// console.log(rangeDisplay(5, 2, -1));
// let tenArray = rangeDisplay(1, 10, 2);

// console.log(rangeDisplay(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55
// Reversing an array

// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
//  Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// // Your code here.

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]
// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
// The resulting objects form a chain, like this:

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

// // Your code here.

// console.log(arrayToList([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// // Your code here.

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true
