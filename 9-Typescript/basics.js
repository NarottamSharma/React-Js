"use strict";
// ========================================
// BASIC TYPES IN TYPESCRIPT
// ========================================
Object.defineProperty(exports, "__esModule", { value: true });
// STRING TYPE
let myName = "Narottam";
myName = "Akhila"; // Can reassign string values
console.log(myName);
// NUMBER TYPE
const favNumber = 12;
// favNumber += 2; // ERROR: Cannot modify const
console.log(favNumber);
// BOOLEAN TYPE
let tsHard = false;
console.log(tsHard);
tsHard = true; // Can reassign boolean values
console.log(tsHard);
// TYPE INFERENCE
let tech = "typescript"; // TypeScript infers this as string
// tech = 12; // ERROR: Cannot assign number to string
// ANY TYPE (avoid when possible)
let color = "crimson-red";
console.log(color);
color = 12; // any allows any type
console.log(color);
// ========================================
// FUNCTIONS
// ========================================
// Basic function
function d() {
    console.log("Hi");
}
d();
// Function with parameter and return type
function addOne(num) {
    return num + 1;
}
console.log(addOne(3));
// Arrow function with multiple parameters
const double = (x, y) => x * y;
console.log(double(2, 3));
// Function with default parameter
function greet(person = "Anonymous") {
    return `Hello ${person}`;
}
console.log(greet()); // Uses default value
console.log(greet("Narottam")); // Uses provided value
// Explicit return type annotation
function square(x) {
    return x * x;
}
console.log(square(100));
// Arrow function with explicit return type
let squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(5));
// VOID return type (returns nothing)
function printMessage(message) {
    console.log(`This is my message: ${message}`);
}
printMessage("hey");
// NEVER return type (never returns - throws error or infinite loop)
function throwError(msg) {
    throw new Error(msg);
}
// console.log(throwError('Error from server')); // Commented to prevent error
// ========================================
// ARRAYS
// ========================================
// Array syntax 1: type[]
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num));
// Array syntax 2: Array<type>
const names = ["Army", "Narottam", "Ak"];
// ========================================
// OBJECTS
// ========================================
// Object with explicit type annotation
const person = {
    fname: "Narottam",
    lname: "Sharma",
    pNo: 4983984,
};
console.log(person);
// Function returning object with explicit type
function printUser() {
    return {
        fname: "Narottam",
        lname: "Sharma",
        pNo: 4983984,
    };
}
console.log(printUser());
function printPerson(person) {
    console.log(`Name: ${person.name} and age is ${person.age}`);
}
const myPerson = { name: "Ns" }; // age is optional, so we can omit it
printPerson(myPerson);
const narottam = {
    // Must have ALL properties from both types
    fname: "Narottam Sharma",
    lname: "Sharma",
    age: 22,
    email: "ban@gmail.com",
    password: "aksnflkswan",
};
console.log(`Name: ${narottam.lname}`);
// ========================================
// UNION TYPES (|)
// ========================================
// Union allows a value to be one of several types
// The value can be ANY ONE of the specified types
// Syntax: Type1 | Type2 | Type3
let password = 22; // Can be either string OR number
let User2 = {
    // Can be either UserInfo OR AccountDetails (not both)
    fname: "Narottam",
    lname: "Sharma",
    age: 25,
    // This object matches UserInfo structure
};
console.log(`Password: ${password}`);
console.log(`User2: ${User2.fname} ${User2.lname}`);
// ========================================
// LITERAL TYPES
// ========================================
// Literal types restrict values to specific literals
// More restrictive than primitive types
// Numeric literal type - only accepts specific numbers
let num; // Only these exact numbers are allowed
num = 3; // ✅ Valid
num = 1; // ✅ Valid
// num = 2; // ❌ Error - 2 is not allowed
console.log(num);
// String literal type - only accepts specific strings
let themeColor; // Only these exact strings
themeColor = "yellow"; // ✅ Valid
console.log(themeColor);
// themeColor = 'orange' // ❌ Error - 'orange' not in the union
// console.log(themeColor);
// Boolean literal type - only accepts specific boolean value
let isTrue; // Only the value 'true' is allowed
isTrue = true; // ✅ Valid
// isTrue = false; // ❌ Error - only 'true' is allowed
// ========================================
// TUPLES
// ========================================
// Tuples are arrays with fixed length and specific types for each position
// Order and type of elements matter
// Syntax: [Type1, Type2, Type3]
let myTuple; // First element must be number, second must be string
myTuple = [10, "Narottam"]; // ✅ Correct order and types
// myTuple = ['Narottam', 10] // ❌ Error - wrong order
// Destructuring tuples maintains type information
const [age, name] = myTuple; // age is number, name is string
console.log(age);
// ========================================
// ENUMS
// ========================================
// Enums define a set of named constants
// Useful for representing a collection of related values
// Can be numeric or string enums
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions["Sunny"] = "sunny";
    WeatherConditions["Cloudy"] = "cloudy";
    WeatherConditions["Rainy"] = "rainy";
})(WeatherConditions || (WeatherConditions = {}));
console.log(WeatherConditions.Cloudy); // Outputs: 'cloudy'
// Benefits of enums:
// 1. Better readability than magic strings/numbers
// 2. IntelliSense support
// 3. Compile-time checking
// 4. Reverse mapping (for numeric enums)
//# sourceMappingURL=basics.js.map