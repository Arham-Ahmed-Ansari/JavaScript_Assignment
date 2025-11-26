// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let multidimensionalArray = [[], [], []];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

// let multidimensionalArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// let newArray = [];
// multidimensionalArray.forEach((val) => {
//     val.forEach((element) => {
//         newArray.push(element)
//         console.log(element);
//     })
// })
// document.writeln(newArray.join(" "))
// console.log(newArray);


// 3. Write a program to print numeric counting from 1 to 10.

// for (let i = 1; i < 11; i++) {
//     document.writeln(`${i} <br>`);
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let table = parseInt(prompt("Enter the table value: "));
// let tableLength = parseInt(prompt("Enter the table length:"));

// document.writeln(`table of : ${table} <br>`);
// document.writeln(`table length is: ${tableLength} <br>`);

// for (let i = 0; i <= tableLength; i++) {
//     document.writeln(`${table} x ${i} = ${table * i} <br> `);
// }


// 5. Write a program to print items of the following array
// using for loop:
// fruits = ["apple", "banana", "mango", "orange",
//     "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     document.writeln(`${fruits[i]} <br>`);
// }
// for (let i = 0; i < fruits.length; i++) {
//     document.writeln(`Element at index ${i} is ${fruits[i]} <br>`);
// }



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.writeln("Counting:");
// let counting = [];
// for (let i = 1; i < 16; i++) {
//     counting.push(i);
// }
// document.writeln(`${counting}<br>`)

// document.writeln("Reverse Counting:");
// let reverseCounting = [];
// for (let i = 10; i >= 1; i--) {
//     reverseCounting.push(i);
// }
// document.writeln(`${reverseCounting} <br>`)

// document.writeln("Even:");
// let Even = [];
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         Even.push(i);
//     }
// }
// document.writeln(`${Even} <br>`)

// document.writeln("odd:");
// let odd = [];
// for (let i = 1; i <= 19; i++) {
//     if (i % 2 !== 0) {
//         odd.push(i);
//     }
// }
// document.writeln(`${odd} <br>`)

// document.writeln("series:");
// let series = [];
// for (let i = 1; i <= 19; i++) {
//     if (i % 2 === 0) {
//         series.push(`${i}k`);
//     }
// }
// document.writeln(`${series} <br>`)


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// A = ["cake", "apple pie", "cookie", "chips", "patties"];

// let checkItem = prompt("Enter the item to check if it is present or not: ");
// for (let i = 0; i < A.length; i++) {
//     if (checkItem === A[i]) {
//         document.writeln(`${checkItem} is present at index ${i}`);
//     } else {
//         document.writeln(`${checkItem} is not available this time `);
//         break;
//     }

// }


// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12];
// let largest = A[0];
// for (let i = 0; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.writeln(`Array Items are: ${A}`);
// document.writeln(`Largest Element is: ${largest}`);
// console.log(largest);



// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12];

// let smallest = A[0];
// for (let i = 0; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// document.writeln(`Array Items are: ${A} <br>`);
// document.writeln(`Smallest Element is: ${smallest}`);


// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

// for (let i = 0; i < 101; i++) {
//     if (i * 5 === 105) {
//         break
//     }
//     console.log(i * 5);
// }


