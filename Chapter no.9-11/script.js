var html = +prompt("Enter your obtained html marks");
var css = +prompt("Enter your obtained css marks");
var javaScript = +prompt("Enter your obtained js marks");
var obtainedNumbers = html + css + javaScript;
var totalNumbers = 300;

var percentage = obtainedNumbers / totalNumbers * 100;
if(percentage >= 80){
    var Aone =
    console.log("Congrats A+ Grade !!")
}else if(percentage >= 70){
    var Agrade =
    console.log("Congrats A Grade !!")
}else if(percentage >= 60){
    var Bgrade =
    console.log("Sirf B Grade !!")
}else if(percentage < 60){
    var Fail =
    console.log("Congrats you are fail !!")
}else{
    var invalid =
    console.log("Numbers are not valid")
}
console.log(percentage)

document.write(`<h1>Marks Sheet</h1>
<h4>Total Marks:${totalNumbers}</h4>
<h4>Percentage ${percentage}</h4>
<h4>Grade : ${invalid}</h4>
<h4>Remarks : ${invalid}</h4>
`)
// 1.Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt('Enter City name..!');
if (city === 'karachi') {
    console.log('“Welcome to city of lights”')
}else{
    console.log('Abhi ap intizar farmaiye..')
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt('Enter Your gender')
if (gender === 'male') {
    console.log('Good Morning Sir!')
}else if(gender === 'female'){
    console.log('Good Morning Maam!')
}else{
    console.log('You aere trans-gender')
}


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
var fuel = prompt("Enter remaining fuel in car (in litres)")
if (fuel <= 0.25 ) {
    console.log('“Please refill the fuel in your car”')
}else{
    console.log('Abhi car chl skti hai!!')
}



//3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var userInput = prompt("Enter signal color");
 if (userInput === "red") {
    console.log("Must Stop");    
 }
 else if( userInput === "yellow"){
    console.log("Ready to move ");   

 }
 else if( userInput === "green"){
    console.log("move ");   

 }
 else{
    console.log("Color not valid "); 
 }

//  8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var randomNum = prompt("Enter number");
if (randomNum % 3 === 0){
    alert("Divisible by 3")
}else{
    alert("not possible")
}


// if(true){
//     console.log(true)
// }
// if(false){
//     console.log(false)
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.



var userInput = prompt("Enter number");
if (userInput % 2 === 0) {
    console.log("Your number is even")
}
else {
    console.log("your number is odd")
}

// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var users_value = prompt('enter any number')
var users_second_value = prompt('enter 2 number')
var users_operation_value = prompt('enter operation + - * / %')
// console.log(users_operation_value , users_second_value ,users_value)

if (users_operation_value === "+") {
    console.log(Number(users_value) + Number(users_second_value))  
}else if(users_operation_value === "-"){
    console.log(users_value - users_second_value)
}
else if(users_operation_value === "*"){
    console.log(users_value * users_second_value)
}
else if(users_operation_value === "/"){
    console.log(users_value / users_second_value)
}
else if(users_operation_value === "%"){
    console.log(users_value % users_second_value)
}else{
    console.log("Invalid operator")
}
 
