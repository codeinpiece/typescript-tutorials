// GitHub Repo: https://github.com/codeinpiece/typescript-tutorials
// YouTube Channel: https://www.youtube.com/@codeinpieces

import * as promptSync from 'prompt-sync'

// Taking User String Input (Name Input)
const prompt  = promptSync();

const name = prompt('What is your name?');

console.log(`Hello, ${name}! Welcome to Code in Piece!`);


// Example for taking numbers as input and adding them
const prompt = promptSync();

const num1Str = prompt('Enter the first number: ');
const num2Str = prompt('Enter the second number: ');
const num1 = parseInt(num1Str);
const num2 = parseInt(num2Str);
const sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);