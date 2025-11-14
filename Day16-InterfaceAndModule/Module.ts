/* 
    Module: This module provides basic calculator functions and text formatting utilities.
    Export keyword is used to make functions and classes available outside this module.
    This can be imported and used in other TypeScript files.
*/

let appName = "Calculator App";

function add(num1: number, num2: number): number {
    return num1 + num2;
}

function subtract(num1: number, num2: number): number {
    return num1 - num2;
}

class Formatter {
    toUpperCase(text: string): string {
        return text.toUpperCase();
    }
    toLowerCase(text: string): string {
        return text.toLowerCase();
    }
}

export { appName, add, subtract, Formatter };