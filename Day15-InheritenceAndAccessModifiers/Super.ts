// super() - used to invoke immediate parent class constructor
// super - used to invoke immediate parent class methods and properties
//       - cannot be used to invoke parent class static methods or properties

/*
Compare this snippet from Day14-MethodAndConstructorOverloading/Student.ts:
- cannot use "this" keyword to access static variable or method inside class, must use class name
*/

class Animal {
    species: string;
    constructor(species: string) {
        this.species = species;
    }
    makeSound(): void {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    breed: string;
    constructor(breed: string) {
        // calling parent class constructor
        super("Canine");    // mandatory to call super() before using 'this' in derived class constructor
        this.breed = breed;
    }
    makeSound(): void {
        // calling parent class method
        super.makeSound();
        console.log("Bark");
    }
    displayInfo(): void {
        console.log(`Species: ${this.species}`);
        console.log(`Breed: ${this.breed}`);
    }
}

// Example usage
let myDog = new Dog("Labrador");
myDog.displayInfo();  // Display species and breed
myDog.makeSound();    // Invoke makeSound method

// Output:
// Species: Canine
// Breed: Labrador
// Animal sound
// Bark