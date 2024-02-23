var myage = 'I am 18 years old'
alert(myage)


   // Check if the 'visits' variable is already set in localStorage
   if (localStorage.getItem('visits') === null) {
    // If not set, initialize it to 1
    localStorage.setItem('visits', 1);
} else {
    // If set, increment the value
    let visits = parseInt(localStorage.getItem('visits'));
    visits++;
    localStorage.setItem('visits', visits);
}

// Get the current value of 'visits' from localStorage
let currentVisits = localStorage.getItem('visits');

// Display the message in an alert box
alert("You have visited this site " + currentVisits + " times.");

var birthYear ='My birth year is 2005.'
// let type = ' Data type of my declared variable is number'
document.write(birthYear )

var type = ' \n Data type of my declared variable is number '

document.write(type )
 
var jhon = 'John Doe ordered 5 T-shirt(s) on XYZ Clothing store.'
document.write(jhon)
