// Break: It breaks the loop when condition is met i.e. it will not execute further
console.log("****** Break Statement ******")
for(let i = 1; i <=10; i++){
    console.log(`${i} before break`)
    if(i == 5){
        break;
    }
    console.log(`${i} after break`)
}

// Continue: It skips the iteration when condition is met i.e. it will continue execute further iteration
console.log("****** Continue Statement ******")
for(let i = 1; i <=10; i++){
    if(i == 3 || i == 5 || i == 7){
        console.log(`skipped iteration!!`)
        continue;
    }
    console.log(`${i} continue`)
}