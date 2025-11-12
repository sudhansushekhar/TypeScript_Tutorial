let numbers : number[] = [1, 2, 3, 4, 5];
let fruits : string[] = ["Apple", "Banana", "Orange", "Mango", "Papaya", "Blue Berry"];

console.log("Orignal Numbers Array:", numbers); // [ 1, 2, 3, 4, 5 ]
console.log("Orignal Fruits Array:", fruits);   // [ 'Apple', 'Banana', 'Orange', 'Mango', 'Papaya' ]

// 1. length - attribute(not a method
console.log("Size of number array:", numbers.length)
console.log("Size of fruit array:", fruits.length)

// Methods
// 2. push() - Adds single/multiple elements to the end of an array
// SYntax: array.push(element1, ......, element n)
numbers.push(6, 7, 8)
console.log("New Numbers Array:", numbers);
console.log("Size of number array:", numbers.length)


// 3. pop() - removes element from the end of an array
// SYntax: array.pop()
let lastNumber = numbers.pop()
console.log("New Numbers Array after pop:", numbers);
console.log("Size of number array after pop:", numbers.length)
console.log("Removed number:", lastNumber)

// 4. shift() - removes first element from the start of an array
// SYntax: array.shift()

let firstFruit = fruits.shift()
console.log("New fruits Array after shift:", fruits);
console.log("Size of fruits array after shift:", fruits.length)
console.log("Removed fruit:", firstFruit)

// 5. unshift() - Adds single/multiple elements at the start of an array
// SYntax: array.unshift(element1, ......, element n)

fruits.unshift("Cherry", "Watermelon")
console.log("New fruits Array after unshift:", fruits);
console.log("Size of fruits array after unshift:", fruits.length)

// 6. concat() - combines tqo or more arrays of same dat type
// SYntax: array.concat(value1, ......, value n)
let newFruits:string[] = ["Avocado", "Green Apple"]
let concatenatedArray = newFruits.concat(fruits);
console.log("Array after concatenation:", concatenatedArray);

// 7. slice() - extracts section of an array
// starting index starts from zero
//Ending index will be exclusive. Ex: if 3 is ending index it'll cinsider 2 (3-1=2)
//Syntax: array.slice(start, end)

let extractedArray = concatenatedArray.slice(2,5)
console.log("Array after slicing:", extractedArray);


// 8. splice() - Adds/removes elements from an array(From Everywhere)
//Syntax: array.splice(start, deleteCount, item1, ...., item n)

console.log("Current elements in Fruits Array :", fruits);

// Example 1: Removing from array
let removedArray = fruits.splice(1,2)
console.log("Array after splicing:", removedArray);
console.log("Elements in Fruits Array after Splice :", fruits);

// Example 2: Adding in array
fruits.splice(1,0, "Pine Apple", "Grapes")
console.log("AddedElements in Fruits Array after Splice :", fruits);

// Example 3: Removing and Adding in array
let deletedElements = fruits.splice(1,2, "Kiwi", "Pear")    
console.log("Array after splicing:", deletedElements);
console.log("AddedElements in Fruits Array after Splice :", fruits);

// 9. indexOf() - Finds the index of element, if not fount returns -1
// Syntax: array.indexOf(searchElement) or array.indexOf(searchElement, starting Index)

// Example 1:   index with elemet
let papayaIndex = fruits.indexOf("Papaya");
console.log("Index of papaya:", papayaIndex);

// Example 2: index without elemet
let bananaIndex = fruits.indexOf("banana");
console.log("Index of banana:", bananaIndex);

// Example 3: index with elemet after some index
let papayaAfterIndex = fruits.indexOf("Papaya", 3);
console.log("Index of papaya:", papayaAfterIndex);  // returns the index by searching from index 3

// Example 4: index with elemet
let kiwiAfterIndex = fruits.indexOf("Kiwi", 2);
console.log("Index of Kiwi:", kiwiAfterIndex);  // even though kiwi is there it returns -1 as its fetching from index 2

// 10. includes() - check if element exixts
// Syntax: array.includes(searchElement) or array.includes(searchElement, fromIndex)

// Example 1:   includes with elemet
let papayaExist = fruits.includes("Papaya");
console.log("Presence of papaya:", papayaExist);

// Example 2: includes without elemet
let bananaExist = fruits.includes("banana");
console.log("Presence of banana:", bananaExist);

// Example 3: includes with elemet after some index
let papayaAfterExist = fruits.includes("Papaya", 3);
console.log("Presence of papaya:", papayaAfterExist);  // returns true by searching from index 3

// Example 4: includes with elemet
let kiwiAfterExist = fruits.includes("Kiwi", 2);
console.log("Presence of Kiwi:", kiwiAfterExist);  // even though kiwi is there it returns false as its fetching from index 2


// 11. toString() - converts array to string
// Syntax: array.toString()

// Example 1:
console.log("Numbers Array:", numbers);
let numbersString = numbers.toString();

console.log("Converted Numbers Array:to String", numbersString);

// Example 2:
let myArray : string[]= ['w', 'e', 'l', 'c', 'o', 'm', 'e'];
console.log("Original myArray:", myArray);

let str:string = myArray.toString();
console.log("Converted string of myArray:", str);
