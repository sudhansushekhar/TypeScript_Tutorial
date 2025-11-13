// Arrow Functions/ Lambda Functions

/* 
    Lambda refers to to anonymous function in programming
    Lambda functions are a concise mechanism to represent anonymous functions
    These functions are also called as Arrow functions

    There are three parts of arrow functon
    1. Parameters - A function may optionally have parameters
    2. the fat arrow notation/lambda notation (=>) - It is also calles as the goes to operator
    3. Statements - represent the functions instruction set

    Syntax:
    let variable = (parameters) =>
    {
        // block of code
    }
    variable();
*/

// Example 1: Arrow Function with No Parameters and No Return Type
let greet = ():void =>
{
    console.log("Hello TypeScript");
}
greet();

// Example 2: Arrow Function with Parameters and a Return Type
let results = (a:number, b:number):number =>
{
    return a + b;
}
console.log(results(3,6));

// Example 3: Arrow Function with Parameters and an Implicit Return Type, if we have single line of block code
let add = (a:number, b:number):number => a + b;
let multiply = (a:number, b:number):number => a * b;
console.log(add(2,5));
console.log(multiply(2,5));

// Example 4: Arrow Function with Optional Rest parameters and without Return Type
var displayDetails1 = (id:number, name:string, email?:string):void =>
{
    console.log("ID:", id);
    console.log("Name:", name);
    if(email != undefined){
        console.log("Email:", email);
    }
    
}
displayDetails1(123, "scott", "abc@gmail.com")
displayDetails1(1001, "Sudhanhsu")

// Example 5: Arrow Function with Default Rest parameters and without Return Type
let calculateDiscount1 = (price:number, discountRate:number=0.1):void =>
{
    let discount:number = price * discountRate;
    console.log("Discount Amount :", discount);
}
calculateDiscount1(1000, 0.3)
calculateDiscount1(200)

// Example 6: Arrow Function with Rest Parameters and with Return Type
let findAllElements = (...elements:(number | string)[]):number =>
{
    return elements.length
}
console.log(`Total values are :${findAllElements(3, "john", "shyam", 6, 8)}`)
console.log(findAllElements(3, 45, 56, 8))
console.log(findAllElements("gfg", "regwer", "ergwerg"))