// Solve the following questions

// • Write a loop to print numbers from 1 to 10.
document.write(`<h1>•print 1 to 10 with loop</h1>`)

for(let i = 1; i<=10; i++){
    document.write(`${i} <br>`)
}


// • Write a loop to print even numbers from 1 to 20.
document.write(`<h1>•This is Even no.</h1>`)

for(let i = 0; i<=20; i+=2){
    document.write(`${i} <br>`)
}

// document.write(<h1>odd No.</h1>)
// • Write a loop to print odd numbers from 1 to 15.
document.write(`<h1>•This is odd no.</h1>`)

for(let i = 1; i<=15; i+=2){
    // document.write(`<h1>odd No.</h1>`)
    document.write(`${i} <br>`)
}


// • Write a loop to calculate and print the factorial of a number (let's say 5).
document.write(`<h1> •loop to calculate and print the factorial of a number</h1>`)

let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

document.write("The factorial of ", number, " is:", factorial);



// • Write a loop to print the multiplication table of a number (let's say 7) up to 10.
document.write(`<h1> •loop to print the multiplication table of a number (let's say 7) up to 10.</h1>`)

for(let i = 1; i<=10; i++){
    document.write(` 7 x ${i} is = ${7*[i]} <br>`)
}

// • Write a loop to print the Fibonacci series up to the 10th term. (The Fibonacci sequence is a type series where each number is the sum of the two that precede it. It starts from 0 and 1 usually. The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.-10)


// • Write a loop to find and print the sum of digits of a number (let's say 123).

// Write a loop to print the reverse of a string (let's say "hello").
document.write(`<h1>•loop to print the reverse of a string (let's say "hello").</h1>`)
let str = "hello";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

document.write("The reverse of '" + str + "' is: " + reversedStr);



// • Write a loop to print the square of numbers from 1 to 10.
document.write(`<h1>•loop to print the square of numbers from 1 to 10.</h1>`)
for  (let i = 1; i<=10; i++){
    document.write(`Square of ${i} is = ${i*i} <br>`)
}

// • Write a loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).
document.write(`<h1>•loop to find and print the smallest element in an array (let's say [3, 7, 2, 9, 5]).</h1>`)
// Given array
let B = [3, 7, 2, 9, 5];

// Initialize the minimum number variable with the first element of the array
let smallestNumber = B[0];

// Loop through the array starting from the second element
for (let i = 1; i < B.length; i++) {
    // Compare the current element with the current minimum number
    if (B[i] < smallestNumber) {
        // If the current element is smaller, update the minimum number variable
        smallestNumber = B[i];
    }
}

// Output the smallest number

document.write(`Array items :[${B}] <br>`);
// Output the largest number
document.write(`The smallest number in the array is:, ${ smallestNumber} <br>`);
