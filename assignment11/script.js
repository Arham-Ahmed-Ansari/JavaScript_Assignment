// console.log("Connected");

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result = result * a;
//     }
//     return result;
// }

// console.log(power(2, 3));


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...

// function checkLeapYear(year) {
//     if (year % 4 == 0) {
//         return console.log("This is a Leap year");
//     } else {
//         return console.log("Not a Leap year");

//     }
// }

// console.log(checkLeapYear(parseInt(prompt("Enter year: "))));


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// let a = 2;
// let b = 2;
// let c = 2;
// let s;
// let area;

// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function areaTriangle(s, a, b, c) {
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// s = calculateS(a, b, c)
// area = areaTriangle(s, a, b, c)

// console.log(s);
// console.log(area);


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// function mainFunction(marks1, marks2, marks3) {
//     const avg = average(marks1, marks2, marks3);
//     const perc = percentage(marks1, marks2, marks3);
//     function average(m1, m2, m3) {
//         return (m1 + m2 + m3) / 3;
//     }
//     function percentage(m1, m2, m3) {
//         return ((m1 + m2 + m3) / 300) * 100;
//     }

//     return `Average is: ${avg} and percentage is: ${perc}`;
// }

// console.log(mainFunction(80, 80, 80));



// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// let str = "Arham";

// let findIndex = "h";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == findIndex) {
//         console.log(i, str[i]);
//     }
// }

// function customIndexFunction(str, findIndexStr) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == findIndexStr) {
//             return console.log(i, str[i]);
//         }
//     }
// }

// customIndexFunction("Arham", "m")


// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// let sentence = "My name is Arham";
// let vovels = "aeiouAEIOU";
// let result = "";



// for (let i = 0; i < sentence.length; i++) {
//     if (!vovels.includes(sentence[i])) {
//         result = result + sentence[i];
//     }
// }
// console.log(result);


// function removeVowels(sentence) {
//     let vovels = "aeiouAEIOU";
//     let result = "";



//     for (let i = 0; i < sentence.length; i++) {
//         if (!vovels.includes(sentence[i])) {
//             result = result + sentence[i];
//         }
//     }

//     return result;
// }

// let sentence = "My name is Arham";
// console.log(removeVowels(sentence));



// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// function countSuccessiveVowels(text) {
//     let count = 0;
//     let str = text.toLowerCase();

//     for (let i = 0; i < str.length - 1; i++) {
//         let char1 = str[i];
//         let char2 = str[i + 1];
//         if (isVowel(char1) && isVowel(char2)) {
//             console.log(`Found succession: ${char1}${char2}`);
//             count++;
//         }
//     }
//     return count;
// }

// function isVowel(char) {
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

// let sentence = "Pleases read this application and give me gratuity";
// let result = countSuccessiveVowels(sentence);
// console.log("Total occurrences of two vowels in succession: " + result);


// function toMeters(km) {
//     let meters = km * 1000;
//     console.log(`${km} km is ${meters} Meters`);
// }
// function toFeet(km) {
//     let feet = km * 3280.84;
//     console.log(`${km} km is ${feet.toFixed(2)} Feet`);
// }

// function toInches(km) {
//     let inches = km * 39370.1;
//     console.log(`${km} km is ${inches.toFixed(2)} Inches`);
// }

// function toCentimeters(km) {
//     let cm = km * 100000;
//     console.log(`${km} km is ${cm} Centimeters`);
// }

// let distanceKm = parseFloat(prompt("Enter distance between two cities in km:"));

// toMeters(distanceKm);
// toFeet(distanceKm);
// toInches(distanceKm);
// toCentimeters(distanceKm);


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// let employeeHour = 44;
// let overTimePay;
// if (employeeHour > 40) {
//     let remainingHour = employeeHour - 40;
//     overTimePay = remainingHour * 12.00
// }
// console.log(`Your overtime pay is ${overTimePay} Rs`);

// function calculateOverTime(employeeHour) {
//     let overTimePay;
//     if (employeeHour > 40) {
//         let remainingHour = employeeHour - 40;
//         overTimePay = remainingHour * 12.00
//     }
//     return `Your overtime pay is ${overTimePay} Rs`;
// }

// console.log(calculateOverTime(44));


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
// function calculateNotes() {
//     let inputAmount = prompt("Enter the amount to withdraw (in hundreds):");

//     let hundredNotes = Math.floor(inputAmount / 100);
//     let remaining = inputAmount % 100;

//     let fiftyNotes = Math.floor(remaining / 50);
//     remaining = remaining % 50;

//     let tenNotes = Math.floor(remaining / 10);

//     console.log(`For a withdrawal of ${inputAmount}:`);
//     console.log(`100s: ${hundredNotes}`);
//     console.log(` 50s: ${fiftyNotes}`);
//     console.log(` 10s: ${tenNotes}`);
// }

// calculateNotes();



// 1. Show an alert box on click on a link.




// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.



//

// function deleteRow(button) {
//     let row = button.parentNode.parentNode;
//     row.remove();
// }


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// let img = document.querySelector("img");

// img.addEventListener("mouseover", function (dets) {
//     img.setAttribute("src", "./assets/img2.jpg")
// })

// img.addEventListener("mouseout", function (dets) {
//     img.setAttribute("src", "./assets/img1.jpg");
// })



// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// let increment = document.querySelector("#increment");
// let decrement = document.querySelector("#decrement");
// let displayCount = document.querySelector("#displayCount");
// let counter = 0

// increment.addEventListener("click", (dets) => {
//     counter++;
//     displayCount.textContent = counter;
// })

// decrement.addEventListener("click", (dets) => {
//     if (counter < 1) {
//         return alert("Stop you are going negative");
//     }
//     counter--;
//     displayCount.textContent = counter;
// })






