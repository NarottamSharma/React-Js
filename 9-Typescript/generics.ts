function printInfo<T>(x: T) {
  return x;
}

const str = printInfo<string>("Hello");
console.log(str);
const num = printInfo<number>(23);
console.log(num);
const bool = printInfo<boolean>(true);
console.log(bool);

function uniqueDataTypeFunc<T>(item: T, defaultValue: T): [T, T] {
  return [item, defaultValue];
}

const str1 = uniqueDataTypeFunc<string>("Hello", "World");
console.log(str1);

interface Dog {
  name: string;
  breed: string;
}
const dog1 = uniqueDataTypeFunc<Dog>(
  {
    name: "Buddy",
    breed: "Labrador",
  },
  {
    name: "default",
    breed: "unknown",
  }
);
console.log(dog1);
