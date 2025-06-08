// 1. Declare an empty array using JS literal notation to store
// student names in future.


// var emptyArr = [];
// var futureStore = prompt("Please enter a value:");
// emptyArr.push(futureStore);

// 2. Declare an empty array using JS object notation to store
// student names in future.


// var emptyArr = [];
// var futureStore = prompt("Please enter a value:");
// console.log(emptyArr);
// emptyArr.push(futureStore);
// document.write(emptyArr);


// 3. Declare and initialize a strings array.
var stringArr = ['Ali','Maaz','Muttahar'];
console.log(stringArr);

// 4. Declare and initialize a numbers array.

var numArr = [1,2,3,44,66,90];
console.log(numArr);


// 5. Declare and initialize a boolean array.

var bolArr = [True];
console.log(bolArr);



// 6. Declare and initialize a mixed array.

var mixArr = ['Ali','Muttahar','maaz',22,66,true];
console.log(mixArr);


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write(`<div> <h1>QUALIFICATIONS;</h1>
<ol >
<li>${qualifications[0]}</li>
<li>${qualifications[1]}</li>
<li>${qualifications[2]}</li>
<li>${qualifications[3]}</li>
<li>${qualifications[4]}</li>
<li>${qualifications[5]}</li>
<li>${qualifications[6]}</li>
<li>${qualifications[7]}</li>

</ol></div>`);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students 

var studentsName = ["Saad", "Huzaifa", "Ali"];
var studentsScore = [80, 60, 45];
var totalMarks = 100;

document.write(`Score of ${studentsName[0] } is ${studentsScore[0]} ,And  Percentage is: ${studentsScore[0] / totalMarks * 100 }% <br>`)

document.write(`Score of ${studentsName[1] } is ${studentsScore[1]} ,And Percentage is: ${studentsScore[1] / totalMarks * 100 }%<br>`)

document.write(`Score of ${studentsName[2] } is ${studentsScore[2]} ,And Percentage is: ${studentsScore[2] / totalMarks * 100 }%`)

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
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors= ["red" , "blue" , "yellow"];
var userInput = prompt("Please enter color to add in the start of array")
colors.push(userInput);
console.log(colors)



var colors= ["red" , "blue" , "yellow"];
var userInput = prompt("Please enter color name to add in the array");
var indexNumber = prompt("Please enterindex number to add in the array")
colors.splice(indexNumber , 0 ,userInput);
console.log(colors)

// a. Add color to the beginning of the array
var newColorBeginning = prompt(`Enter a color to add to the beginning:`);
colors.unshift(newColorBeginning);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding color to the beginning:</p>`);
document.write(`<h3>${colors}</h3>`);

// b. Add color to the end of the array
var newColorEnd = prompt(`Enter a color to add to the end:`);
colors.push(newColorEnd);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding color to the end:</p>`);
document.write(`<h3>${colors}</h3>`);

// c. Add two more colors to the beginning of the array
colors.unshift(`Purple`, `Yellow`);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding two more colors to the beginning:</p>`);
document.write(`<h3>${colors}</h3>`);

// d. Delete the first color in the array
colors.shift();

// Display the updated array
document.write(`<p style="font-size:25px">Array after deleting the first color:</p>`);
document.write(`<h3>${colors}</h3>`);

// e. Delete the last color in the array
colors.pop();

// Display the updated array
document.write(`<p style="font-size:25px">Array after deleting the last color:</p>`);
document.write(`<h3>${colors}</h3>`);

// f. Add a color at a specific index
var indexToAdd = +prompt(`Enter the index to add a color:`);
var colorToAdd = prompt(`Enter the color to add:`);
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array
document.write(`<p style="font-size:25px">Array after adding color at a specific index:</p>`);
document.write(`<h3>${colors}</h3>`);

// g. Delete colors at a specific index
var indexToDelete = +prompt(`Enter the index to delete color(s):`);
var deleteCount =  +prompt(`Enter the number of colors to delete:`);
colors.splice(indexToDelete, deleteCount);

// Display the updated array
document.write(`<p style="font-size:25px">Array after deleting color(s) at a specific index:</p>`);
document.write(`<h3>${colors}</h3>`);

