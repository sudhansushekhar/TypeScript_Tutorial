// if condition - executes only if condition true
let age:number = 20;
if(age >= 18){
    console.log("This person is an adult.")
}

// if-else: executes if condition when true otherwise else is executed
age = 16;
if(age >= 18){
    console.log("This person is an adult.")
}else{
    console.log("This person is minor.")
}
    
let num:number = 35;
if(num % 2 == 0){
    console.log(`${num} is an even number.`)
}else{
    console.log(`${num} is an odd number.`)
}

// nested if-else: check all if condition one-by-one and executes that if condition when true otherwise else is executed
let marks = 55;
if(marks >= 90 && marks <= 100){
    console.log(`This student has passed with 'A+' Grade as he has obtained ${marks} marks.`)
}else if(marks >= 80 && marks < 90){
    console.log(`This student has passed with 'A' Grade as he has obtained ${marks} marks.`)
}else if(marks >= 70 && marks < 80){
    console.log(`This student has passed with 'B+' Grade as he has obtained ${marks} marks.`)
}else if(marks >= 60 && marks < 70){
    console.log(`This student has passed with 'B' Grade as he has obtained ${marks} marks.`)
}else{
    console.log(`This student has failed as he has obtained ${marks} marks.`)
}

let browser = 'Chromium'
if(browser == 'Chrome'){
    console.log(`You have selected ${browser} as browser.`)
}else if(browser == 'Firefox'){
    console.log(`You have selected ${browser} as browser.`)
}else if(browser == 'Safari'){
    console.log(`You have selected ${browser} as browser.`)
}else {
    console.log(`You have selected ${browser}, other than Chrome, Firefox and Safari.`)
}

// Switch-case statement:
// Break is mandatory to execute the true condition only otherwise it'll execute all the conditions after true condition
//Ex: Depending on the value of , print the corresponding day of the week
let day:number = 4;
switch (day){
    case 1:
        console.log("It's Monday.")
        break;
    case 2:
        console.log("It's Tuesday.")
        break;
    case 3:
        console.log("It's Wednesday.")
        break;
    case 4:
        console.log("It's Thursday.")
        break;
    case 5:
        console.log("It's Friday.")
        break;
    case 6:
        console.log("It's Satday.")
        break;
    case 7:
        console.log("It's Sunday.")
        break;
    default:console.log("Invalid week Day!!") 
}
