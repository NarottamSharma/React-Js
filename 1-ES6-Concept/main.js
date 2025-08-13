function getName(name) {
  return name;
}

let a = false;
let b = false;

console.log(a || getName("Sangam Mukherjee"));

//Template literals

let name1 = "John";
let name2 = "Doe";

console.log(name1 + " " + name2, `${name1} ${name2}`);

//Ternary operator

const showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Coke"));
}

showRecipeOne
  ? console.log(getRecipeOneName("Pizza"))
  : console.log(getRecipeTwoName("Coke"));

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

console.log(product);

const product2 = {
  description: "Product 2 description",
  id,
  productName,
  rating,
};

// const getProductTwoDescription = product2.description;

// console.log(getProductTwoDescription);

const { description } = product2;

console.log(description);

const array = [1, 2, 3, 4];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue, getArraySecondValue);

const [
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement,
] = array;

console.log(
  arrayFirstElement,
  arraySecondElement,
  arrayThirdElement,
  arrayFourthElement
);

//default parameters, spread and rest operators

function mulOfTwoNumbers(num1 = 1, num2 = 2) {
  console.log(num1, num2);
  return num1 * num2;
}

console.log(mulOfTwoNumbers(10));

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];

console.log([999, ...array2, 90, ...array3, 10000]);

function getInfo(a, ...c) {
  console.log(a, c);

  //

  return "Sangam Mukherjee";
}

console.log(getInfo(1, 2, 3, 4, 5, 5, 6, 6, 7, 4, 2, 2, 2));
