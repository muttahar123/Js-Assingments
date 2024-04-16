//1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// Prompting user for first name
var firstName = prompt("Enter your first name:");

// Prompting user for last name
var lastName = prompt("Enter your last name:");

// Merging first and last name
var fullName = firstName + " " + lastName;

// Greeting the user with full name
alert("Hello, " + fullName + "! Welcome!");


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
document.write(`<h3>This is Question No.2<h3>`);

var favphone = prompt("Enter your favorite mobile model");
document.write(`My favorite phone is: ${favphone} <br>`);
document.write(`Lenght of string: ${favphone.length}`)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
document.write(`<h3>This is Question No.3<h3>`);

var pakstng = 'Pakistani';
var indexOfN = pakstng.indexOf('n');
document.write(`String : ${pakstng} <br>`);
document.write(`Index of 'n' : ${indexOfN}`);


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
document.write(`<h3>This is Question No.4<h3>`);

var hello = 'Hello World';
var lastIndex = hello.lastIndexOf('l');
document.write(`String : ${hello} <br>`);
document.write(`Last Index of 'l' : ${lastIndex}`);


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
document.write(`<h3>This is Question No.5<h3>`);


var characterAtThirdIndex = pakstng.charAt(3);
document.write(`String : ${pakstng} <br>`);
document.write(`Character at Index  3 : ${characterAtThirdIndex}`);

// 6. Repeat Q1 using string concat() method.


// Prompting user for first name
var firstName = prompt("Enter your first name:");

// Prompting user for last name
var lastName = prompt("Enter your last name:");

// Concatenating first and last name using concat() method
var fullName = firstName.concat(" ", lastName);

// Greeting the user with full name
alert("Hello, " + fullName + "! Welcome!");



// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
document.write(`<h3>This is Question No.7<h3>`);


var word = "Hyderabad";
        
// Replace "Hyder" with "Islam"
var replacedWord = word.replace("Hyder", "Islam");

// Display the result in the browser
document.write("Original word: " + word + "<br>");
document.write("After replacement: " + replacedWord);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
document.write(`<h3>This is Question No.8<h3>`);


var message = 'Ali and Sami are best friends. They play cricket and football together.';
var replaceMsg = message.replace('and','&');
document.write(`${message} <br>`)
document.write(`Replaced msg: ${replaceMsg}`);


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
document.write(`<h3>This is Question No.9<h3>`);

// Define the string
var str = "472";
        
// Convert the string to a number
var num = Number(str);

// Display the original string and the converted number
document.write("Value: " + str + "<br>");
document.write("Type : " + typeof str + "<br>");

// Display the types of the original string and the converted number
document.write("Value: " + num + "<br>");+
document.write("Type : " + typeof num + "<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
document.write(`<h3>This is Question No.10<h3>`);

var capital = prompt('Enter the value to convert capitalized form')
var capitalForm = capital.toUpperCase;
document.write(`User Input: ${capital}<br>`)
document.write(`Upper case: ${capitalForm}`)

// 11. Write a program that takes user input. Convert and
// show the input in title case.
// document.write(`<h3>This is Question No.11<h3>`);
// var titlee = prompt('Enter value to convert into titled formed')
var titleeForm = titlee.to

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
document.write(`<h3>This is Question No.12<h3>`);

  // Define the number
  var num = 35.36;
        
  // Convert the number to a string and remove the dot
  var numAsString = num.toString().replace('.', '');
  
  // Display the converted string in the browser
  document.write("Number as string without dot: " + numAsString);

//   14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// Define the array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt user for input
var userInput = prompt("Enter an item to search:");

// Convert user input to lowercase for case-insensitive comparison
var lowercaseUserInput = userInput.toLowerCase();

// Variable to keep track of whether the item is found
var isFound = false;

// Loop through the array to search for the item
for (var i = 0; i < A.length; i++) {
    // Convert the current array element to lowercase for case-insensitive comparison
    var lowercaseArrayItem = A[i].toLowerCase();
    // Check if the current array element matches the user input
    if (lowercaseArrayItem === lowercaseUserInput) {
        // If found, set the flag to true and break out of the loop
        isFound = true;
        break;
    }
}

// Inform user whether the item is found or not
if (isFound) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}
