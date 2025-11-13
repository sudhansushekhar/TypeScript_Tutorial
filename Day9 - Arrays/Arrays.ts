/*  Arrays :
  - stores multiple values in a single variable which cannot be possible by Primitive Variable
  - Values can be of same or different data types
  - Arrays are declared using '[]' or the generic 'Array<T>' type
  - Index start from 0
  - Arrays are an ordered collection of elements
*/

// Approach 1: using literal
//---------------------------
// Declaration and initialisation in separately - (Rarely Used)
/* let names : string[] = [];  // Declaration

// Initialisation/Assignment
names[0] = "John";
names[1] = "Sam";
names[2] = "Dixcy";
names[3] = "Scott";
 */

// Declaration and initialisation together - (Often Used)
let names : string[] = ["John", "Sam", "Dixcy", "Scott"];  // Declaration & Initialisation/Assignment

console.log(`All names are printed using literal: ${names}`);

// Approach 2: using the generic 'Array<T>' type - Used mostly for javaScript and typeScript
//----------------------------------------------

let empNames : Array<string> = ["John", "Sam", "Dixcy", "Scott"];
console.log(`All employee names are printed using the generic 'Array<T>' type: ${names}`);
console.log(names)

let empIDs : Array<number> = [101, 102, 103, 104];
console.log(`All employee IDs are printed using the generic 'Array<T>' type: ${empIDs}`);
console.log(empIDs)

let empData : Array<string | number> = ["John", 101, "Sam", 102]
console.log(`All employee data are printed using the generic 'Array<T>' type: ${empData}`);
console.log(empData)

let mixedData : Array<any> = ["John", 101, "Sam", 102, true, null]
console.log(`All mixed data are printed using the generic 'Array<T>' type: ${mixedData}`);
console.log(mixedData)


// Examples 1 : Iteration in an array using a traditional loop
console.log("Employee names...........")
for(let i = 0; i < names.length; i++)
{
    console.log(`Employee at ${i + 1} : ${names[i]}`)
}

// Examples 2 : Iteration in an array using 'for...in' loop(uses index)
console.log("Employee IDs...........")
for(let i in empIDs)
{
    console.log(`Employee at ${i} index: ${empIDs[i]}`)
}

// Examples 3 : Iteration in an array using 'for...of' loop(uses values) like for-each loop
console.log("Employee mixed Data...........")
for(let value of mixedData)
{
    console.log(`Employee data : ${value}`)
}

// Example 4: Passing an Array to the function
// Search an element in an array

function search(ele : number, arr : number[]) : boolean
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == ele)
        {
            return true // element fount
        }
    }
    return false    // element not fount
}

let elements:number[] = [4, 7, 12, 14, 3, 56, 4];
console.log(`Is Element found? ${search(3, elements)}`)
console.log(`Is Element found? ${search(17, elements)}`)

// Example 5: A function takes an Array and returns array
function capitaliseWords(arr : string[]) : string[]
{
    let convertedWords : string[] = [];
    // normal for loop
    // for(let i = 0; i < arr.length; i++)
    // {
    //     let value = arr[i].toUpperCase();
    //     convertedWords[i] = value;
    // }

    // for-in loop
    // for(let i in arr)
    // {
    //     let value = arr[i].toUpperCase();
    //     convertedWords[i] = value;
    // }

    // for-of loop
    for(let value of arr)
    {
        convertedWords.push(value.toUpperCase());
    }

    return convertedWords
}
let words : string[] = ["hello", "Allison", "javaScript"]
console.log(`Capitalised Words ${capitaliseWords(words)}`)