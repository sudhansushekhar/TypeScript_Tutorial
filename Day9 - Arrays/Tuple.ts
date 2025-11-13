/*  
Tuple:
- Fixed length array where each element has a specific type
- it helps in storing multiple fields of different data types together
*/ 


// Example 1: tuple with two values string, nunber
let person : [string, number] = ["John", 32]

console.log(person[0])
console.log(person[1])

// Example 2: tuple with multiple values string, nunber
let user : [string, number, boolean, number, string] = ["John", 32, true, 101, "Hello"]
console.log(user)
console.log(`${user}`)

// Example 3: Iterating over a tuple using traditional loop
console.log("********* traditional loop *********") // index based
for (let i = 0; i < user.length; i++)
{
    console.log(user[i])
}

// Example 4: Iterating over a tuple using for-in loop
console.log("********* for-in loop *********")  // index based
for (let i in user)
{
    console.log(user[i])
}

// Example 5: Iterating over a tuple using for-of loop
console.log("********* for-of loop *********")  // value based like for-each loop
for (let value of user)
{
    console.log(value)
}

// Example 6: Tuple Array(Array of Tuples i.e. tuples inside array)
console.log("********* Tuple Array(Array of Tuples i.e. tuples inside array *********")
let students:[number, string][] = [[101, "Sam"],[102, "Elliot"],[103, "Johnson"]]

console.log(`Length of array :${students.length}`)
console.log("Array is :", students)
console.log(`Array with touple values are : ${students}`)
console.log("First Touple in Array :", students[0])
console.log(`First Touple value in Array : ${students[0]}`)
console.log(`Second Touple value at index 1: ${students[1][1]}`)
console.log(`Third Touple value at index 0: ${students[2][0]}`)