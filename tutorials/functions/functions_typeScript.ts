let x = 10;
let y = 5;

let result = x+y;
console.log(result);

// Declare a funciton to add two numbers
function addNumbers(a: number, b:number): number{
    return a + b;
}

// Use the function
let resultAdd = addNumbers(10, 12); // Calling the addNumbers function
console.log(resultAdd); //Print the answer returned using the addNumbers function

//Examples for Strting Functions
function greetings(personName: string): void{
    console.log(`Hello ${personName}, How are you?`);
}

//Calling the greetings function
greetings("Alice");