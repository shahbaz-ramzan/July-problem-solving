// Q1:Write a JavaScript program to print "Hello, World!" to the console.

// console.log("Hello, world!");

//Q2:Write a program to add two numbers and display the result.

// let a = parseInt(prompt("Enter the first value"));
// let b = parseInt(prompt("Enter the second value"));

// let c = a + b;

// alert(c);

//Q3: Calculate the area of a circle given its radius as input.

// let radius = parseInt(prompt("Enter the radius"));

// let pi = 3.14;

// let area = pi * (radius * radius);
// alert(area);

// Q4:Check if a given number is even or odd.

// let number = parseInt(prompt("Enter the number"));

// if (number % 2 === 0) {
//   alert("number is even ");
// } else {
//   alert("Number is odd");
// }

// Q5:Check if a given character is a vowel or consonant.

// let char = prompt("Enter the Character");
// let ch = char.toLowerCase();

// if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//   alert("You enter vowel");
// } else {
//   alert("you enter constant");
// }

// another way

// const vowels = "aeiou";

// if (vowels.includes(ch)) {
//   alert("You enter vowel");
// } else {
//   alert("you enter constant");
// }

// function checkVowel() {
//   switch (ch) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       return "you enter vowel number";
//     default:
//       return "you enter constant";
//   }
// }

// let result = checkVowel(ch);
// alert(result);

//Q6:Calculate the factorial of a given number.

// let number = parseInt(prompt("Enter the number"));

// function recursionFunction(number) {
//   if (number < 0) {
//     return "negative number have not factorial";
//   }
//   if (number === 0 || number === 1) {
//     return 1;
//   }
//   return number * recursionFunction(number - 1);
// }

// let result = recursionFunction(number);
// alert(result);

// let number = parseInt(prompt("enter the number"));

// function recursion(number) {
//   if (number < 0) {
//     return "negative number have no factorial";
//   }
//   if (number === 0 || number === 1) {
//     return 1;
//   }

//   return number * recursion(number - 1);
// }

// let result = recursion(number);

// alert(result);
// console.log(result);

// Q7:Write a program to find the largest of three numbers.
// let a = parseInt(prompt("enter first number"));
