// Pre/Post Increment ++
// Pre/Post Decrement --

let x = 10;
x++             // x=x+1    //Post Increment
console.log("***************Post Increment***********")
console.log(x)

x--             // x=x-1    //Post Decrement
console.log("***************Post Decrement***********")
console.log(x)

console.log("***************Pre Increment***********")
let y = 15;
let result = y++    // value of y is assigned to result first and then it increases
console.log("Assigned first and then Increases:", result) //  15
console.log(y)      //  16

console.log("***************Pre Decrement***********")
let z = 20;
let result1 = ++z       // value of z is increased first and assigned
console.log("Increases first and then Assigned:", result1)    // 21
console.log(z)          // 21