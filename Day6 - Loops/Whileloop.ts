// While loop : executes until the condiion is false, it can go to infinite as well when condition is never false

// Ex1: Print numbers till 20
console.log("******** Print Numbers ********");
let start = 1;      // starting number
let end = 20;       // ending number
while(start <= end){
    console.log(start);
    start++
}

//Ex2: Print even numbers till 10
// Method 1
console.log("******** Print Even Numbers Method 1 ********");
let num = 2;
while(num <= 10){
    console.log(num);
    num+=2
}

// Method 2
console.log("******** Print Even & Odd Numbers Method 2 ********");
let initial = 1;
while(initial <= 10){
    if(initial % 2 == 0){
        console.log(`${initial} is even`);
    }else{
        console.log(`${initial} is odd`);
    }
    initial++
}
//Ex3: Print numbers in reverse till 1
let num1 = 10;
while(num1 >=1){
    console.log(`${num1}`);
    num1--;
}
