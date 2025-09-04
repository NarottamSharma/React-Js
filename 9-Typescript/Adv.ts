// Interface for Function
interface MathOperation {
  (x: number, y: number): number;
}

let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;
console.log(add(2, 3));
console.log(subtract(2, 2));

// Interface for objects

interface Computer {
  name: string;
  ram: number;
}

const ComputerExample: Computer = {
  name: "i-7",
  ram: 16,
};

console.log(ComputerExample.name);
console.log(ComputerExample.ram);

interface Movie {
  readonly name: string;
  ratings: number;
  genre?: string;
}

const movie1: Movie = {
  name: "The Matrix",
  ratings: 9,
  genre: "Science Fiction",
};

const movie2: Movie = {
  name: "The Matri",
  ratings: 9,
};
console.log(movie2.name);
console.log(movie1.name);
// movie2.name = 'Hi'

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
  person.sayHello();
}

const Narottam: Person = {
  firstName: "Narottam",
  lastName: "Sharma",
  age: 25,
  sayHello() {
    console.log("Hello!");
  },
};
console.log(Narottam);
greet(Narottam);

interface Song {
  songName: string;
  sigerName: string;
  printSongInfo(songName: string, sigerName: string): string;
}

const song1: Song = {
  songName: "natural",
  sigerName: "Imagine Dragon",
  printSongInfo: (songName, sigerName) => {
    return `Song: ${songName} Singer:${sigerName}`;
  },
};
console.log(song1);
console.log(song1.printSongInfo("Natural", "Imagine Dragon"));

// Interface Extension Examples

// Base interface
interface Vehicle {
  brand: string;
  model: string;
  year: number;
  startEngine(): void;
}

// Extended interface - Car extends Vehicle
interface Car extends Vehicle {
  doors: number;
  fuelType: string;
  honkHorn(): void;
}

// Extended interface - Motorcycle extends Vehicle
interface Motorcycle extends Vehicle {
  engineSize: number;
  hasWindshield: boolean;
  wheelie(): void;
}

// Multiple inheritance - Electric Car extends both Car and adds electric features
interface ElectricVehicle {
  batteryCapacity: number;
  chargingTime: number;
  charge(): void;
}

interface ElectricCar extends Car, ElectricVehicle {
  autopilot: boolean;
  autonomousMode(): void;
}

// Creating objects using extended interfaces
const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  doors: 4,
  fuelType: "Gasoline",
  startEngine() {
    console.log("Car engine started!");
  },
  honkHorn() {
    console.log("Beep beep!");
  },
};

const myBike: Motorcycle = {
  brand: "Harley Davidson",
  model: "Street 750",
  year: 2022,
  engineSize: 750,
  hasWindshield: false,
  startEngine() {
    console.log("Motorcycle engine roared to life!");
  },
  wheelie() {
    console.log("Doing a wheelie!");
  },
};

const myTesla: ElectricCar = {
  brand: "Tesla",
  model: "Model S",
  year: 2024,
  doors: 4,
  fuelType: "Electric",
  batteryCapacity: 100,
  chargingTime: 45,
  autopilot: true,
  startEngine() {
    console.log("Electric motor silently activated!");
  },
  honkHorn() {
    console.log("Tesla horn sound!");
  },
  charge() {
    console.log("Charging the battery...");
  },
  autonomousMode() {
    console.log("Autopilot engaged!");
  },
};

console.log("=== Vehicle Examples ===");
console.log(myCar);
myCar.startEngine();
myCar.honkHorn();

console.log(myBike);
myBike.startEngine();
myBike.wheelie();

console.log(myTesla);
myTesla.startEngine();
myTesla.charge();
myTesla.autonomousMode();
