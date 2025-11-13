// Method overloading and Constructor Overloading in TypeScript

class Calculator {
    // Method Overloading
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

class Person {
    name: string;
    age: number;
    // Constructor Overloading
    //constructor();  // Default constructor
    constructor(name: string);  // Parameterized constructor
    constructor(name: string, age: number);
    constructor(name: string, age?: number) {
        this.name = name;
        this.age = age ?? 19; // Default age to 0 if not provided
    }
}

// Usage of mrethod overloading
const calc = new Calculator();
console.log(calc.add(5, 10));
console.log(calc.add("Hello, ", "World!"));

// Usage of constructor overloading
const person1 = new Person("Alice"); 
console.log(`${person1.name}, Age: ${person1.age}`);

const person2 = new Person("Bob", 25);
console.log(`${person2.name}, Age: ${person2.age}`);
