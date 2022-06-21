//
// Coding time!
// Try to code each exercise twice, once with a while
// loop and the other with a for, to see for yourself
// which one is the most appropriate.

// Carousel
// Write a program that launches a carousel for 10 turns,
// showing the turn number each time.

function carouselSpin(n) {
  let i = 0;
  do {
    i++;
    console.log(`Whee the carousel has gone around ${i} times!`);
  } while (i < n);
}
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

function numAsk() {
  let askNum = function () {
    let num = prompt("Pick a number from 1 to 100");
    if (num < 49 || num > 100) {
      askNum();
    } else {
      alert(`Gz the number ${num} is < 100`);
    }
  };
  askNum();
}

// When you are done with the above, improve the program
// so that the terminating number is between 50 and 100.

// Multiplication table
// Write a program that asks the user for a number, then
// shows the multiplication table for this number.

function multTable() {
  let product;

  let rangeCheck = function () {
    let n = prompt(`Pick a number between 1 and 10`);
    if (n < 2 || n > 9) {
      alert(`Sorry that's out of range, try a new number`);
      rangeCheck();
    } else {
      for (let i = 1; i < 11; i++) {
        product = i * n;
        console.log(`${i} x ${n} = ${product}`);
      }
    }
  };
  rangeCheck();
}

// When you are done, improve the program so it only
//accepts numbers between 2 and 9 (use the previous
//exercise as a blueprint).

// Neither yes nor no
// Write a program that plays "neither yes, nor no"
// with the user. Specifically, the programs asks the
// user to enter text until either "yes" or "no" is typed,
// which ends the game.

function yesOrNo() {
  let answer;
  let askQuestion = function () {
    answer = prompt(`Yes or No ahahaha??`);
    if (answer === "yes" || answer === "no") {
      alert(`I don't believe it, you answered ${answer}`);
    } else {
      askQuestion();
    }
  };
  askQuestion();
}

// FizzBuzz
// Write a program that shows all numbers between 1 and
//100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

function fizzBuzz() {
  for (i = 0; i < 100; i++) {
    if (i % 15 === 0) {
      console.log(`Fizz Buzz`);
    } else if (i % 3 === 0) {
      console.log(`Fizz`);
    } else if (i % 5 === 0) {
      console.log(`Buzz`);
    } else {
      console.log(`${i}`);
    }
  }
}
