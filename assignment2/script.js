// Question no 1:
// let firstName = "arham";
// let lastName = "Ahmed Ansari";
// let email = "arham@gmail.com";
// let phoneNo = "03345679876";
// let password = "arham123";
// alert(`My name is ${firstName}`);
// alert(`My last name is: ${lastName}`);
// alert(`my email is ${email}`);
// alert(`my phone no is ${phoneNo}`);
// alert(`my password is ${password}`);


// Question no 2:
// alert("You are learning js");

// Question no 3:
// alert("I am learning js from jawan Pakistan");

// Chapter 2 (Variables for string)

// 1. Declare any variable in the camel Case format.
// let myName;


// 2. Declare a variable of your choice without defining it. Then, in a
// second statement, assign it a string of your choice.

// let myName;
// myName = "Arham";

// 3. Declare the variable teamName and Alert your Team name.

// let teamName = "Codex";
// alert(`My Team name is: ${teamName}`);

// 4. This statement has already been coded. var bestMan = &quot;Charlie&quot;;
// Assign the variable a new string.

// var bestMan = "Charlie";
// bestMan = "arham";


// Chapter 3 (Variables for numbers)
// 1. Declare a variable “caseQty”

// let caseQty;

// 2. Assign to the variable caseQty, which has already been declared,
// the value 144.

// caseQty = 144;


// 3. Rewrite this statement so the variable can be used in a math
// operation. var num = &quot;9&quot;;

// var num = 9;

// 4. In one statement declare a variable. In a second statement assign
// it the sum of 2 numbers.

// let num = 2;
// console.log(num += 2);


// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// console.log(orderTotal); // The ans is 110



// 6. In the first statement declare a variable and assign it a number. In
// the second statement, change the value of the variable by adding
// it together with a number.

// let num1 = 3;
// console.log(num1 += 3);



// Chapter no 4
// 1. Declare 3 variables in one statement.

// let myName = "Arham"; myEmail = "arham@gmail.com"; myPass = "arham123";

// 2. Declare 5 legal & 5 illegal variable names.

// 5 legal name:

// let myName;
// let _myName;
// let $myName;
// let myName2;
// let my_Name;

// 5 illegal Name:

// let 1myName;
// let @myName;
// let for;
// let MYNAME;
// let #myName;



// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

// document.writeln("<h1>“Rules for naming JS variables”</h1> <br> a) Variable names can only contain $,numbers,and _. <br> b) Variables must begin with a $, _ or alphabet.For example $name, _name or name.<br> c) Variable names are case sensitive.<br>d) Variable names should not be JS Keyword")


// Chapter 5

// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// let num1 = 5;
// let num2 = 6;
// let add = num1 + num2;
// document.writeln(`The sum of two numbers are: ${add} <br>`);

// Repeat task1 for subtraction, multiplication, division &
// modulus.
// let subtract = num1 - num2;
// let multiply = num1 * num2;
// let divide = num1 / num2;
// let modulus = num1 % num2;
// document.writeln(`The subtract of two numbers are: ${subtract} <br>`);
// document.writeln(`The multiply of two numbers are: ${multiply} <br>`);
// document.writeln(`The divide of two numbers are: ${divide} <br>`);
// document.writeln(`The modulus of two numbers are: ${modulus}`);


// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// let assumeNumber;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// document.writeln(`Value after variable declaration is: ${assumeNumber}. <br>`);
// c. Initialize the variable with some number.
// assumeNumber = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// document.writeln(`Initial value is: ${assumeNumber}. <br>`);
// e. Increment the variable.
// assumeNumber++;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// document.writeln(`Value after increment is: ${assumeNumber}. <br>`);
// g. Add 7 to the variable.
// assumeNumber += 7;
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// document.writeln(`Value after addition is: ${assumeNumber}. <br>`);
// i. Decrement the variable.
// assumeNumber--;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// document.writeln(`Value after decrement is: ${assumeNumber}. <br>`);
// k. Show the remainder after dividing the variable’s value
// by 3.
// assumeNumber %= 3;
// l. Output : “The remainder is : 0”.
// document.writeln(`The remainder is: ${assumeNumber}. <br>`);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

// let ticketPrice = 600;
// let totalTicketPrice = ticketPrice * 5;
// document.writeln(`The total price of 5 ticket is: ${totalTicketPrice} PKR`);


// Write a script to display multiplication table of any
// number in your browser.

// let inputNumber = parseInt(prompt("Enter the number for printing Table: "));
// document.writeln(`<h1> Table of ${inputNumber} </h1> <br>`);
// for (let i = 1; i < 11; i++) {
//     document.writeln(`${inputNumber} x ${i} = ${inputNumber * i} <br>`);
// }

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


// let celsiusTemperature = parseInt(prompt("Enter the clesius temperature: "));
// let fahrenheitTemperature = parseInt(prompt("Enter the Farenhiet temperature: "));

// let convertedCelsius = (fahrenheitTemperature - 32) * 5 / 9;
// let convertedFarenhite = (celsiusTemperature * 9 / 5) + 32;
// document.writeln(`The converted ${celsiusTemperature} is ${convertedFarenhite}F <br>`);
// document.writeln(`The converted ${fahrenheitTemperature} is ${convertedCelsius}C <br>`);


// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// let itemPrice1 = 50;
// let itemPrice2 = 50;
// let quantityOrder1 = 2;
// let quantityOrdered2 = 2;
// let shippingCharges = 50;

// let totalItemPrice1 = itemPrice1 * quantityOrder1;
// let totalItemPrice2 = itemPrice2 * quantityOrdered2;
// let totalPrice = totalItemPrice1 + totalItemPrice2 + shippingCharges;
// document.writeln(`The Price of item 1 is : ${itemPrice1} <br>`);
// document.writeln(`The quantity of item 1 is : ${quantityOrder1} <br>`);
// document.writeln(`The price of item 2 is : ${itemPrice2} <br>`);
// document.writeln(`The quantity of item 2 is : ${quantityOrdered2} <br>`);
// document.writeln(`The shipping charges is : ${shippingCharges} <br>`);
// document.writeln(`The total Cost of all the product is: ${totalPrice}`);

// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// let totalMarks = 980;
// let marksObtained = 804;
// let percentage = (marksObtained / totalMarks) * 100;

// document.writeln(`<h1>Mark Sheet</h1> <br>`);
// document.writeln(`Total Marks is: ${totalMarks} <br>`);
// document.writeln(`Obtained Marks is: ${marksObtained} <br>`);
// document.writeln(`Percentage is: ${percentage}% <br>`);


// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let convertUsToPkr = 10 * 104.80;
// let convertSrToPkr = 25 * 28;
// let totalAmount = convertSrToPkr + convertUsToPkr;
// document.writeln(`<h1>Currency Converter</h1> <br>`);
// document.writeln(`The conversion of 10 Us dollars into PKR is: ${convertUsToPkr} <br>`);
// document.writeln(`The conversion of 25 Saudi Riyal into PKR is: ${convertSrToPkr} <br>`);
// document.writeln(`The Total Amount in PKR is: ${totalAmount} <br>`);


// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// let num1 = 5;
// num1 += 5;
// num1 *= 10;
// num1 /= 2;
// document.writeln(`The result of number after performing add , multiplication and division is: ${num1}`);

// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// let currentYear = 2025;
// let birthYear = 2002;
// let age = currentYear - birthYear;

// document.writeln(`<h1>Age Calculator</h1><br>`);
// document.writeln(`Current year is: ${currentYear}<br>`);
// document.writeln(`Birth year is: ${birthYear}<br>`);
// document.writeln(`You are ${age} year old`);


// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// let radius = 20;
// let circumference = 2 * 3.142 * radius;
// document.writeln(`The radius is: ${radius}<br>`);
// document.writeln(`The circumferance of circle is: ${circumference} <br>`);
// let area = 3.142 * radius * radius;
// document.writeln(`The area of a circle is: ${area} <br>`);



// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// let favoriteSnack = "Fries";
// let currentAge = 23;
// let maxAge = 80;
// let amountPerDay = 2;
// let totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;
// document.writeln(`<h1>Life Time SUpply Calculator</h1><br>`);
// document.writeln(`Current age is: ${currentAge}<br>`);
// document.writeln(`Max age is: ${maxAge}<br>`);
// document.writeln(`Amount per day is: ${amountPerDay}<br>`);
// document.writeln(`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.<br>`);


// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


// let a = 10;

// document.writeln(`Result: <br>`);
// document.writeln(`The Value of a is: ${a}<br>`);
// document.writeln(`----------------------------------<br>`);
// document.writeln(`The value of ++a is: ${++a}<br>`);
// document.writeln(`Now the value of a is: ${a}<br>`);
// document.writeln(`----------------------------------<br>`);
// document.writeln(`The value of a++ is: ${a++}<br>`);
// document.writeln(`Now the value of a is: ${a}<br>`);
// document.writeln(`----------------------------------<br>`);
// document.writeln(`The value of --a is: ${--a}<br>`);
// document.writeln(`Now the value of a is: ${a}<br>`);
// document.writeln(`----------------------------------<br>`);
// document.writeln(`The value of a-- is: ${a--}<br>`);
// document.writeln(`Now the value of a is: ${a}<br>`);

// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// document.writeln(`a is: ${a}<br>`);
// document.writeln(`b is: ${b}<br>`);
// document.writeln(`result is: ${result}<br>`);


// Write a program that takes input a name from user &
// greet the user.

// let inputName = prompt("Enter the name: ");
// document.writeln(`Hello ${inputName}`);


// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


// let inputNumber = parseInt(prompt("Enter the number for printing Table: "));
// document.writeln(`<h1> Table of ${inputNumber} </h1> <br>`);
// console.log(inputNumber);
// for (let i = 1; i < 11; i++) {
//     if (!inputNumber) {
//         document.writeln(`5 x ${i} = ${5 * i} <br>`);
//     } else {
//         document.writeln(`${inputNumber} x ${i} = ${inputNumber * i} <br>`);
//     }
// }


// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// let subject1 = prompt("Enter Subject 1: ");
// let subject2 = prompt("Enter Subject 2: ");
// let subject3 = prompt("Enter Subject 3: ");
// let obtainedMarksSubject1 = parseFloat(prompt("Enter the number of subject 1: "));
// let obtainedMarksSubject2 = parseFloat(prompt("Enter the number of subject 2: "));
// let obtainedMarksSubject3 = parseFloat(prompt("Enter the number of subject 3: "));
// let sub1percentage = (obtainedMarksSubject1 / 100) * 100;
// let sub2percentage = (obtainedMarksSubject2 / 100) * 100;
// let sub3percentage = (obtainedMarksSubject3 / 100) * 100;
// let totalMarks = 300;
// let totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// let totalPercentage = (totalObtainedMarks / totalMarks) * 100;

// document.writeln(`
// <table border = "1px solid black">
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//         <tr>
//             <td>${subject1}</td>
//             <td>100</td>
//             <td>${obtainedMarksSubject1}</td>
//             <td>${sub1percentage}</td>
//         </tr>
//         <tr>
//         <td>${subject2}</td>
//         <td>100</td>
//         <td>${obtainedMarksSubject2}</td>
//         <td>${sub2percentage}</td>
//         </tr>
//         <tr>
//         <td>${subject3}</td>
//         <td>100</td>
//         <td>${obtainedMarksSubject3}</td>
//         <td>${sub3percentage}</td>
//         </tr>
//         <tr>
//             <td></td>
//             <td>${totalMarks}</td>
//             <td>${totalObtainedMarks}</td>
//             <td>${totalPercentage}</td>
//         </tr>
//     </table>
// `)
