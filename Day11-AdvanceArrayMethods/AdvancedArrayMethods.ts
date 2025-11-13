// Advanced Array Methods in TypeScript
// ****** forEach() map(), filter(), reduce(), some(), every() ******
// Every above method takes a callback function as an argument
// The callback function can take up to three arguments: currentValue, index, array
// currentValue: The current element being processed in the array
// index (optional): The index of the current element being processed in the array
// array (optional): The array that forEach() was called upon

// 1. forEach() - Executes a provided function once for each array element.
/* Syntax: array.forEach(callbackFunction(currentValue, index, array)
{
    // code to be executed for each element
})
*/

// Example 1: get index of all the fruits along withe the fruit name
let fruits: string[] = ['apple', 'banana', 'cherry', 'orange', 'mango', 'kiwi'];

/* console.log("Using traditional for loop:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index: ${i}, Fruit: ${fruits[i]}`);
}

console.log("Using traditional for-in loop:");
for (let index in fruits) {
    console.log(`Index: ${index}, Fruit: ${fruits[index]}`);
}
*/

console.log("Using forEach():");
fruits.forEach(function(fruit, index){
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});

// Using arrow function
console.log("Using forEach() using arrow function:");
fruits.forEach((fruit, index) =>
    console.log(`Index: ${index}, Fruit: ${fruit}`)
);

// Example 2: Convert to upperCase using forEach()
let upperFruits: string[] = [];
fruits.forEach(function(fruit){
    upperFruits.push(fruit.toUpperCase());
});

console.log("Uppercase Fruits using forEach():", upperFruits);

let upperCaseFruits: string[] = [];
fruits.forEach((fruit) => {
    upperCaseFruits.push(fruit.toUpperCase());
});

console.log("Uppercase Fruits using forEach() with arrow function:", upperCaseFruits);

console.log("--------------------------------------------------");
// 2. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array.
/* Syntax: array.map(callbackFunction(currentValue, index, array)
{
    // code to be executed for each element
})
*/

// Example2: get square of each number in the array, Ex: [ 1, 2, 3, 4, 5] => [ 1, 4, 9, 16, 25]
let numbers: number[] = [ 1, 2, 3, 4, 5];
let squares: number[] = numbers.map(function(num) {
    return num * num;
});
console.log("Squares using map():", squares);

// Using arrow function
let squaresArrow: number[] = numbers.map(num =>
     num * num
);
console.log("Squares using map() with arrow function:", squaresArrow);

// Example2: Double each number in the array, Ex: [1, 2, 3, 4, 5] => [2, 4, 6, 8, 10]
let doubledNumbers: number[] = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled Numbers using map():", doubledNumbers);

let doubledNumbersArrow: number[] = numbers.map(num =>
    num * 2
);

console.log("Doubled Numbers using map() with arrow function:", doubledNumbersArrow);

console.log("--------------------------------------------------");

// 3. filter() - Creates a new array with all elements that pass the test implemented by the provided function.
/* Syntax: array.filter(callbackFunction(currentValue, index, array)
{
    // code to be executed for each element
})
*/

// Example 1: Get all even numbers from the array
let evenNumbers: number[] = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even Numbers using filter():", evenNumbers);

// Using arrow function
let evenNumbersArrow: number[] = numbers.filter(num =>
    num % 2 === 0
); 

console.log("Even Numbers using filter() with arrow function:", evenNumbersArrow);

// Example 2: Get all fruits with length greater than 4
let longFruits: string[] = fruits.filter(function(fruit) {
    return fruit.length > 4;
});

console.log("Fruits with length greater than 4 using filter():", longFruits);

// Using arrow function
let longFruitsArrow: string[] = fruits.filter(fruit =>
    fruit.length > 4
);
console.log("Fruits with length greater than 4 using filter() with arrow function:", longFruitsArrow);

console.log("--------------------------------------------------");

// 4. reduce() - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
/* Syntax: array.reduce(callbackFunction(accumulator, currentValue, index, array)
{
    // code to be executed for each element
}, initialValue)
*/

// Example 1: Get the sum of all numbers in the array
let sum: number = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
},0);   // here 0 is default value for accumulator
console.log("Sum of all numbers using reduce():", sum);

// Using arrow function
let sumArrow: number = numbers.reduce((accumulator, currentValue) =>
    accumulator + currentValue
,0);    // here 0 is default value for accumulator
console.log("Sum of all numbers using reduce() with arrow function:", sumArrow);

// Example 2: Get the product of all numbers in the array
let product: number = numbers.reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
},1);
console.log("Product of all numbers using reduce():", product);

// Using arrow function
let productArrow: number = numbers.reduce((accumulator, currentValue) =>
    accumulator * currentValue
,1);
console.log("Product of all numbers using reduce() with arrow function:", productArrow);

console.log("--------------------------------------------------");

// 5. some() - Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
/* Syntax: array.some(callbackFunction(currentValue, index, array)
{
    // code to be executed for each element
})
*/

// Example 1: Check if there is at least one even number in the array
let hasEvenNumber: boolean = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log("Array has at least one even number using some():", hasEvenNumber);

// Using arrow function

let hasEvenNumberArrow: boolean = numbers.some(num =>
    num % 2 === 0
);
console.log("Array has at least one even number using some() with arrow function:", hasEvenNumberArrow);

console.log("--------------------------------------------------");

// 6. every() - Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
/* Syntax: array.every(callbackFunction(currentValue, index, array)
{
    // code to be executed for each element
})
*/

// Example 1: Check if all numbers in the array are positive
let allPositive: boolean = numbers.every(function(num) {
    return num > 0;
});

console.log("All numbers are positive using every():", allPositive);

// Using arrow function
let allPositiveArrow: boolean = numbers.every(num =>
    num > 0
);
console.log("All numbers are positive using every() with arrow function:", allPositiveArrow);  

console.log("--------------------------------------------------");

// Example 2: Check if all fruits have length greater than 3
let allLongFruits: boolean = fruits.every(function(fruit) {
    return fruit.length > 3;
});
console.log("All fruits have length greater than 3 using every():", allLongFruits);

// Using arrow function

let allLongFruitsArrow: boolean = fruits.every(fruit =>
    fruit.length > 3
);
console.log("All fruits have length greater than 3 using every() with arrow function:", allLongFruitsArrow);
console.log("--------------------------------------------------");

