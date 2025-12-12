// Chapter 1 – Alerts 1. Show an alert saying “Welcome to JavaScript!”

// alert("Welcome To Js")

// 2. Ask user name with prompt and show it using alert 3. Ask user favorite color using prompt and show it in alert
// let input = prompt("Enter name:")
// alert(`Hello ${input}`);


// Chapter 2 – Variables for Strings 1. Create two string variables firstName and lastName and show full
// name using alert

// let firstName = "Arham";
// let lastName = "Ahmed";
// let fullName = firstName + lastName;
// alert(`Hello ${fullName}`);


//2. Store your city name in a variable and show message “You live in <city>” using alert

// let city = "Karachi";
// alert(`You live in ${city}`)

//3.Store a hobby in a variable and show message using alert

// let hobby = "coding";
// alert(`My hobby is: ${hobby}`);


// Chapter 3 – Variables for Numbers
// 1. Store two numbers and show their sum using alert

// let num1 = 20;
// let num2 = 30;
// alert(num1 + num2);

// 2. Store marks in a variable and show “Pass” if >=50 else “Fail” using alert

// let marks = 80;
// if (marks >= 50) {
//     alert("Pass");
// } else {
//     alert("Fail");
// }

// 3. Store age and show message if age is above 18 using alert
// let age = 23;
// if (age > 18) {
//     alert("age is above 18");
// } else {
//     alert("age is not above 18");
// }


// Chapter 4 – Variable Names Legal and Illegal
// 1. Create 3 legal variable names and display a message using alert

// let firstName;
// let first_Name;
// let firstName23;

// 2. Try 3 illegal variable names and display a message using alert

// let 123first;
// let @num1;
// let num 123;

//3. Store variable names in an  array and show all using alert

// let arr = ["firstName","last_Name","fullName"];
// alert(arr)


// Chapter 5 – Math Expressions: familiar operators
// 1. Store two numbers and show their sum and difference using alert

// let num1 = 20;
// let num2 = 30;
// alert("Sum" + num1 + num2);
// alert("Divide" + num1 / num2);

// 2. Store two numbers and show product, quotient, and remainder using alert
// let num1 = 20;
// let num2 = 30;
// alert("product" + num1 * num2);
// alert("Modulus" + num1 % num2);


// 3. Store a number and increment it using ++, show result using alert
// let num = 20;
// alert("increment:"+num++)



// Chapter 6 – Math Expressions: unfamiliar operators
// 1. Use ++ and -- on a number variable and show result using alert

// let num = 20;
// alert("increment:"+num++)

// let num = 20;
// alert("increment:"+num--)

// 2. Use += and -= operators on numbers and show updated value using alert

// let num = 20;
// num += 1;
// alert("increment: " + num)

// let num = 20;
// num -= 1;
// alert("decrement: " + num)


// 3. Use *= and /= operators on numbers and show updated result using alert

// let num = 20;
// num *= 1;
// alert("increment: " + num)

// let num = 20;
// num /= 1;
// alert("increment: " + num)



// Chapter 7 – Math Expressions: eliminating ambiguity
// 1. Store values in variables and calculate result using parentheses to ensure correct order; show result using alert;

// let value1 = 2;
// let value2 = 3;

// let result = (value1 + value2) * 3 - 4;
// alert(result)

//2. Combine +, *, and - in expression with variables and show alert for final result
// let value1 = 2;
// let value2 = 3;

// let result = (value1 + value2) * 3 - 4;
// alert(result)


//3. Use multiple parentheses to control calculation order and show result in alert
// let value1 = 2;
// let value2 = 3;

// let result = ((value1 + value2) * 3) - 4;
// alert(result)


// Chapter 8 – Concatenating text strings
// 1. Store firstName and lastName in variables and combine them to show full name using alert

// let firstName = "Arham";
// let lastName = "Ahmed";
// let fullName = firstName + lastName;

// 2. Combine a greeting message with user's city and show using alert

// let city = "Karachi";
// alert(`Hello arham from ${city}`)

// 3. Combine 3 strings into a single message and show using alert

// let firstName = "Arham";
// let middleName = "Ahmed";
// let lastName = "Ansari";
// let fullName = firstName + middleName + lastName;
// alert(fullName);


// Chapter 9 – Prompts 1. Ask user favorite color using prompt and show “Your favorite color is <color>” using
// alert

// let favouriteCOlor = prompt("Enter your favourite Color:");
// alert(favouriteColor);

//2. Ask user age using prompt and show message using alert
// let userAge = prompt("Enter your age:");
// alert("your age is" + userAge)

//3. Ask user favorite fruit using prompt and show it using alert

// let favouriteFruit = prompt("Enter your Favourite fruit:");
// alert("your Favourite Fruit is" + favouriteFruit);


// Chapter 10 – if statements
// 1. Store a number and if it is greater than 10, show alert “Number is greater
// than 10”

// let num = 12;
// if (num > 10) {
//     alert("num is greater than 10")
// }

// 2. Store marks and if marks>=50, show alert “Pass”
// let marks = 80;
// if (marks >= 50) {
//     alert("Pass");
// } else {
//     alert("Fail");
// }


//3. Store age and if age<18, show alert “Minor”

// let age = 23;
// if (age > 18) {
//     alert("Minor"");
// }


// Chapter 11 – Comparison operators

// 1. Compare two numbers using > operator and show result using alert

// let num1 = 20;
// let num2 = 23;
// if (num1 > num2) {
//     alert("num1 is greater:" + num1)
// } else {
//     alert("num2 is greater:" + num2)
// }

// 2. Compare two numbers using == operator and show alert “Numbers are equal” or “Numbers are not
// equal”

// let num1 = 20;
// let num2 = 23;
// if (num1 > num2) {
//     alert("num1 is greater:" + num1)
// } else {
//     alert("num2 is greater:" + num2)
// }

//3. Compare two numbers using <= operator and show alert

// let num1 = 20;
// let num2 = 23;
// if (num1 <= num2) {
//     alert("num1 is smaller or equal:" + num1)
// } else {
//     alert("num2 is smaller or equal:" + num2)
// }



// Chapter 12 – if...else and else if statements

// 1. Store marks and show “A” if >=90, “B” if >=70, else “C” using alert

// let marks = 80;
// if (marks >= 90) {
//     alert("A grade")
// } else if (marks >= 70) {
//     alert("B grade");
// }else if (marks >= 60) {
//     alert("C Grade")
// }else{
//     alert("Fail")
// }

// 2. Store age and show “Child” if <12, “Teen” if <18, else “Adult” using alert

// let age = 23;
// if (age < 12) {
//     alert("child")
// } else if (age < 18) {
//     alert("Teen")
// } else if (age > 18) {
//     alert("Adult")
// }

// 3. Store temperature and show “Hot”, “Warm”, or “Cold” using if...else if statements

// let temperature = 20;
// if (temperature >= 40) {
//     alert("Hot")
// }else if (temperature >= 30) {
//     alert("Warm")
// }else{
//     alert("Cold")
// }



// Chapter 13 – Testing sets of conditions

// 1. Store number and check if it is positive and even; show alert if true

// let num = 2;
// if (num > 0 && num%2 === 0) {
//     alert("positive and Even")
// }else{
//     alert("Negative and odd");
// }

// 2. Store marks and check if >=50 and <=100; show alert “Valid Marks”

// let marks = 60;
// if (marks >= 50 && marks <= 100) {
//     alert("Valid Marks")
// }

// 3. Store a number and check if divisible by 3 and 5; show alert if true

// let num = 15;
// if (num%3===0 && num%5 === 0) {
//     alert("number is divisible by 3 and 5");
// }



// Chapter 14 – if statements nested

// 1. Store age; if age >= 18 then check if hasID = true; show alert “Allowed” else “Not Allowed”

// let age = 18;

// if (age > 18) {
//     if (hasId == true) {
//         alert("Allowed")
//     }
// } else {
//     alert("Not Allowed");
// }

// 2. Store number; if > 0 check if even; show alert accordingly

// let num = 2;
// if (num%2 === 0) {
//     alert("Even")
// }else{
//     alert("odd");
// }

// 3. Store marks; if >= 50 check if extraCredit = true; show alert accordingly

// let marks = 60;
// let extraCredit = true;
// if (marks >= 50) {
//     if (extraCredit = true) {
//         alert("Pass")
//     }
// } else {
//     alert("Fail")
// }


// Chapter 15 – Arrays

// 1. Create an array of 5 fruits and show the array using alert

// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// alert(arr);

// 2. Create an array of numbers and show first and last element using alert

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// alert("first: " + arr[0])
// alert("Last: " + arr[arr.length - 1])

// 3. Create an array of colors and show all using alert

// let arr = ["Black","White","Orange","Purple","Blue Violet"];
// alert(arr);


// Chapter 16 – Arrays: adding and removing elements

// 1. Add a fruit to the end of an array and show updated array using alert


// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// arr.push("appricot")
// alert(arr);

// 2. Remove last element of array and show updated array using alert


// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// arr.pop();
// alert(arr);


// 3. Add an element at the beginning and remove first element, then show array using alert

// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// arr.unshift("appricot");
// arr.shift();
// alert(arr);


// Chapter 17 – Arrays: removing, inserting, and extracting elements

// 1. Insert an element at index 1 in an array and show updated array

// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// arr[1] = "appricot";
// alert(arr);

// 2. Remove element at index 2 and show updated array

// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// arr.splice(1,3);
// alert(arr)

// 3. Extract a part of array using slice and show using alert

// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// arr.slice(0.3);
// alert(arr);


// Chapter 18 – for loops
// 1. Loop from 1 to 5 and show each number using alert

// for(let i = 1; i<6; i++){
//     alert(i);
// }

// 2. Loop through an array and show each element using alert

// let arr = ["Apple","Mango","Kivi","Guava","Banana"];
// arr.forEach(val=>{
//     alert(val);
// })


// 3. Loop through numbers 1 to 10 and show only odd numbers using alert

// for (let i = 1; i < 11; i++) {
//     if (i % 2 !== 0) {
//         alert(i)
//     }
// }


// Chapter 19 – for loops: flags, Booleans, array length, and breaks

// 1. Loop through array; stop loop if element is negative using break; show alerts

// let arr = [1,2,3,4,5,6,-1,-2];
// for(let i = arr.length-1; i>0; i++){
//     if (arr[i] < 0) {
//    alert(arr[i]);
//         break;
//     }
// }

// 2. Loop through array; if element is even, set flag true; show flag using alert

// let arr = [1, 2, 3, 4, 5];
// let flag = false;
// arr.forEach(val => {
//     if (val % 2 === 0) {
//         flag = true;
//         alert(flag);
//     }
// })

// 3. Loop through array; if element >50, break loop; show alert

// let arr = [1, 2, 3, 60, 70];
// for (let i = arr.length - 1; i > 0; i--) {
//     if (arr[i] > 50) {
//         alert(arr[i]);
//         break;
//     }
// }


// CHAPTER 20 – NESTED FOR LOOPS

// 1. Multiplication table of 1 to 3
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 10; j++) {
//       alert(i + " x " + j + " = " + (i * j));
//     }
//   }

// 2. Loop through 2D array
//   let arr2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];

//   for (let i = 0; i < arr2D.length; i++) {
//     for (let j = 0; j < arr2D[i].length; j++) {
//       alert(arr2D[i][j]);
//     }
//   }

// 3. Sum of pairs from two arrays
//   let arr1 = [1, 2, 3];
//   let arr2 = [4, 5, 6];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       alert(arr1[i] + " + " + arr2[j] + " = " + (arr1[i] + arr2[j]));
//     }
//   }

// CHAPTER 21 – CHANGING CASE

// 1. Uppercase
//   let text1 = "hello world";
//   alert(text1.toUpperCase());

// 2. Lowercase
//   let text2 = "JAVASCRIPT IS FUN";
//   alert(text2.toLowerCase());

// 3. First letter capitalized
//   let text3 = "javascript";
//   let capitalized = text3[0].toUpperCase() + text3.slice(1).toLowerCase();
//   alert(capitalized);

// CHAPTER 22 – STRING LENGTH + PARTS

// 1. String length
// let nameText = "JavaScript";
// alert(nameText.length);

// 2. First 3 letters
// let word1 = "JavaScript";
// alert(word1.slice(0, 3));

// 3. Last 3 letters
// let word2 = "Programming";
// alert(word2.slice(-3));

// CHAPTER 23 – FINDING SEGMENTS

// 1. Find word position
// let line1 = "I love learning JavaScript";
// alert(line1.indexOf("JavaScript"));

// 2. Last index of a letter
// let line2 = "banana";
// alert(line2.lastIndexOf("a"));

// 3. Check substring exists
// let line3 = "The sky is blue";
// alert(line3.includes("blue"));

// CHAPTER 24 – CHARACTER AT LOCATION

// 1. Character at index 2
// let msg1 = "Hello";
// alert(msg1.charAt(2));

// 2. Last character
// let msg2 = "Pakistan";
// alert(msg2.charAt(msg2.length - 1));

// 3. Middle character
// let msg3 = "Hello";
// let midIndex = Math.floor(msg3.length / 2);
// alert(msg3.charAt(midIndex));

// CHAPTER 25 – STRING REPLACE

// 1. Replace one word
// let sentence1 = "I love Python";
// alert(sentence1.replace("Python", "JavaScript"));

// 2. Replace ALL letters
// let sentence2 = "banana";
// alert(sentence2.replaceAll("a", "o"));

// 3. Replace FIRST occurrence
// let sentence3 = "I like tea and I like coffee";
// alert(sentence3.replace("like", "love"));
