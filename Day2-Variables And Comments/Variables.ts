// Variables: Container that store data

// variables keyword: var, let, const
// Synatax to declare variable-> keyword variableName: data type(optional) = value
// Ex-> var age : number = 20 (with data type)
// Ex-> var age = 20 (without data type)

var age = 10
console.log("Age is "+ age)
var name = "Sudhanshu Shekhar"

// var vs let vs const
//--------------------
/* 1. Scope
2. Declaration/Value Assignment
3. Re-declaration
4. Re-initialization/Re-assignment
5. Hoisting */

// var : not being used these days in modern JS/TS dues to its functional scope and may lead to unexpected issues
// let : use when a variable can change further
// const: use when a variable cannot be changed further

// 1. Scope: Accessible area (Function scope{var} & Block scope{let, const})
// Example 1: Function scope(var)
console.log("//-------------Functional Scope-------------//")
function varScope()
{
    if(true)
    {
        var msg = "This is Function Scope"  // Even though it is inside block but overall its inside function
        console.log(msg)
    }
    console.log(msg) // it can be accessed outside block as well because var has functional scope
}

varScope()

console.log("//-------------Block Scope-------------//")

// Example 2: Block scope(let, const)
function blockScope()
{
    if(true)
    {
        let msg1 = "This is Block Scope - let keyword" 
        const msg2 = "This is Block Scope - const keyword"
        console.log(msg1)
        console.log(msg2)
    }
    // console.log(msg1)   // it can't be accessed outside block because let & const has block scope
    // console.log(msg2)   // it can't be accessed outside block because let & const has block scope
}

blockScope()

console.log("//-------------Scope Difference-------------//")

// Example 3: Block scope(let, const)
function scopeDiff()
{
    {
        var num1 = 20 //"This is Function Scope"
        let num2 = 30 //"This is Block Scope"
        const num3 = 40 //"This is Block Scope"
        
        console.log("This is Function Scope :" + num1)
        console.log("This is Block Scope :" + num2)
        console.log("This is Block Scope :" + num3)
    }
    console.log("This is Function Scope" + num1)    // access
    //console.log("This is Block Scope :" + num2)     // cannot access - it is of block
    //console.log("This is Block Scope :" + num3)     // cannot access - it is of block
}

scopeDiff()

// 2. Declaration/Value Assignment
// var: can be declared without initialization
console.log("//-------------Declaration/Value Assignment - var-------------//")
var a   // declaration of variable
console.log(a) // undefined
a = 35  // initialization of variable
console.log(a) // 35

console.log("//-------------Declaration/Value Assignment - let-------------//")
let b  // declaration of variable
console.log(b) // undefined
b = 45  // initialization of variable
console.log(b) // 45

console.log("//-------------Declaration/Value Assignment - const-------------//")
const c  = "This is const - must be initialised cannot be only declared" // declaration of variable must be initialized
console.log(c) 

// 3. Re-declaration
// var - allows Re-declaration
// let & conat - cannot Re-declare

console.log("//-------------Re-declaration var-------------//")
var city = "Delhi"
console.log("City declared :" + city)
var city = "Mumbai"
console.log("City re-declared :" + city)

console.log("//-------------Re-declaration let & const-------------//")
const country = "India"
//const country = "UK" // cannot redeclare because of block scope
console.log("const declared :" + country)

let state = "UP"
//let state = "MP"    // cannot redeclare because of block scope
console.log("let declared :" + state)

// 4. Re-initialization/Re-assignment
// var - allows Re-assignment
// let & conat - cannot be Re-assigned

console.log("//-------------Re-assignment var-------------//")
var empID = 2001
console.log("empID assigned :" + empID)
var empID = 2005
console.log("empID re-assigned :" + empID)

console.log("//-------------Re-assignment let & const-------------//")
const countryID = "country01"
//const countryID = "country03" // cannot reassigned because of block scope
console.log("const assigned :" + countryID)

let stateID = "state05"
//let stateID = "state06"    // cannot reassigned because of block scope
console.log("let assigned :" + stateID)

//5. Hoisting
// var- undefined
console.log(section)    //undefined
var section = 'A'
console.log(section)


//console.log(industry)    //not initialised error
const industry = "IT"
console.log(industry)
//console.log(industryID)  //not initialised error
let industryID
console.log(industryID)
