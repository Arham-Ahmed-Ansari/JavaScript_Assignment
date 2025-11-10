// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let userInput = prompt("Enter the city name: ");
// if (userInput === 'karachi') {
//     alert("Welcome to city of lights");
// } else {
//     alert(`Welcome to ${userInput}`);
// }


// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let userGender = prompt("Enter your Gender");
// if (userGender === 'male' || userGender === 'Male') {
//     alert('Welcome Sir');
// } else {
//     alert('Welcome Mam');
// }


// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let userInputSigal = prompt("Enter the signal you are seeing: ");
// if (userInputSigal === 'Red' || userInputSigal === 'red') {
//     alert("Must Stop")
// } else if (userInputSigal === 'Yellow' || userInputSigal === 'yellow') {
//     alert("Ready to move");
// } else if (userInputSigal === 'Green' || userInputSigal === 'green') {
//     alert('Move Now')
// } else {
//     alert("give some input");
// }


// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// let userInputLiter = parseFloat(prompt("Enter the remaining fuel in liter"));
// if (userInputLiter === 0.25) {
//     alert("please refeal your fuel to keep going");
// } else {
//     alert("keep moving");
// }


// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.


// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");  alert will be displayed because the condition is true
// }

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); alert will not be displayed
// }


// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true"); // this condition will run
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true"); // this condition will run
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");  the condition will run
// }



// if (true) {
//     alert("True"); // this condition will run
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat"); this condition is true because the comparison is based on string alphabet
// }


// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:


// let marksSub1 = parseFloat(prompt("Enter the marks of subject1: "));
// let marksSub2 = parseFloat(prompt("Enter the marks of subject2: "));
// let marksSub3 = parseFloat(prompt("Enter the marks of subject3: "));
// let obtainedMarks = marksSub1 + marksSub2 + marksSub3;
// let totalMarks = parseInt(prompt("Enter the the total Marks: "));
// let percentage = (obtainedMarks / totalMarks) * 100;

// document.writeln(`<h1>Marks Sheet</h1>`);
// document.writeln(`<h3>Total Marks: ${totalMarks}</h3>`);
// document.writeln(`<h3>Obtained Marks: ${obtainedMarks}</h3>`);
// if (percentage >= 80) {
//     document.writeln('<h3>Grade: A-one<br></h3>');
//     document.writeln('<h3>Remarks: Excellent</h3>');
// } else if (percentage >= 70) {
//     document.writeln('<h3>Grade: A</h3><br>');
//     document.writeln('<h3>Remarks: Good<h3>');
// } else if (percentage >= 60) {
//     document.writeln('<h3>Grade: B</h3><br>');
//     document.writeln('<h3>Remarks: You Need to improve</h3>');
// } else {
//     document.writeln('<h3>Grade: Fail</h3><br>');
//     document.writeln('<h3>Remarks: Sorry</h3>');
// }


// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// let secretNumber = 7;
// let userInput = parseInt(prompt("Enter the Number: "));
// if (userInput === secretNumber) {
//     alert('Bingo! Correct answer')
// } else if (userInput === 6) {
//     alert('Close enough to the correct answer')
// } else {
//     alert('Wrong Number');
// }


// Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let userNumber = parseInt(prompt("Enter the Number"));
// if (userNumber % 3 === 0) {
//     alert("The given number is divisible by 3");
// } else {
//     alert("The given number is not divisible by 3");
// }


// Write a program that checks whether the given input is an
// even number or an odd number.

// let userNumber = parseInt(prompt("Enter the Number"));
// if (userNumber % 2 === 0) {
//     alert(`${userNumber} is Even`);
// } else {
//     alert(`${userNumber} is odd`);
// }


// Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// let userInputTemperature = parseFloat(prompt("Enter the temperature: "));
// if (userInputTemperature >= 40) {
//     alert('It is too hot outside.');
// } else if (userInputTemperature >= 30) {
//     alert('The Weather today is Normal.')
// } else if (userInputTemperature >= 20) {
//     alert('Today’s Weather is cool.')
// } else if (userInputTemperature >= 10) {
//     alert('OMG! Today’s weather is so Cool.')
// } else {
//     alert('please enter temperature');
// }


// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// let firstNumber = parseInt(prompt('Enter First Number:'));
// let secondNumber = parseInt(prompt('Enter Second Number:'));
// let operation = prompt('Select Operation: + , - , / , * , %');

// if (operation == '+') {
//     alert(firstNumber + secondNumber);
// } else if (operation == '-') {
//     alert(firstNumber - secondNumber);
// } else if (operation == '*') {
//     alert(firstNumber * secondNumber);
// } else if (operation == '/') {
//     alert(firstNumber / secondNumber);
// } else if (operation == '%') {
//     alert(firstNumber % secondNumber);
// } else {
//     alert('please enter the number');
// }