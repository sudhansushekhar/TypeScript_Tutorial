// Anonymous Function : Un-named / Nameless Function
/* 
    Anonymous Function- doesn't have a name.
    Instead, it is assigned to a variable, which acts as its name.

    Syntax:
    let variable = function(parameters)
    {
        // function body
    }
        variable();     // calling function
*/

// Example 1 : without parameters
let message = function():string
{
    return "Hello Type Script!!"
}
console.log(message())

// Example 2 : with parameters
let result = function(a:number, b:number):number
{
    return a * b;
}
console.log(result(5, 6))