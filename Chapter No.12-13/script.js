
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var inputChar = prompt('Enter a character:');

var charCode = inputChar.charCodeAt(0);

if (charCode >= 48 && charCode <= 57) {
    alert(inputChar + ' is a number.');
}
else if (charCode >= 65 && charCode <= 90) {
    alert(inputChar + ' is an uppercase letter.');
}
else if (charCode >= 97 && charCode <= 122) {
    alert(inputChar + ' is a lowercase letter.');
}
else {
    alert(inputChar + ' is not a number or letter.');
}




// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var a = +prompt("Enter first number :")
var b = +prompt("Enter second number :")

if (a > b) {
      alert(`${a} is greater than ${b}`)
}else if (a < b) {
      alert(`${b} is greater than ${a}`)
}else{
      alert(`${a} is equal to ${b}`)
}



// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var userNum = +prompt("Enter any number to check whether it is positive , negative or zero :")

if (userNum > 0) {
      alert(`${userNum} is Positive`)
}else if (userNum < 0) {
      alert(`${userNum} is Negative`)
}else{
      alert(`The number is 0`)
}



// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
var vovel = prompt('Enter only one character..')
if (vovel === 'a','e','i','o','u' ) {
    document.write('Your Enter character is a vovel alphabet');
}else if (vovel === '$','@','#','%','^','&','*','!','*') {
    document.write('You enter a special character');
}else{
    document.write('you aenters normal alphabet');
}





// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
var correctPassword = "abc123def"
var userPassword = prompt("Please Enter your Password :")

if (userPassword === "") {
      alert("Please enter your password")
}else if (userPassword === correctPassword) {
      alert("Correct! The password you entered matches the original password")
}else{
      alert("Incorrect Password")
}


//Q6
///
var greeting;
var hour = 13;
if (hour < 18) {
      greeting = "Good day";
      alert(greeting)
}
else{
      greeting = "Good evening";
      alert(greeting)
}

///

//Q7
///
var time = +prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):");

if (time >= 0 && time < 1200) {
      alert("Good morning!")
} else if (time >= 1200 && time < 1700) {
      alert("Good afternoon!")
} else if (time >= 1700 && time < 2100) {
      alert("Good evening!")
} else if (time >= 2100 && time < 2400) {
      alert("Good night!")
} else {
      alert("Invalid input. Please enter a time between 0000 and 2359.")
}
///