// GitHub Repo: https://github.com/codeinpiece/typescript-tutorials
// YouTube Channel: https://www.youtube.com/@codeinpieces

// Topic: Array Functions in TypeScript

let fruits: string[] = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Original array: ", fruits, '\n');

// push()
//The push() function adds one or more elements to the end of an array and returns the new length of the array.
let pushLength = fruits.push("peach");
console.log("After push(): ", fruits);
console.log("Length returned by push(): ", pushLength);


// pop()
//The pop() function removes the last element from an array and returns that element.
let popElement = fruits.pop();
console.log("After pop():", fruits);
console.log("Element returned by pop(): ", popElement);


//shift()
// The shift() function removes the first element from an array and returns that element.
let shiftElement = fruits.shift();
console.log("After shift(): ", fruits)
console.log("Element returned by shift function: ", shiftElement);


//unshift()
// The unshift() function adds one or more elements to the beginning of an array and returns the new length of the array.
let unshiftLength = fruits.unshift("apricot");
console.log("After unshift(): ", fruits);
console.log("Lenght returned by unshift():", unshiftLength);

//slice()
//The slice() function returns a new array that contains a subset of the elements of the original array.
let sliceArray: string[] = fruits.slice(1, 3);
console.log("Array after slice (subset): ", sliceArray);

//splice()
// The splice() function removes elements from an array and optionally replaces them with new elements. 
//This function can be used to add or remove elements from anywhere in the array.
console.log("Before splice(): ", fruits);
fruits.splice( 2,2);
console.log("After the splice(): ", fruits);


//concat()
//The concat() function joins two or more arrays and returns a new array that contains all the elements of the original arrays.


