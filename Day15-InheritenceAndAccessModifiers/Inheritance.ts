// Inheritance in TypeScript
// Inheritance is a mechanism where a new class(child) can inherit properties and methods from an existing(parent) class.
// Inheritance promotes code reusability of an existing class. without modifying it.
// In TypeScript, we use the 'extends' keyword to create a derived class.

// Method Overriding:
// When a child class has a method with the same name as a method in the parent class, the child class method overrides the parent class method.
// This allows the child class to provide a specific implementation of the method.


// A -- Parent Class having common properties and methods, also called Base Class or Super Class
// B extends A -- Child Class which inherits from Parent Class, also called Derived Class or Sub Class

// Parent Class
class Car {
    // Property
    brand: string;
    model: string;
    color: string;

    // Constructor
    constructor(brandName: string, modelName: string, colorName: string) {
        this.brand = brandName;
        this.model = modelName;
        this.color = colorName;
    }

    // Method
    displayInfo(): void {
        console.log(`Car Brand: ${this.brand}`);
        console.log(`Car Model: ${this.model}`);
        console.log(`Car Color: ${this.color}`);
    }

    // Method
    parentInfo(): void {
        console.log(`This is Parent Class method.`);

    }
}

// Child Class inheriting from Parent Class
class ElectricCar extends Car {
    // Additional Property for Child Class
    batteryCapacity: number; // in kWh
    rangePerCharge: number; // in km

    // Constructor
    constructor(brand: string, model: string, color: string, batteryCapacity: number, rangePerCharge: number) {
        // Call the parent class constructor using super()
        super(brand, model, color);
        this.batteryCapacity = batteryCapacity;
        this.rangePerCharge = rangePerCharge;
    }

    // method overriding
    displayInfo(): void {
        // Call the parent class method using super
        super.displayInfo();
        // Additional display information specific to ElectricCar
        console.log(`Speedometer Reading: 90 Km/h`);
        console.log(`RPM Reading: 1600 rpm`);
        console.log(`Odometer Reading: 15000 km`);
    }

    batteryDescription(): string {
        
        return `This electric car has a battery capacity of ${this.batteryCapacity} kWh and can travel up to ${this.rangePerCharge} km on a single charge.`;
    }

}
    
// Example usage
let myElectricCar = new ElectricCar("Tesla", "Model S", "Red", 100, 652);
myElectricCar.displayInfo(); // Calls the overridden method in ElectricCar
myElectricCar.parentInfo(); // Calls the parent class method
console.log(myElectricCar.batteryDescription());

// Accessing Parent Class Method using super keyword
class HybridCar extends Car {
    fuelEfficiency: number; // in km/l
    electricRange: number; // in km
    constructor(brand: string, model: string, color: string, fuelEfficiency: number, electricRange: number) {
        super(brand, model, color);
        this.fuelEfficiency = fuelEfficiency;
        this.electricRange = electricRange;
    }
    displayInfo(): void {
        // Call the parent class method using super
        super.displayInfo();
        console.log(`Fuel Efficiency: ${this.fuelEfficiency} km/l`);
        console.log(`Electric Range: ${this.electricRange} km`);
    }
}

let myHybridCar = new HybridCar("Toyota", "Prius", "Blue", 25, 40);
myHybridCar.displayInfo(); // Calls the overridden method in HybridCar



// Summary
/*  - cannot use "this" keyword to access static variable or method inside class, must use class name
    - cannot use "this" keyword to access static variable or method inside class, must use class name
*/
