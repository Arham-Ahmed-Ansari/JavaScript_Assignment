// console.log("Connected");

// 1. Write a function that displays current date & time in your
// browser.

// function displayTime() {
//     let date = new Date();
//     document.writeln(date);
// }

// displayTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


// function greet(firstName, lastName) {
//     document.writeln(`Hello ${firstName + lastName}`);
// }

// greet("Arham", " Ahmed");


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.


// function add(num1, num2) {
//     return `Addition of two numbers is: ${num1 + num2}`;
// }

// document.writeln(add(2, 2));


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculator(num1, num2, operation) {
//     if (operation == "+") {
//         return `Addition of two numbers is: ${num1 + num2}`;
//     } else if (operation == "-") {
//         return `Subtraction of two numbers is: ${num1 - num2}`;
//     } else if (operation == "*") {
//         return `Multiplication of two numbers is: ${num1 * num2}`;
//     } else if (operation == "/") {
//         return `Division of two numbers is: ${num1 / num2}`;
//     } else {
//         document.writeln("Error");
//     }
// }

// document.writeln(calculator(6, 2, "*"));



// 5. Write a function that squares its argument.


// function squareNumber(num) {
//     return `Square of ${num} is : ${num * num}`;
// }
// document.writeln(squareNumber(2));




// 6. Write a function that computes factorial of a number.

// function factorial(num) {
//     let fact = 1;
//     for (let index = 1; index <= num; index++) {
//         fact = fact * index
//         console.log(fact);
//     }
//     return `The factorial of ${num} is: ${fact}`;
// }

// document.writeln(factorial(5));




// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


// function counting(startNum, endNum) {
//     for (startNum; startNum <= endNum; startNum++) {
//         document.writeln(`<h5>${startNum}</h5>`);
//     }
// }

// counting(1, 20)



// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(num) {
//         return num * num;
//     }
//     let hypotenuseSquared =
//         calculateSquare(base) + calculateSquare(perpendicular);

//     let hypotenuse = Math.sqrt(hypotenuseSquared);

//     alert("Hypotenuse is: " + hypotenuse);
// }

// calculateHypotenuse(5, 5);


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// function area(width, height) {
//     return `Area of a rectangle is: ${width * height}`;
// }

// document.writeln(area(2, 3))


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// let str = "Arham";
// let newStr = ""

// for (const i of str) {
//     newStr += i;
//     console.log(i);
// }
// if (newStr === str) {
//     console.log("palindrome");
// } else {
//     console.log("not palindrome");
// }

// for (let index = str.length; index >= 0; index--) {
//     console.log(str[index]);
// }

// function checkPalindrome(str) {
//     let newStr = ""

//     for (let index = str.length; index >= 0; index--) {
//         console.log(str[index]);
//     }
//     if (newStr === str) {
//         document.writeln("palindrome");
//     } else {
//         document.writeln("not palindrome");
//     }
// }

// checkPalindrome("Arham");



// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function capitalizeWords(str) {
//     let words = str.split(" ");
//     let result = "";

//     for (let i = 0; i < words.length; i++) {
//         let word =
//             words[i][0].toUpperCase() + words[i].slice(1);

//         result = result + word + " ";
//     }

//     document.writeln(result.trim());
// }

// capitalizeWords("arham ahmed ansari");



// function findLongestWord(str) {
//     let words = str.split(" ");
//     let longestWord = "";

//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i];
//         }
//     }

//     document.writeln(longestWord);
// }

// findLongestWord("Web Development Tutorial");



// function countLetter(str, letter) {
//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() === letter.toLowerCase()) {
//             count++;
//         }
//     }

//     document.writeln("Occurrences: " + count);
// }

// countLetter("JSResourceS.com", "o");



// function calcCircumference(radius) {
//     let circumference = 2 * Math.PI * radius;
//     alert("The circumference is " + circumference);
//   }
//   function calcArea(radius) {
//     let area = Math.PI * radius * radius;
//     alert("The area is " + area);
//   }
//   calcCircumference(5);
//   calcArea(5);





