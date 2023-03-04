// GitHub Repo: https://github.com/codeinpiece/typescript-tutorials
// YouTube Channel: https://www.youtube.com/@codeinpieces

//Topic: Arrow Functions in TypeScript

// Normal Function for addNumbers
// Declare a funciton to add two numbers 
/*
function addNumbers(a: number, b:number): number{
    return a + b;
}
*/

//Arrow Function for addNumbers
const addNumbers = (a: number, b: number) => a+b;


// Use the function
let result = addNumbers(10, 11);
console.log(result);


// Example 2
const addSubnumbers = (x : number, y: number) => {
    let addition = x+y;
    let subtraction = addition - 2;
    return subtraction;   
}

let customformula = addSubnumbers(20,30); //50-2 = 48
console.log(customformula);

//Examples for Strting Functions
/*
function greetings(personName: string): void{
    console.log(`Hello ${personName}, How are you?`);
}
*/

//Arrow Function for greetings
const greetings = (personName: string) => console.log(`Hello ${personName}, How are you?`);


//Calling the greetings function
greetings("Alice");




