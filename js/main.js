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

// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   xp: 0,

//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points and ${
//       this.strength
//     } as strength. She has ${this.xp} experience points and needs ${
//       1000 - this.xp
//     } to next level.`;
//   },
// };

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

// // TODO: create the dog object here

// const dog = {
//   name: "Hokku",
//   species: "Shibe",
//   size: "1' 3\"",
//   bark() {
//     return "Woof! OwO";
//   },
// };

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

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

// function rangeDisplay(num1, num2, step = 1) {
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
// reverseArray returns a new function and doesn't mutate the argument, it's likely to be the fastest because it only has one for loop
//  reverseArrayInPlace mutates the original function, but to be honest you want that to be the case a lot of the time, so you don't have to manage extra variables - it's more useful.
// // Your code here.

// function reverseArray(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.unshift(arr[i]);
//   }
//   return newArray;
// }

// function reverseArrayInPlace(arr) {
//   let tempArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     tempArray.unshift(arr[i]);
//   }
//   arr.length = 0;
//   for (let i = 0; i < tempArray.length; i++) {
//     arr.push(tempArray[i]);
//   }

//   return arr;
// }

// console.log(reverseArray(["A", "B", "C"]));
// // // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];

// reverseArrayInPlace(arrayValue);

// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures.
// A common data structure is the list (not to be confused with array).
// A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null,
//     },
//   },
// };
// The resulting objects form a chain, like this:

// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list}
// (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements.
// The original list is also still a valid three-element list.

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// Also write a listToArray function that produces an array from a list. Then add a helper function prepend,
// which takes an element and a list and creates a new list that adds the element to the front of the input list,
// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)
// or undefined when there is no such element.

// If you haven’t already, also write a recursive version of nth.

// // Your code here.

// function arrayToList(arr) {
//   let outputArray = [];
//   let endArray = ["null"];
//   for (let i = 0; i < arr.length; i++) {
//     outputArray.push(`{value: ${arr[i]}, rest: `);
//     endArray.push(`}`);
//   }
//   return outputArray.join("") + endArray.join("");
// }

// function listToArray(list) {
//   return;
// }

// function prepend(element, list) {
//   return;
// }

// function nth(list, num) {
//   return;
// }

// console.log(arrayToList([10, 20]));
// // // → {value: 10, rest: {value: 20, rest: null}}

// let testArray = arrayToList([10, 20, 30]);
// console.log(list.keys);

// console.log(listToArray(arrayToList([10, 20, 30])));
// // // → [10, 20, 30]
// // console.log(prepend(10, prepend(20, null)));
// // // → {value: 10, rest: {value: 20, rest: null}}
// // console.log(nth(arrayToList([10, 20, 30]), 1));
// // // → 20

// // Deep comparison
// // The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// // Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties,
// // where the values of the properties are equal when compared with a recursive call to deepEqual.

// // To find out whether values should be compared directly (use the === operator for that) or have their properties compared,
// // you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison.
// // But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// // The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// // // Your code here.

// function deepEqual(value1, value2) {
//   console.log(typeof value1);
//   console.log(typeof value2);
//   if (value1 === null || value2 === null) {
//     return false;
//   } else if (value1 === value2) {
//     return true;
//   } else if (value1 !== value2) {
//     return false;
//   } else if (typeof value1 === "object" && typeof value2 === "object") {
//     return deepEqual(Object.keys(value1), Object.keys(value2));
//   } else {
//     return false;
//   }
// }

// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// // // → true
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// // // → false
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// // // → true

// **************************************************************************************************
// Javascript.info
//
// array-methods
//
//////////////////

// Tasks
// Translate border-left-width to borderLeftWidth

// let borderValue = "borderLeft-Width";

// borderValue = borderValue.replace("-", "");

// // importance: 5
// // Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased
// // “myShortString”.

// function camelize(str) {
//   let outputString;
//   let processArray = str.split("-");

//   for (let i = 1; i < processArray.length; i++) {
//     processArray[i] =
//       processArray[i].charAt(0).toUpperCase() + processArray[i].substring(1);
//     console.log(processArray[i]);
//   }
//   outputString = processArray.join("");
//   return outputString;
// }
// console.log(camelize("my-short-string"));

// // That is: removes all dashes, each word after dash becomes uppercased.

// // Examples:
// // console.log(camelize("background-color"));
// // == 'backgroundColor';
// // camelize("list-style-image") == 'listStyleImage';
// // camelize("-webkit-transition") == 'WebkitTransition';
// // P.S. Hint: use split to split the string into an array, transform it and join back.

// // Open a sandbox with tests.

// // solution
// // Filter range
// // importance: 4

// // Write a function filterRange(arr, a, b) that gets an array arr,
// // looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// function filterRange(arr, a, b) {
//   return arr.filter((element) => element >= a && element <= b);
// }

// console.log(filterRange([5, 3, 8, 1], 1, 4));

// // The function should not modify the array. It should return the new array.

// // For instance:

// // let arr = [5, 3, 8, 1];

// // let filtered = filterRange(arr, 1, 4);

// // alert( filtered ); // 3,1 (matching values)

// // alert( arr ); // 5,3,8,1 (not modified)
// // Open a sandbox with tests.

// // solution
// // Filter range "in place"
// // importance: 4
// // Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except
// // those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] <= a
//       ? arr.splice(i, 1)
//       : arr[i] >= b
//       ? arr.splice(i, 1)
//       : clg("No Change");
//   }
// }

// let testArray = [5, 3, 8, 1];
// filterRangeInPlace(testArray, 1, 4);
// console.log(testArray);
// // The function should only modify the array. It should not return anything.

// // For instance:

// // let arr = [5, 3, 8, 1];

// // filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// // alert( arr ); // [3, 1]
// // Open a sandbox with tests.

// // solution

// // Sort in decreasing order
// // importance: 4
// let sortArr = [5, 2, 1, -10, 8];

// // // ... your code to sort it in decreasing order

// sortArr.sort((a, b) => a - b);
// console.log(sortArr);

// // alert( arr ); // 8, 5, 2, 1, -10
// // solution
// // Copy and sort array
// // importance: 5

// // We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// // Create a function copySorted(arr) that returns such a copy.

// let programsArr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   let outputArr = arr.slice(0);
//   console.log(outputArr);
//   return outputArr.sort((a, b) => a - b);
// }

// console.log(copySorted(programsArr));
// console.log(programsArr);

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)
// solution

// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER”
// (space-delimited) and returns the result. Should understand plus + and minus -.

// function Calculator() {
//   this.addMethod(op, func) {
//     this.title = func(a, b) {}
//   }
// }

// function calculate(str) {
//   let splitArray = str.split(" ");
//   return (
//     parseInt(splitArray[0]) + parseInt(splitArray[1].concat(splitArray[2]))
//   );
// }

// console.log(calculate("1 - 2"));

// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation.
// It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.
// Open a sandbox with tests.

// solution
// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = function (objArray) {
//   for (let i = 0; i < objArray.length; i++) {
//     objArray[i] = objArray[i].name;
//   }
// };

// names(users);
// console.log(users);

// alert( names ); // John, Pete, Mary
// solution
// Map to objects
// importance: 5
// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName,
// where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// let usersMapped = function (mapArray) {
//   for (let i = 0; i < mapArray.length; i++) {
//     mapArray[i].fullName =
//       `${mapArray[i].name}` + " " + `${mapArray[i].surname}`;
//     delete mapArray[i].name;
//     delete mapArray[i].surname;
//   }
// };
// console.log(users);
// usersMapped(users);
// console.log(users);

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
// So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.

// solution
// Sort users by age
// importance: 5
// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
// }

// sortByAge(arr);
// console.log(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete
// solution

// Shuffle an array
// importance: 3
// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];
// console.log(arr);

// function fisherYatesShuffle(arr) {
//   let orderSort;
//   let tempVar;
//   for (let i = 0; i < arr.length; i++) {
//     // randomise a number between i and arr.length - 1;
//     orderSort = Math.floor(Math.random() * (arr.length - i) + i);
//     tempVar = arr[orderSort];
//     arr[orderSort] = arr[i];
//     arr[i] = tempVar;
//   }
// }

// fisherYatesShuffle(arr);
// console.log(arr);

// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

// solution
// Get average age
// importance: 4
// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// function getAverageAge(users) {
//   let userNumbers = parseInt(users.length);
//   let subTotal = 0;
//   for (let i = 0; i < users.length; i++) {
//     subTotal += users[i].age;
//   }

//   return subTotal / userNumbers;
// }

// function ageReduce(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// console.log(getAverageAge(arr));

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// solution

// Filter unique array members
// importance: 4
// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   let hareArray = new Set(arr);
//   let outputArray = Array.from(hareArray);
//   return outputArray;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// console.log(unique(strings));

// alert( unique(strings) ); // Hare, Krishna, :-O
// Open a sandbox with tests.

// solution
// Create keyed object from array
// importance: 4
// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// function groupById(objArray) {
//   let outputObj = {};
//   objArray.forEach((element) => (outputObj[element.id] = element));
//   return outputObj;
// }

// let usersById = groupById(users);

// console.log(usersById);

// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
// Such function is really handy when working with server data.

// In this task we assume that id is unique. There may be no two array items with the same id.

// Please use array .reduce method in the solution.

// ****************************************************************************************
//
//   The JS Way - Chapter 7
//
/////////////////////////////////////////////////////////////////////////////////////////////

// Coding time!
// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

// function threeMusketeers() {
//   let musketeers = ["Athos", "Porthos", "Aramis"];
//   for (let i = 0; i < musketeers.length; i++) {
//     console.log(musketeers[i]);
//   }
//   musketeers.push("D'Artagnan");
//   musketeers.forEach((musketeer) => console.log(musketeer));
//   musketeers = musketeers.filter((m) => m != "Aramis");
//   for (const musketeer of musketeers) {
//     console.log(musketeer);
//   }
//   return musketeers;
// }
// console.log(threeMusketeers());

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

// const values = [3, 11, 7, 2, 9, 10];
// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

// function sumValues() {
//   const values = [3, 11, 7, 2, 9, 10];
//   return values.reduce((a, b) => a + b, 0);
// }
// console.log(sumValues());

// const values = [3, 11, 7, 2, 9, 10];
// List of words
// Write a program that asks the user for a word until the user types "stop".
// The program then shows each of these words, except "stop".

// function wordList() {
//   let outputArray = [];
//   let currentWord = "";
//   while (currentWord !== "stop") {
//     currentWord = prompt("Type a word to add, or type 'stop'");
//     if (currentWord !== "stop") {
//       outputArray.push(currentWord);
//     }
//   }
//   for (let i = 0; i < outputArray.length; i++) {
//     console.log(outputArray[i]);
//   }
// }
// wordList();

//******************************************************/
//*
//*  https://javascript.info/object
//*
//******************************************************/

// for (
//   let i = 0, outputSource = "", outputRatings = "";
//   i < Data.Ratings.length;
//   i++
// ) {
//   outputSource += dataRatings[i].Source + " ";
//   console.log(outputSource); // <--- this is for debugging
//   document.querySelector("#rated").innerText = outputSource;

//   outputRatings += " " + dataRatings[i].Value;
//   console.log(outputRatings); // <--- this is for debugging
//   document.querySelector("#ratedVal").innerText = outputRatings;
// }

// Tasks
// Hello, object
// importance: 5
// Write the code, one line for each action:

// Create an empty object user.
// let user = {};
// // Add the property name with the value John.
// user.name = "John";
// // Add the property surname with the value Smith.
// user.surname = "Smith";
// // Change the value of the name to Pete.
// user.name = "Pete";
// console.log(user.name);
// // Remove the property name from the object.
// delete user.name;
// // solution
// // Check for emptiness
// // importance: 5
// // Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// let testObj = {};

// function isEmpty(obj) {
//   let outcome = true;
//   for (let key in obj) {
//     return false;
//   }
//   return outcome;
// }

// console.log(isEmpty(user));
// console.log(isEmpty(testObj));

// // NB the loop will not even start if there are no properties.

// //*********************************************** */

// // Should work like that:

// // let schedule = {};

// // alert( isEmpty(schedule) ); // true

// // schedule["8:30"] = "get up";

// // alert( isEmpty(schedule) ); // false
// // Open a sandbox with tests.

// // solution
// // Sum object properties
// // importance: 5
// // We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// function salarySum() {
//   let salaryTotal = 0;
//   for (let salary in salaries) {
//     salaryTotal += salaries[salary];
//   }

//   return salaryTotal;
// }

// console.log(salarySum(salaries));

// // If salaries is empty, then the result must be 0.

// // solution
// // Multiply numeric property values by 2
// // importance: 3
// // Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// function multiplyNumeric(obj) {
//   for (let num in obj) {
//     if (typeof obj[num] === "number") {
//       obj[num] *= 2;
//     }
//   }
// }

// // For instance:

// // // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);
// console.log(menu);
// // // after the call
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };
// // Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// // P.S. Use typeof to check for a number here.
