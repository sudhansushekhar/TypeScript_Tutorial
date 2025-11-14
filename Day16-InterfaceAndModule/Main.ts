// Calling a function from another module one by one
/*
import { appName } from './Module';
import { add } from './Module';
import { subtract } from './Module';
import { Formatter } from './Module';
*/

// calling a function from another module all at once
import { appName, add, subtract, Formatter } from './Module';

console.log(`Application Name: ${appName}`); // Output: Application Name: Calculator App

let sum = add(10, 5);
console.log(`Sum: ${sum}`); // Output: Sum: 15

let difference = subtract(10, 5);
console.log(`Difference: ${difference}`); // Output: Difference: 5

let formatter = new Formatter();
let upperText = formatter.toUpperCase("hello world");
console.log(`Uppercase: ${upperText}`); // Output: Uppercase: HELLO WORLD

let lowerText = formatter.toLowerCase("HELLO WORLD");
console.log(`Lowercase: ${lowerText}`); // Output: Lowercase: hello world

