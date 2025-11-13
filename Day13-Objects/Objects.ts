// Objects: contains properties and methods related to objects.
// Object contains variables and methods in forms of key-value pairs.
// Objects can be used to store collections of data and more complex entities.

// Example of an object representing a person like empId, name, age, designation, salary etc.

// Different ways to create an object in TypeScript
// 1. Using 'object' Literal
// 2. Inline type object type
// 3. Using 'type' alias
// 4. Using classes


// ===============================================================================
console.log("--------------------------------------------------");
// 1. Using 'object' Literal : directly define the values for variables inside the object in key-value pairs
// typescript 'object' represents non-primitive types
// if 'object' type is used, we cannot create properties or methods on the object directly

let personObj: object = {
    empId: 101,
    name: "John Doe",
    age: 30,
    designation: "Software Engineer",
    salary: 60000
};

console.log("Type of personObj:", typeof personObj);
console.log("Person Object using 'object' literal:", personObj);

console.log("--------------------------------------------------");

// The following line would cause an error because 'personObj' is of type 'object'
// console.log("Name of personObj:", personObj.name); // Error: Property 'name' does not exist on type 'object'

// To access the data inside the object, we need to remove the 'object' type
let personObj1 = {
    empId: 102,
    name: "Jane Smith",
    age: 28,
    designation: "Product Manager",
    salary: 75000,
    getDetails: function() {
        return `${this.name} is ${this.designation} having Salary: ${this.salary}`;
    }
};

// assessing properties and methods using dot notation approach-1
console.log("Person Object without 'object' type:", personObj1);
console.log("Name of personObj1:", personObj1.name); // Accessing property
console.log("Designation of personObj1:", personObj1.designation); // Accessing property
console.log(personObj1.getDetails()); // Calling method

// accessing properties using bracket notation approach-2
console.log("Age of personObj1 using bracket notation:", personObj1["age"]); // Accessing property
console.log(personObj1["getDetails"]()); // Calling method

// Modifying properties
personObj1.salary = 80000;
console.log("Updated Salary of personObj1:", personObj1.salary);
console.log(personObj1.getDetails()); // Calling method after modification

console.log("--------------------------------------------------");
// ===============================================================================
// 2. Inline type object type : defining the structure of the object inline using type annotations
// The limitation of this approach is that the structure has to be redefined for every new object
let personObj2: { empId: number; name: string; age: number; designation: string; salary: number; getDetails: () => string } = {
    empId: 103,
    name: "Alice Johnson",
    age: 32,
    designation: "UX Designer",
    salary: 70000,
    getDetails()  {
        return `${this.name} is ${this.designation} having Salary: ${this.salary}`;
    }
};

console.log("--------------------------------------------------");
// redefining properties and methods every time for new object
let personObj3: { empId: number; name: string; age: number; designation: string; salary: number; getDetails: () => string } = {
    empId: 106,
    name: "Michael Lee",
    age: 35,
    designation: "DevOps Engineer",
    salary: 85000,
    getDetails()  {
        return `${this.name} is ${this.designation} having Salary: ${this.salary}`;
    }
};

console.log("Person Object using inline type:", personObj2);
console.log("Name of personObj2 using inline type:", personObj2.name);

console.log(personObj3.getDetails());
console.log("Designation of personObj3 using inline type:", personObj3.designation);

console.log("--------------------------------------------------");

// ===============================================================================
// 3. Using 'type' alias : defining a custom type for the object structure and then using it to create objects
// This helps in reusability of the object structure in multiple places without redefining the structure each time
type Person = {
    empId: number;
    name: string;
    age: number;
    designation: string;
    salary: number;
    getDetails: () => string;
};

let personObj4: Person = {
    empId: 104,
    name: "Bob Brown",
    age: 29,
    designation: "Data Analyst",
    salary: 65000,
    getDetails() {
        return `${this.name} is ${this.designation} having Salary: ${this.salary}`;
    }
};

let personObj5: Person = {
    empId: 105,
    name: "Eve Davis",
    age: 27,
    designation: "Marketing Specialist",
    salary: 62000,
    getDetails() {
        return `${this.name} is ${this.designation} having Salary: ${this.salary}`;
    }
};

console.log("Person Object using type alias:", personObj4);
console.log("Designation of personObj3 using type alias:", personObj4.designation);
console.log(personObj5.getDetails());

console.log("--------------------------------------------------");
// ===============================================================================
// 4. Using classes : defining a class with properties and methods, and then creating objects (instances) of that class - Most preferred way
class Student {
    stdId: number;
    stdFirstName: string;
    stdLastName: string;
    stdAge: number;

    constructor(studentId: number, studentFirstName: string, studentLastName: string, age: number) {
        this.stdId = studentId;
        this.stdFirstName = studentFirstName;
        this.stdLastName = studentLastName;
        this.stdAge = age;
    }

    getFullName(): string {
        return `${this.stdFirstName} ${this.stdLastName}`;
    }

    getDetails(): string {
        return `Student ID: ${this.stdId}, Name: ${this.getFullName()}, Age: ${this.stdAge}`;
    }

}

let studentObj1 = new Student(201, "Tom", "Harris", 20);
let studentObj2 = new Student(202, "Emma", "Clark", 22);

console.log("Student Object using class:", studentObj1);
console.log("Full Name of studentObj1 using class:", studentObj1.getFullName());
console.log(studentObj2.getDetails());
console.log("Age of studentObj2 using class:", studentObj2.stdAge);

// ===============================================================================

// Summary:
// In this code, we explored different ways to create and work with objects in TypeScript:
// Most often used way is using classes to create objects, as it provides better structure, reusability, and encapsulation of data and behavior.
class PersonClass {
    empId: number;
    name: string;
    age: number;
    designation: string;
    salary: number;
    constructor(empId: number, name: string, age: number, designation: string, salary: number) {
        this.empId = empId;
        this.name = name;
        this.age = age;
        this.designation = designation;
        this.salary = salary;
    }
    getDetails(): string {
        return `${this.name} is ${this.designation} having Salary: ${this.salary}`;
    }
}

let personObj6 = new PersonClass(107, "Chris Wilson", 31, "QA Engineer", 68000);
let personObj7 = new PersonClass(108, "Sara Martinez", 26, "Business Analyst", 64000);

console.log("Person Object using class:", personObj6);
console.log("Name of personObj6 using class:", personObj6.name);

console.log(personObj7.getDetails());

// second most often used is first way i.e., using 'object' literal without 'object' type to create objects directly.
console.log("Designation of personObj7 using class:", personObj7.designation);

