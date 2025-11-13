/* 
1) Primitive Data type(Built-in): Can store single value in single variable
Ex: Number, Boolean, String, Null, undefined, Any, Union Type, void

2) Non-Primitive Data type(Objects): Can store more value or goup of values or group of objects
Ex: Arrays, Class, Function, Interface, Touple

*/

//1. Number: Represt both integres(without decimal values) and floating numbers(with decimal values)

let age1:number = 35;
let price = 23.5;
let big = 8675675674;

console.log("Age:", age1)
console.log(typeof age1)

console.log("Price:", price)
console.log(typeof(price))

console.log("Big Number:", big)
console.log(typeof(big))

//2. Strings: Store text values and can be in 3 ways(single quote '', double quotes "" & backtick ``)

let firstName = 'Sudhanshu'
let middleName = "Shekhar"
let lastName = `Singh`

console.log("My full name :", firstName, middleName, lastName)

let greetings = `Hello ${firstName} ${middleName} ${lastName}`

console.log("Name with greetings :", greetings)

//3. Boolean: trye and false

let isStudent = true
console.log("Is Student:", isStudent)

// 4. null & Undefined: Absence of values

let emptyValue = null
let notAssigned = undefined

console.log(emptyValue)
console.log(notAssigned)

let priceValue
console.log(priceValue)

//5. Any: can ahave any type of data i.e. it loses typesScript benefits
let value:any = "Welcome"
console.log(value)
console.log(typeof value)

value = 100
console.log(value)
console.log(typeof value)

value = true
console.log(value)
console.log(typeof value)

// 6. Union: combine multiple data types to store different values
let id:string | number | boolean
id = 100
console.log(id)
console.log(typeof id)

id = "stdID"
console.log(id)
console.log(typeof id)

id = true
console.log(id)
console.log(typeof id)

// 6. Void: used for functions that doesn't return any value
function show() : void  // void is optional if nothing is returned in the function
{
    console.log("Welcome")
}
show()

function sum(a:number, b:number) : number
{
    return a+b
}
let resuslt = sum(2,5)
console.log(resuslt)