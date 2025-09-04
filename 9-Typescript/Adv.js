"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
console.log(add(2, 3));
console.log(subtract(2, 2));
const ComputerExample = {
    name: "i-7",
    ram: 16,
};
console.log(ComputerExample.name);
console.log(ComputerExample.ram);
const movie1 = {
    name: "The Matrix",
    ratings: 9,
    genre: "Science Fiction",
};
const movie2 = {
    name: "The Matri",
    ratings: 9,
};
console.log(movie2.name);
console.log(movie1.name);
function greet(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}`);
    person.sayHello();
}
const Narottam = {
    firstName: "Narottam",
    lastName: "Sharma",
    age: 25,
    sayHello() {
        console.log("Hello!");
    },
};
console.log(Narottam);
greet(Narottam);
const song1 = {
    songName: "natural",
    sigerName: "Imagine Dragon",
    printSongInfo: (songName, sigerName) => {
        return `Song: ${songName} Singer:${sigerName}`;
    },
};
console.log(song1);
console.log(song1.printSongInfo("Natural", "Imagine Dragon"));
// Creating objects using extended interfaces
const myCar = {
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
const myBike = {
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
const myTesla = {
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
//# sourceMappingURL=Adv.js.map