// Parent Class

class Person {
    // Public Property: accessible from anywhere
    public name: string;

    // Protected Property: accessible within the class and its subclasses
    protected age: number;

    // Private Property: accessible only within the class
    private ssn: string;

    constructor(name1: string, ssn1: string, age1: number) {
        this.name = name1;
        this.ssn = ssn1;
        this.age = age1;
    }

    // Public Method
    public displayPublicInfo(): void {
        console.log(`Name: ${this.name}`);
    }

    // Private Method
    private displayPrivateInfo(): void {
        console.log(`SSN: ${this.ssn}`);
    }

    // Protected Method
    protected displayProtectedInfo(): void {
        console.log(`Age: ${this.age}`);
    }
}

// Child Class
class Employee extends Person {
    private employeeId: number;

    constructor(name: string, ssn: string, age: number, employeeId1: number) {
        super(name, ssn, age);
        this.employeeId = employeeId1;
    }
    public displayEmployeeInfo(): void {

        // Accessing public property and method from parent class
        console.log(`Employee Name: ${this.name}`);
        this.displayPublicInfo();

        // Accessing protected property and method from parent class
        console.log(`Employee Age: ${this.age}`);
        this.displayProtectedInfo();

        // Trying to access private property and method from parent class will result in error
        // console.log(`Employee SSN: ${this.ssn}`); // Error
        // this.displayPrivateInfo(); // Error

        // Displaying employeeId
        console.log(`Employee ID: ${this.employeeId}`); // private in same class
    }
}

// Example usage
let emp = new Employee("Alice", "123-45-6789", 30, 101);
emp.displayEmployeeInfo();

// Accessing public property and method from outside the class
console.log(`Employee Name from outside: ${emp.name}`);
emp.displayPublicInfo();

// Trying to access private and protected members from outside the class will result in error
// console.log(`Employee SSN from outside: ${emp.ssn}`); // Error
// emp.displayPrivateInfo(); // Error
// console.log(`Employee Age from outside: ${emp.age}`); // Error
// emp.displayProtectedInfo(); // Error

