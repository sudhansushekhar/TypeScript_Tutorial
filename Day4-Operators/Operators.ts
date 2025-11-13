let a = 10, b = 20, name1 = "Sudhanshu"
console.log("*********Arithmetic Operators*******") 
// Arithmetic Operators
console.log(a + b)
console.log(b - a)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(5**2)   // exponential e.g square here

// Assignment Operators
console.log("*********Assignment Operators*******") 
a = 10, b= 5

console.log(a += b) //a = a + b;
console.log(a -= b) //a = a - b;
console.log(a *= b) //a = a * b;
console.log(a /= b) //a = a / b;
console.log(a %= b) //a = a % b;

// Relational/Comparison Operators(>, <, >=, <=, ==, !=, ===), always return true or false
console.log("*********Relational Operators*******") 
a = 20;
b = 30;

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a === b)

// Difference between == & ===, always return true or false
console.log("*********Difference between ==(Equal to) & ===(Strict Equal to)*******")
let num1:any = 10   // number type
let num2:any = "10" // string type

console.log(num1 == num2)   // true because compare only value
console.log(num1 === num2)  // false because compare value & dataTypes, value is same but types are different

// Logical Operators (&&, ||, !) - returns true & false with boolean values
console.log("*********Logical Operators*******") 
//  x         y         &&          ||          !(x)        !(y)
//--------------------------------------------------------------
//  true    true        true        true        false       false
//  true    false       false       false
//  false   true        false       true        true       
//  false   false       false       false                   true

let x:boolean = true
let y:boolean = false

console.log(x && y)
console.log(x || y)
console.log(!x, !y)

// Combination of Logical & Relational Operators (&&, ||, !) - returns true & false with boolean values
console.log("*********Combination of Logical & Relational Operators*******") 

console.log(20 > 10 && 10 > 5)
console.log(10 < 20 || 5 > 10)
console.log(20 < 10 || 10 < 5)
