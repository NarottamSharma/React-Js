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

//  type aliases

// type myString = string;
type Person = {
  name: string;
  age?: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name} and age is ${person.age}`);
}
const myPerson: Person = { name: "Ns" };
printPerson(myPerson);

// intersection

type UserInfo = {
  fname: string;
  lname: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const narottam:User={
  fname:'Narottam Sharma',
  lname:"Sharma",
  age:22,
  email:"ban@gmail.com",
  password:"aksnflkswan"
}
console.log(`Name:${narottam.lname}`);

// Unions
let password: string | number = 22;
let User2: UserInfo | AccountDetails = {
  fname: 'Narottam',
  lname: 'Sharma',
  age: 25
};
console.log(`Password: ${password}`);
console.log(`User2: ${User2.fname} ${User2.lname}`);

// Literal types

let num:1|3|4|5;
num = 3;
num = 1;
console.log(num);

let themeColor : 'red'|'yellow'|'green';
themeColor = 'yellow'
console.log(themeColor);

// themeColor = 'orange'
// console.log(themeColor);

let isTrue:true
isTrue = true
// isTrue = false;

// tuple
let myTuple : [number,string]
myTuple = [10,'Narottam']
const [age,name]= myTuple;
console.log(age);
