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
var addNumbers = function (a, b) { return a + b; };
// Use the function
var result = addNumbers(10, 11);
console.log(result);
// Example 2
var addSubnumbers = function (x, y) {
    var addition = x + y;
    var subtraction = addition - 2;
    return subtraction;
};
var customformula = addSubnumbers(20, 30); //50-2 = 48
console.log(customformula);
//Examples for Strting Functions
/*
function greetings(personName: string): void{
    console.log(`Hello ${personName}, How are you?`);
}
*/
//Arrow Function for greetings
var greetings = function (personName) { return console.log("Hello ".concat(personName, ", How are you?")); };
//Calling the greetings function
greetings("Alice");
