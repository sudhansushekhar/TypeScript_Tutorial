/* 
    Key Points about Interfaces in TypeScript:
    1. An interface in TypeScript is a way to define the structure of an object.
    2. It specifies the properties and methods that an object must have, without providing the implementation details.
    3. Interfaces are used to enforce a contract on the shape of an object, ensuring that it adheres to a specific structure.
    4. Interfaces can be implemented by classes or used to type-check objects.
    5. They help in achieving better code organization, maintainability, and type safety in TypeScript applications.
    6. Interfaces can also extend other interfaces, allowing for the creation of complex object hierarchies.

    Abstract:
     - An interface is a blueprint for an object that defines the structure, including properties and methods, without implementing them. It ensures that objects adhere to a specific contract, promoting type safety and code organization in TypeScript.
    Abstract Method:
    - It only contains method signature without implementation.

    Types of Interface Properties:
    1. Regular Property: A standard property that must be implemented by any object or class that adheres to the interface.
    2. Optional Property: A property that may or may not be implemented. It is denoted by a question mark (?) after the property name.
    3. Read-Only Property: A property that can only be read and cannot be modified after its initial assignment. It is denoted by the readonly keyword.

    Types of Interface Methods:
    1. Standard Method: A method that must be implemented by any object or class that adheres to the interface.

    Function Type Interface:
        - It is used to define the structure of a function, including its parameters and return type.
    Extending Interfaces:
        - An interface can extend one or more interfaces, allowing you to create a new interface that inherits the properties and methods of the extended interfaces.
    Class Implementation:
        - A class can implement an interface, meaning it agrees to provide the implementation for all the properties and methods defined in the interface.
        - Calass uses the "implements" keyword to implement an interface.
*/

// Example 1: Basic Interface with Properties and Methods
// Blueprint of an object
interface Person {
    name: string;           // property
    age: number;           // property
    greet(): void;         // method type : abstract method
}

let student: Person = {
    name: "Alice",
    age: 25,
    greet: function() {     // if arrow function is used then this keyword will not work
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

student.greet(); // Output: Hello, my name is Alice and I am 25 years old.

// Example 2: Interface with Optional and Read-Only Properties
interface CarDetails {
    readonly make: string;      // Read-Only Property
    model: string;              // Regular Property
    year?: number;              // Optional Property
    displayInfo(): void;        // Method type: abstract method
}

let carOwner: CarDetails = {
    make: "Toyota",
    model: "Camry",
    displayInfo: function() {
        console.log(`Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year ?? "N/A"}`);
    }
};

carOwner.displayInfo(); // Output: Car Make: Toyota, Model: Camry, Year: N/A
// Trying to modify read-only property will cause an error
// carOwner.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.

// Example 3: Function Type Interface
interface MathOperation {
    (a: number, b: number): number; // Function signature
}
let add: MathOperation = function(x: number, y: number): number {
    return x + y;
}
console.log("Addition:", add(5, 10)); // Output: Addition: 15

// Example 4: Extending Interfaces used for Inheritance
interface Animal {
    species: string;
    makeSound(): void;  // Method type: abstract method
}
interface Dog extends Animal {
    breed: string;
}
let myDog: Dog = {
    species: "Canine",
    breed: "Labrador",
    makeSound: function() {
        console.log("Woof! Woof!");
    }
};
console.log(`My dog is a ${myDog.breed} of species ${myDog.species}.`);
myDog.makeSound(); // Output: Woof! Woof!

// Example 5: Class Implementation of an Interface
interface Shape {
    area(): number;
    perimeter(): number;
}
class Rectangle implements Shape {
    width: number;
    height: number;
    
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {            // Redefining method/variables from interface is mandatory
        return this.width * this.height;
    }
    perimeter(): number {       // Redefining method/variables from interface is mandatory
        return 2 * (this.width + this.height);
    }
}

let myRectangle = new Rectangle(5, 10);
console.log("Area of Rectangle:", myRectangle.area()); // Output: Area of Rectangle: 50
console.log("Perimeter of Rectangle:", myRectangle.perimeter()); // Output: Perimeter of Rectangle: 30


