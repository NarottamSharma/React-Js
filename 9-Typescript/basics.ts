// ========================================
// BASIC TYPES IN TYPESCRIPT
// ========================================

// STRING TYPE
let myName: string = "Narottam";
myName = "Akhila"; // Can reassign string values
console.log(myName);

// NUMBER TYPE
const favNumber: number = 12;
// favNumber += 2; // ERROR: Cannot modify const
console.log(favNumber);

// BOOLEAN TYPE
let tsHard: boolean = false;
console.log(tsHard);
tsHard = true; // Can reassign boolean values
console.log(tsHard);

// TYPE INFERENCE
let tech = "typescript"; // TypeScript infers this as string
// tech = 12; // ERROR: Cannot assign number to string

// ANY TYPE (avoid when possible)
let color: any = "crimson-red";
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
function addOne(num: number): number {
  return num + 1;
}
console.log(addOne(3));

// Arrow function with multiple parameters
const double = (x: number, y: number): number => x * y;
console.log(double(2, 3));

// Function with default parameter
function greet(person: string = "Anonymous"): string {
  return `Hello ${person}`;
}
console.log(greet()); // Uses default value
console.log(greet("Narottam")); // Uses provided value

// Explicit return type annotation
function square(x: number): number {
  return x * x;
}
console.log(square(100));

// Arrow function with explicit return type
let squareArrow = (x: number): number => {
  return x * x;
};
console.log(squareArrow(5));

// VOID return type (returns nothing)
function printMessage(message: string): void {
  console.log(`This is my message: ${message}`);
}
printMessage("hey");

// NEVER return type (never returns - throws error or infinite loop)
function throwError(msg: string): never {
  throw new Error(msg);
}
// console.log(throwError('Error from server')); // Commented to prevent error

// ========================================
// ARRAYS
// ========================================

// Array syntax 1: type[]
const numbers: number[] = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num));

// Array syntax 2: Array<type>
const names: Array<string> = ["Army", "Narottam", "Ak"];

// ========================================
// OBJECTS
// ========================================

// Object with explicit type annotation
const person: { fname: string; lname: string; pNo: number } = {
  fname: "Narottam",
  lname: "Sharma",
  pNo: 4983984,
};
console.log(person);

// Function returning object with explicit type
function printUser(): { fname: string; lname: string; pNo: number } {
  return {
    fname: "Narottam",
    lname: "Sharma",
    pNo: 4983984,
  };
}
console.log(printUser());

// ========================================
// KEY CONCEPTS TO REMEMBER:
// ========================================
// 1. TypeScript provides static typing for JavaScript
// 2. Use specific types instead of 'any' when possible
// 3. const variables cannot be reassigned
// 4. Functions should have explicit parameter and return types
// 5. Objects can have type annotations for their properties
// ========================================

// ========================================
// TYPE ALIASES
// ========================================
// Type aliases allow you to create custom names for types
// This makes code more readable and reusable
// Syntax: type AliasName = ExistingType

// type myString = string; // Simple alias example

// Custom object type with optional property
type Person = {
  name: string; // Required property
  age?: number; // Optional property (? makes it optional)
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name} and age is ${person.age}`);
}
const myPerson: Person = { name: "Ns" }; // age is optional, so we can omit it
printPerson(myPerson);

// ========================================
// INTERSECTION TYPES (&)
// ========================================
// Intersection combines multiple types into one
// The result has ALL properties from ALL intersected types
// Syntax: Type1 & Type2 & Type3

type UserInfo = {
  fname: string;
  lname: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

// User type has ALL properties from both UserInfo AND AccountDetails
type User = UserInfo & AccountDetails;

const narottam: User = {
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

let password: string | number = 22; // Can be either string OR number
let User2: UserInfo | AccountDetails = {
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
let num: 1 | 3 | 4 | 5; // Only these exact numbers are allowed
num = 3; // ✅ Valid
num = 1; // ✅ Valid
// num = 2; // ❌ Error - 2 is not allowed
console.log(num);

// String literal type - only accepts specific strings
let themeColor: "red" | "yellow" | "green"; // Only these exact strings
themeColor = "yellow"; // ✅ Valid
console.log(themeColor);

// themeColor = 'orange' // ❌ Error - 'orange' not in the union
// console.log(themeColor);

// Boolean literal type - only accepts specific boolean value
let isTrue: true; // Only the value 'true' is allowed
isTrue = true; // ✅ Valid
// isTrue = false; // ❌ Error - only 'true' is allowed

// ========================================
// TUPLES
// ========================================
// Tuples are arrays with fixed length and specific types for each position
// Order and type of elements matter
// Syntax: [Type1, Type2, Type3]

let myTuple: [number, string]; // First element must be number, second must be string
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

enum WeatherConditions {
  Sunny = "sunny", // String enum - explicitly set values
  Cloudy = "cloudy",
  Rainy = "rainy",
}

console.log(WeatherConditions.Cloudy); // Outputs: 'cloudy'

// Benefits of enums:
// 1. Better readability than magic strings/numbers
// 2. IntelliSense support
// 3. Compile-time checking
// 4. Reverse mapping (for numeric enums)
