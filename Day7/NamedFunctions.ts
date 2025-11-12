// Named Function: A function that is declared with a name.

/* Syntax

    function functionName(parameter): returnType{
        // block of code
    }

    functionName(parameter);     // calling the function
*/

// Example 1: Named functions with no parameters and no rreturn Type
function display():void{
    console.log("Welcone to typeScript!!")
}
display();  // calling the function

// Example 2: Named functions with parameters and return Type
function addTwoNumbers(x:number, y:number):number{
    let z = x + y;
    console.log(`Sum of numbers ${x} and ${y} : ${z}`)
    return z
}
addTwoNumbers(3, 5);  // calling the function

// Example 3: Named functions with Rest parameters(Don't restrict the number of values that you can pass to a function)
// Same type of parameters
function addNumbers(...nums:number[]){
    let i;
    let sum:number = 0;
    for(let i = 0; i<nums.length;i++){
        sum = sum + nums[i];
    }
    console.log(`Sum of numbers : ${sum}`)
}
addNumbers(3,5,7,4);  // calling the function

// Example 4: Named functions with Rest parameters - Multiple type of parameters

function findElements(...elements:(number | string)[]):number
{
    return elements.length
}
console.log(`Total values are ${findElements(3, "john", "shyam", 6, 8)}`)
console.log(findElements(3, 45, 56, 8))
console.log(findElements("gfg", "regwer", "ergwerg"))

// Example 5: Named functions with Optional Rest parameters using ? mark
function displayDetails(id:number, name:string, email?:string):void
{
    console.log("ID:", id);
    console.log("Name:", name);
    if(email != undefined){
        console.log("Email:", email);
    }
    
}

displayDetails(123, "scott", "abc@gmail.com")
displayDetails(1001, "Sudhanhsu")

// Example 6: Named functions with Default Rest parameters using ? mark
function calculateDiscount(price:number, discountRate:number=0.1):void
{
    let discount:number = price * discountRate;
    console.log("Discount Amount :", discount);
}
calculateDiscount(1000, 0.3)
calculateDiscount(200)