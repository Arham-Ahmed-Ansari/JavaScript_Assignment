// // Combined solutions for all 18 string questions (no functions)

// // Q1
// let firstName = prompt("Enter first name:");
// let lastName = prompt("Enter last name:");
// let fullName = (firstName ?? "") + " " + (lastName ?? "");
// alert("Hello, " + fullName.trim() + "!");

// // Q2
// let model = prompt("Enter your favorite mobile phone model:");
// if (model !== null) {
//   document.write("<br>Q2: Length: " + model.length);
// }

// // Q3
// let word = "Pakistani";
// let idx = word.indexOf("n");
// document.write("<br>Q3: Index of 'n' in Pakistani is " + idx);

// // Q4
// let s = "Hello World";
// let lastIdx = s.lastIndexOf("l");
// document.write("<br>Q4: Last index of 'l' is " + lastIdx);

// // Q5
// let w = "Pakistani";
// let ch = w.charAt(3);
// document.write("<br>Q5: Character at index 3: " + ch);

// // Q6
// let f = prompt("First name:");
// let l = prompt("Last name:");
// let fullname2 = "".concat(f ?? "", " ", l ?? "");
// alert("Hello, " + fullname2.trim() + "!");

// // Q7
// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("<br>Q7: After replace: " + newCity);

// // Q8
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replaced = message.replace(/and/g, "&");
// document.write("<br>Q8: " + replaced);

// // Q9
// let str = "472";
// let num = Number(str);
// document.write("<br>Q9: Value: " + str + " (" + typeof str + ")");
// document.write("<br>Q9: Value: " + num + " (" + typeof num + ")");

// // Q10
// let input = prompt("Enter text:");
// if (input !== null) {
//   document.write("<br>Q10: Upper case: " + input.toUpperCase());
// }

// // Q11
// let text = prompt("Enter text to convert to Title Case:");
// if (text !== null) {
//   let title = text
//     .toLowerCase()
//     .split(" ")
//     .filter(Boolean)
//     .map(word => word[0]?.toUpperCase() + word.slice(1))
//     .join(" ");
//   document.write("<br>Q11: Title case: " + title);
// }

// // Q12
// let num2 = 35.36;
// let s2 = num2.toString().replace(".", "");
// document.write("<br>Q12: " + s2);

// // Q13
// let username = prompt("Enter username (no @ . , ! allowed):");
// if (username !== null) {
//   if (/[,@.!]/.test(username)) {
//     alert("Invalid username. Please do not use @ , . or !");
//   } else {
//     alert("Username accepted: " + username);
//   }
// }

// // Q14
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let item = prompt("Which item are you looking for?");
// if (item !== null) {
//   let found = A.some(x => x.toLowerCase() === item.trim().toLowerCase());
//   if (found) {
//     alert(item + " is available.");
//   } else {
//     alert(item + " is not available.");
//   }
// }

// // Q15
// let pass = prompt("Enter password (min 6 chars, letters & numbers, not start with digit):");
// if (pass !== null) {
//   let valid = true;
//   if (pass.length < 6) valid = false;
//   if (/^[0-9]/.test(pass)) valid = false;
//   if (!/[a-zA-Z]/.test(pass)) valid = false;
//   if (!/[0-9]/.test(pass)) valid = false;
//   if (valid) {
//     alert("Password accepted");
//   } else {
//     alert("Invalid password. Try again.");
//   }
// }

// // Q16
// let university = "University of Karachi";
// let arr = university.split("");
// document.write("<br>Q16:<br>");
// arr.forEach(ch2 => document.write(ch2 + "<br>"));

// // Q17
// let u = prompt("Enter some text:");
// if (u !== null && u.length > 0) {
//   document.write("<br>Q17: Last character: " + u.charAt(u.length - 1));
// } else {
//   document.write("<br>Q17: No input.");
// }

// // Q18
// let text2 = "The quick brown fox jumps over the lazy dog";
// let matches = text2.toLowerCase().match(/the/g);
// let count = matches ? matches.length : 0;
// document.write("<br>Q18: Number of occurrences of 'the': " + count);
