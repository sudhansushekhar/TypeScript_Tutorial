// CallBack Function : A function passed as an argument to another function and executed later.

// Example 1:
// Function that takes callback function as parameter
function greet(name:string, message:(message : string)=> void)
{
    console.log(name)
    message("Welcome")  // executing callback function
}


// callback function
function showMessage(message : string )
{
    console.log(message)
}

// Calling the function buy passing the callback function
greet("John", showMessage);

//Example 2:
function sumAll(x : number, y : number, callBack : (result : number)=>void)
{
    //let result = x + y
    //callBack(result);
    callBack(x + y);
} 

// callback function
function diplayResult(result : number):void
{
    console.log(result);
}

sumAll(10, 15, diplayResult)