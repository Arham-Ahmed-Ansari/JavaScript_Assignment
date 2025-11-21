// console.log("Assignment4");

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let studentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// let studentName = new Array();

// 3. Declare and initialize a strings array.

// let strArray = ['Arham','Ahmed','Ansari'];

// 4. Declare and initialize a numbers array.

// let numArray = [1,2,3,4,5,6];

// 5. Declare and initialize a boolean array.

// let boolArray = [true,false,true];

// 6. Declare and initialize a mixed array.

// let mixArray = [1, 'Arham', true, [1, 2, 3], { name: "Arham", age: 23 }];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.phil', 'PHD'];
// document.writeln(`<h1>Qualification</h1><br>`)
// qualifications.forEach((val) => {
//     document.writeln(`
//     <ul>
//     <li>${val}</l1><br>
//     </ul>
//     `);
// })


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentName = ['Arham', 'Ahmed', 'Ansari'];
// let studentScore = [497, 478, 489];
// let totalMarks = 500;

// document.writeln("Score of " + studentName[0] + "is " + studentScore[0] + "and percentage is " + (studentScore[0] / totalMarks) * 100);
// document.writeln("<br>");
// document.writeln("Score of " + studentName[1] + "is " + studentScore[0] + "and percentage is " + (studentScore[1] / totalMarks) * 100);
// document.writeln("<br>");
// document.writeln("Score of " + studentName[2] + "is " + studentScore[0] + "and percentage is " + (studentScore[2] / totalMarks) * 100);



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then

// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.


// let colorNames = ['Red ', 'blue ', 'green ', 'orange ', 'purple '];
// let userAddColor = prompt("Enter the color name you want to add in begining");
// colorNames.unshift(userAddColor);
// let userAddColorEnd = prompt("Enter the color name you want to add at the end: ");
// colorNames.push(userAddColorEnd);
// let userAddTwoColor = prompt("Enter the color name you want to add in begining");
// colorNames.unshift(userAddTwoColor);
// let userAddThreeColor = prompt("Enter the color name you want to add in begining");
// colorNames.unshift(userAddThreeColor);
// let userFirstColorDelete = prompt("Do you want to delete the first color: true/false");
// if (userFirstColorDelete == "true") {
//     colorNames.shift();
// }
// let userLastColorDelete = prompt("Do you want to delete the last color: true/false");
// if (userLastColorDelete == "true") {
//     colorNames.pop();
// }
// let userAddSpecificLocationColor = parseInt(prompt("Enter the specific location number you want to add color:"));
// let userAddSpecificLocationColorName = prompt("Enter the color name:");
// colorNames.splice(userAddSpecificLocationColor, 0, userAddSpecificLocationColorName);

// let userSpecificDeleteLocation = parseInt(prompt("Enter the specific location number you want to delete color:"));
// let userSpecificDeleteLocationCount = parseInt(prompt("Enter how many color you want to delete:"));
// colorNames.splice(userSpecificDeleteLocation,userSpecificDeleteLocationCount);

// document.writeln(`The present Colors are`);
// colorNames.forEach((colorNames) => {
//     document.writeln(`<ul><li>${colorNames}</li></ul>`);
// })


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let studentScore = [40, 100, 1, 5, 25, 10];
// let sortedArray = studentScore.sort((a, b) => {
//     return a - b;
// })

// console.log(sortedArray);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let citiesName = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar'];
// let selectedCities = [citiesName[0], citiesName[3], citiesName[2]];
// document.writeln(`Cities Names are: ${citiesName}<br>`)
// document.writeln(`Selected Cities Names are: ${selectedCities}<br>`)
// console.log(selectedCities);


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This", "is", "my", "cat"];
// document.writeln("Array: " + arr, "<br>");
// let str = arr.join(" ");
// document.writeln("String: " + str, "<br>")
// console.log(str);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let newArray = ["keyboard", "mouse", "printer", "monitor"];
// document.writeln("Array: " + newArray + "<br>");
// newArray.forEach((val) => {
//     document.writeln(`<ul><li>${val}</li></ul>`);
// })


// 14. Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)

// let newArray = ["keyboard", "mouse", "printer", "monitor"];
// document.writeln("Array: " + newArray + "<br>");

// for (let index = newArray.length - 1; index >= 0; index--) {
//     document.writeln(`<ul><li>${newArray[index]}</li></ul>`);
// }

// newArray.forEach((val) => {
//     document.writeln(`<ul><li>${val}</li></ul>`);
// })


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write(`
// <select name="" id="">
//         <option value="">${manufacturers[0]}</option>
//         <option value="">${manufacturers[1]}</option>
//         <option value="">${manufacturers[2]}</option>
//         <option value="">${manufacturers[3]}</option>
//         <option value="">${manufacturers[4]}</option>
//         <option value="">${manufacturers[5]}</option>
// </select>
// `);