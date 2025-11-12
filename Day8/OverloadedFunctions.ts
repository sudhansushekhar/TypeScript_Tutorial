// Overloaded Functions
// step1: write signatures of the functions
// step2: implement a function
// step3: calling the function

// Example 1: Different parameter with same data types
function getInfo(id : number):string;

function getInfo(name : string):string;

function getInfo(param : number | string) : number | string
{
    if(typeof param === "number"){
        console.log (`User ID : ${param}`)
        return(param)
       
    }
    else
    {
        console.log (`User Name : ${param}`)
        return (`User Name : ${param}`)
    }
}
//getInfo("Sudhanshu")
console.log (getInfo("Sudhanshu"))
console.log (`User ID : ${getInfo(23)}`)

// Example 2: Different number of parameters
function add(a:number, b:number):number;
function add(a:number, b:number, c:number):number;

function add(a:number, b:number, c?:number):number
{
    if(c !==undefined)
    {
        return a+b+c
    }
    else
        return a+b
}

console.log (`Sum of 3 numbers : ${add(3,4,5)}`)
console.log (`Sum of 2 numbers : ${add(6,5)}`)

// Example 3: Different parameter with different data types
function processInput(id : number):number;

function processInput(name : string):string;

function processInput(param : number | string) : number | string
{
    if(typeof param === "number"){
        console.log (`Number : ${param}`)
        return(param * 2)
       
    }
    else
    {
        console.log (`Name : ${param}`)
        return (param.toUpperCase());
    }
}

console.log (`Name in UpperCase : ${processInput("Sudhanshu")}`)
console.log (`Twice of Number : ${processInput(23)}`)

//Example 4:
function greeting(isMarried : boolean):string;
function greeting(age : number):string;
function greeting(name : string):string;

function greeting(value :string | number | boolean):string
{
    if(typeof value == "boolean")
    {
        return (value ? "Married" : "Single").toString();
    }
    else if(typeof value == "string")
    {
        return value;
    }
    else
        return value.toString();
}

console.log (`Hello : ${greeting("Sudhanshu")}`)
console.log (`You are : ${greeting(true)}`)
console.log (`You are ${greeting(23)} years old.`)
console.log (`Congratulations you are : ${greeting(false)}`)