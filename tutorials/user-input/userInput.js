"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
/*
const prompt  = promptSync();

const name = prompt('What is your name?');

console.log(`Hello, ${name}! Welcome to Code in Piece!`);
*/
var prompt = promptSync();
var num1Str = prompt('Enter the first number: ');
var num2Str = prompt('Enter the second number: ');
var num1 = parseInt(num1Str);
var num2 = parseInt(num2Str);
var sum = num1 + num2;
console.log("The sum of ".concat(num1, " and ").concat(num2, " is: ").concat(sum));
