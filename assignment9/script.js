// console.log("Arham");

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let userNumber = parseFloat(prompt("Enter the Number: "));
// document.writeln(`Your Number is: ${userNumber}`);
// document.writeln(`Your round off number is: `, Math.round(userNumber));
// document.writeln(`Your round off number is: `, Math.floor(userNumber));
// document.writeln(`Your round off number is: `, Math.ceil(userNumber));


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let userNumber = parseFloat(prompt("Enter the Number in Negative: "));
// document.writeln(`Your Number is: ${userNumber}`);
// document.writeln(`Your round off number is: `, Math.round(userNumber));
// document.writeln(`Your round off number is: `, Math.floor(userNumber));
// document.writeln(`Your round off number is: `, Math.ceil(userNumber));


// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// let num = 5;

// if (num < 0) {
//     document.writeln(`You absolute value of ${num} is `, Math.abs(num));
// } else {
//     document.writeln(`You absolute value of ${num} is `, Math.abs(num));
// }


// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// let dice = Math.random() * 7;
// let diceMethod = Math.round(Math.floor(dice).toFixed(1));
// document.writeln(`Your dice value is : ${diceMethod}`)
// console.log(Math.round(Math.floor(dice).toFixed(1)));


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// let toss = Math.random() * 3;
// let tossMethod = Math.round(Math.floor(toss).toFixed(1));

// if (tossMethod == 1) {
//     document.writeln(`${tossMethod}
//     Random Coin Value is: Heads
//     `)
// } else {
//     document.writeln(`${tossMethod}
//     Random Coin Value is: Tails
//     `)
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// let randomNumber = Math.random() * 100;
// let randomNumberMethod = Math.round(Math.floor(randomNumber).toFixed(1))
// document.writeln(`Random Number between 1 and 100 is : ${randomNumberMethod}`);
// console.log(randomNumber);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// let userWeight = parseFloat(prompt("Enter yur weight in kilograms: "));
// document.writeln(`The weight of user is: ${userWeight} Kilograms`);


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// let userNumber = parseInt(prompt("Enter the Number from 1 to 10: "));
// let secretNumber = Math.random() * 11;
// let secretNumberMethod = Math.round(Math.floor(secretNumber).toFixed(1));

// if (userNumber == secretNumberMethod) {
//     alert("congratules You entered the coreect number");
// } else {
//     alert("Please Try again");
// }


// 1. Current Date and Time
// var currentDate = new Date();
// document.writeln("Current Date: " + currentDate + "<br>");

// 2. Current Month in Words
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = monthNames[currentDate.getMonth()];
// alert("Current Month: " + currentMonth);

// 3. First 3 letters of current day
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayShort = dayNames[currentDate.getDay()];
// alert("Today is " + currentDayShort);

// 4. Fun Day Check
// var dayIndex = currentDate.getDay();
// if (dayIndex === 0 || dayIndex === 6) {
//     alert("It’s Fun day");
// }

// 5. First 15 days or Last days
// var date = currentDate.getDate();
// if (date < 16) {
//     document.writeln("First fifteen days of the month<br>");
// } else {
//     document.writeln("Last days of the month<br>");
// }

// 6. Minutes since Jan. 1, 1970
// var msSinceEpoch = currentDate.getTime();
// var minsSinceEpoch = msSinceEpoch / (1000 * 60);
// totalMinutes = minsSinceEpoch;
// document.writeln("Minutes since Jan 1, 1970: " + totalMinutes + "<br>");

// 7. AM or PM
// var hours = currentDate.getHours();
// if (hours < 12) {
//     alert("Its AM");
// } else {
//     alert("Its PM");
// }

// 8. Last day of last month of 2020
// var laterDate = new Date("December 31, 2020");
// document.writeln("Later Date: " + laterDate + "<br>");

// 9. Days since 1st Ramadan (June 18, 2015)
// var ramadanStart = new Date("June 18, 2015");
// var diffInMs = currentDate - ramadanStart;
// var daysPast = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
// alert(daysPast + " days have passed since 1st Ramadan, 2015");

// 10. Seconds since beginning of 2015
// var startOf2015 = new Date("January 1, 2015");
// var diffInSeconds = (currentDate - startOf2015) / 1000;
// document.writeln("Seconds elapsed since 2015: " + Math.floor(diffInSeconds) + "<br>");

// 11. Set hour ahead
// var hourAhead = new Date();
// var currentHour = hourAhead.getHours();
// hourAhead.setHours(currentHour + 1);
// document.writeln("1 hour ahead from current time: " + hourAhead + "<br>");

// 12. 100 years back
// var pastDate = new Date();
// pastDate.setFullYear(pastDate.getFullYear() - 100);
// alert("100 years back: " + pastDate);

// 13. Birth Year Calculation
// var userAge = prompt("Enter your age:");
// var birthYear = currentDate.getFullYear() - userAge;
// document.writeln("Your birth year is " + birthYear + "<br>");

// 14. K-Electric Bill
// var customerName = "ABC Customer";
// var units = 410;
// var chargesPerUnit = 16;
// var lateSurcharge = 350;

// var netAmount = units * chargesPerUnit;
// var grossAmount = netAmount + lateSurcharge;

// document.writeln("Customer Name: " + customerName + "<br>");
// document.writeln("Month: " + currentMonth + "<br>");
// document.writeln("Number of units: " + units + "<br>");
// document.writeln("Charges per unit: " + chargesPerUnit + "<br>");
// document.writeln("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
// document.writeln("Late Payment Surcharge: " + lateSurcharge.toFixed(2) + "<br>");
// document.writeln("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2) + "<br>");