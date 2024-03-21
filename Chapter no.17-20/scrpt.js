// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)




// 2. Declare and initialize a multidimensional array
// representing the following matrix:



// 3. Write a program to print numeric counting from 1 to 10.
 document.write(`<center><h1>This is question no.3</h1></center>`)

for(let i=1 ; i<=10; i++){
    document.write(`<center>${i} <br></center>`)
}


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
document.write(`<h1>This is question no.4</h1>`)

var tableNo= prompt("Enter table no. to show it's mutlplication table.!!");
var tableLenght = prompt('Enter lenght of multiplication table!')
document.write(`<h3>Multiplication table of ${tableNo} </h3> 
   <h3>lenght = ${tableLenght} </h3>`);
for (let i = 1; i <=tableLenght ; i++) {
//    document.write(`<h1>Multiplication table of ${tableNo} </h1> 
//    <h2>lenght = ${tableLenght} </h2>`);
   
 document.write(  `${tableNo} x ${i} is = ${tableNo*i} <br>` );
    
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
document.write(`<h1>This is question no.5</h1>`)

let  fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];
for (let i = 0; i<fruits.length; i++){
    document.write(`${fruits[i]} <br>` )
}
for( let i=0; i<fruits.length; i++){
    document.write(`Element at index ${i} is ${fruits[i]} <br>`)
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write(`<h1>This is question no.6</h1>`)
    
 // a. Counting
 let counting = '';
 for (let i = 1; i <= 15; i++) {
     counting += i + ', ';
 }
 document.getElementById('counting').textContent = counting.slice(0, -2); // Remove the last comma

 // b. Reverse counting
 let reverseCounting = '';
 for (let i = 10; i >= 1; i--) {
     reverseCounting += i + ', ';
 }
 document.getElementById('reverseCounting').textContent = reverseCounting.slice(0, -2); // Remove the last comma

 // c. Even
 let even = '';
 for (let i = 0; i <= 20; i += 2) {
     even += i + ', ';
 }
 document.getElementById('even').textContent = even.slice(0, -2); // Remove the last comma

 // d. Odd
 let odd = '';
 for (let i = 1; i <= 19; i += 2) {
     odd += i + ', ';
 }
 document.getElementById('odd').textContent = odd.slice(0, -2); // Remove the last comma

 // e. Series
 let series = '';
 for (let i = 1; i <= 10; i++) {
     series += (2 * i) + 'k, ';
 }
 document.getElementById('series').textContent = series.slice(0, -2); // Remove the last comma

//  8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
document.write(`<h1>This is question no.8</h1>`)

// Given array
let A = [24, 53, 78, 91, 12];

// Initialize the maximum number variable with the first element of the array
let largestNumber = A[0];

// Loop through the array starting from the second element
for (let i = 1; i < A.length; i++) {
    // Compare the current element with the current maximum number
    if (A[i] > largestNumber) {
        // If the current element is larger, update the maximum number variable
        largestNumber = A[i];
    }
}


document.write(`Array items :[${A}] <br>`);
// Output the largest number
document.write("The largest number in the array is:", largestNumber);


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
document.write(`<h1>This is question no.9</h1>`)

// Given array
let B = [24, 53, 78, 91, 12];

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




// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
document.write(`<h1>This is question no.10</h1>`)

// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 5
    if (i % 5 === 0) {
        // If it is a multiple of 5, print it
        document.write(i + ',');
    }
}
