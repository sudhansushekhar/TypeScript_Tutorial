// String - Text value or sequence of characters
/* 
1. Creating Strings
    a. Single Quotes - String Literals  -   'string value'
    b. Double Quotes - String Literals  -   "string value"
    c. Backticks (Template Literals) string variable inside another string value ${variable} - `string value ${variable}`
*/

// Declaring string variables
let singleQuoteString: string = 'Hello, World!';
let doubleQuoteString: string = "Hello, TypeScript!";
let name1: string = 'Alice';

let templateLiteralString: string = `Hello, ${name1}! Welcome to TypeScript.`;

console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(templateLiteralString);

// When to use which?
/*
- Use single or double quotes for simple strings without variable interpolation.
- Use backticks (template literals) when you need to include variables or expressions within the string.
*/

// Example of using template literals with expressions
let a: number = 5;
let b: number = 10;
let sumString: string = `The sum of ${a} and ${b} is ${a + b}.`;

console.log(sumString);


/*2. Common String Methods
    a. length - Returns the length of the string
    b. toUpperCase() - Converts the string to uppercase
    c. toLowerCase() - Converts the string to lowercase
    d. charAt(index) - Returns the character at the specified index
    e. substring(start, end) - Returns a substring from start index to end index
    f. indexOf(substring) - Returns the index of the first occurrence of the substring
    g. includes(substring) - Checks if the string contains the specified substring
    h. startsWith(substring) - Checks if the string starts with the specified substring
    i. endsWith(substring) - Checks if the string ends with the specified substring
    j. replace(oldSubstring, newSubstring) - Replaces occurrences of oldSubstring with newSubstring
    k. split(delimiter) - Splits the string into an array of substrings based on the specified delimiter
    l. trim() - Removes whitespace from both ends of the string
    m. trimStart() - Removes whitespace from the start of the string
    n. trimEnd() - Removes whitespace from the end of the string
    o. concat(string1, string2, ...) - Concatenates multiple strings into one string

*/

let sampleString: string = "TypeScript is awesome!";

console.log("-----------length--------------")
// a. length
console.log(`Length of sampleString: ${sampleString.length}`);


console.log("----------toUpperCase()---------------")
// b. toUpperCase()
console.log(`Uppercase: ${sampleString.toUpperCase()}`);


console.log("------------toLowerCase()------------")
// c. toLowerCase()
console.log(`Lowercase: ${sampleString.toLowerCase()}`);


console.log("---------charAt(index)--------------")
// d. charAt(index)
console.log(`Character at index 0: ${sampleString.charAt(5)}`);


console.log("---------substring(start, end)----------")
// e. substring(start, end)
console.log(`Substring (0, 10): ${sampleString.substring(4, 10)}`);


console.log("-----------indexOf(substring)----------")
// f. indexOf(substring)
console.log(`Index of 'awesome': ${sampleString.indexOf('awesome')}`);


console.log("---------includes(substring)---------")
// g. includes(substring)
console.log(`Includes 'TypeScript': ${sampleString.includes('TypeScript')}`);
console.log(`Includes 'JavaScript': ${sampleString.includes('JavaScript')}`);
console.log(`Includes 'TYPESCRIPT': ${sampleString.includes('TYPESCRIPT')}`);


console.log("---------startsWith(substring)---------")
// h. startsWith(substring)
console.log(`Starts with 'Type': ${sampleString.startsWith('Type')}`);
console.log(`Starts with 'Script': ${sampleString.startsWith('Script')}`);


console.log("---------endsWith(substring)---------")
// i. endsWith(substring)
console.log(`Ends with 'awesome!': ${sampleString.endsWith('awesome!')}`);
console.log(`Ends with 'great!': ${sampleString.endsWith('great!')}`);


console.log("---------replace(oldSubstring, newSubstring)---------")
// j. replace(oldSubstring, newSubstring)
let replacedString: string = sampleString.replace('awesome', 'fantastic');
console.log(`Replaced String: ${replacedString}`);

console.log("---------split(delimiter)---------")
// k. split(delimiter)
let wordsArray: string[] = sampleString.split(' ');
console.log(`Words Array: ${wordsArray}`);


console.log("---------trim()---------")
// l. trim()
let stringWithWhitespace: string = "   Hello, TypeScript!   ";
console.log(`Original String: '${stringWithWhitespace}'`);
console.log(`Trimmed String: '${stringWithWhitespace.trim()}'`);


console.log("---------trimStart()---------")
// m. trimStart()
console.log(`Trimmed Start String: '${stringWithWhitespace.trimStart()}'`);


console.log("---------trimEnd()---------")
// n. trimEnd()
console.log(`Trimmed End String: '${stringWithWhitespace.trimEnd()}'`);



console.log("---------concat(string1, string2, ...)---------")
// o. concat(string1, string2, ...)
let string1: string = "Hello, ";
let string2: string = "TypeScript!";
let concatenatedString: string = string1.concat(string2);
console.log(`Concatenated String: ${concatenatedString}`);


// Concept of string immutability : Once a string is created, it cannot be changed. Any method that seems to modify a string actually creates a new string.
// Example1: demonstrating that strings are immutable
let originalString: string = "Immutable";
let modifiedString: string = originalString.replace('Immutable', 'Mutable');

console.log(`Original String: ${originalString}`);
console.log(`Modified String: ${modifiedString}`);

// Example2: demonstrating that strings are immutable
let anotherString: string = "Hello";
let upperCaseString: string = anotherString.toUpperCase();

console.log(`Another String: ${anotherString}`);
console.log(`Uppercase String: ${upperCaseString}`);


/*3. When to use which method?
- Use length to get the size of the string.
- Use toUpperCase() and toLowerCase() for case conversions.
- Use charAt() to access specific characters.
- Use substring() to extract parts of the string.
- Use indexOf() to find the position of a substring.
- Use includes() to check for the presence of a substring.
- Use startsWith() and endsWith() for prefix/suffix checks.
- Use replace() to modify parts of the string.
- Use split() to break the string into an array.
- Use trim(), trimStart(), and trimEnd() to clean up whitespace.
- Use concat() to combine multiple strings into one.

*/

