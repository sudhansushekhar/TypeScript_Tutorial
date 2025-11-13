/* 
    1. Class
    2. Read Only Property
    3. Optional Property
    4. Static variable & Method:
        - can be accessed without creating object of class i.e directly by class name
        - shared among all instances/objects of the class
        - can be modified by using any object of the class or by class name itself
        - cannot use "this" keyword to access static variable or method inside class, must use class name
*/

class Student {
    // Read Only Property : can be assigned only once
    readonly studentId: number;

    // Optional Property: by using "?"
    age?: number;

    // Regular Property
    studentName: string;

    // Static Variable : shared among all instances/objects of the class
    static schoolName: string = "ABC School";

    // defining constructor
    constructor(stdId: number, name: string, age?: number) {
        this.studentId = stdId;
        this.studentName = name;
        this.age = age; // if age is not provided it will be undefined
    }

    // Static Method
    static getSchoolName(): string {
        return Student.schoolName;
    }

    // Mofify using Static Method
    static changeSchoolName(schName : string): string {
        return Student.schoolName = schName;
    }

    // 
    displayInfo(): void {
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Student Name: ${this.studentName}`);

        if (this.age !== undefined) {
            console.log(`Age: ${this.age}`);
        }
        else {
            console.log("Age: Not provided");
        }

        let previousSchool = Student.getSchoolName();
        console.log(`School Name: ${previousSchool}`);
    }
}

// Example usage
let student1 = new Student(1, "John Doe", 20);  // object creation of Student class
let student2 = new Student(2, "Jane Smith");  // object creation of Student class

// Displaying student information by calling method
console.log("Student 1 Info:");
student1.displayInfo();
console.log("Student 2 Info:");
student2.displayInfo();

// Modifying static variable using static method
Student.changeSchoolName("XYZ Academy");


// Displaying student information by calling method after changing static variable
console.log("\n------After changing school name------\n");
console.log("Student 1 Info:");
student1.displayInfo();
console.log("Student 2 Info:");
student2.displayInfo();

// Trying to modify read-only property will cause an error
// student1.studentId = 10; // Error: Cannot assign to 'studentId' because it is a read-only property.
