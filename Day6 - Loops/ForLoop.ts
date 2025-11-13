// For loop: unlike do-while loop where we put condition and satement in other lines, we can put it in single statement in for loop
// typically used when number of iterations is known beforehand.

// Ex1: Print numbers from 1 to 10 in ascending order
console.log("****** numbers in ascending order ******");
for(let num = 1; num <=10 ; num++){
    console.log(num);
}

// Ex2: Print numbers from 10 to 1 in descending order
console.log("****** numbers in descending order ******");
for(let num = 10; num >=1 ; num--){
    console.log(num);
}

// Ex3: Print even numbers from 1 to 10
console.log("****** Even numbers Method 1 ******");
for(let num = 1; num <=10 ; num++){
    if(num % 2 == 0){
    console.log(num);
    }
}

console.log("****** Even numbers Method 2 ******");
for(let num = 2; num <=10 ; num+=2){
    console.log(num);
}