"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printInfo(x) {
    return x;
}
const str = printInfo("Hello");
console.log(str);
const num = printInfo(23);
console.log(num);
const bool = printInfo(true);
console.log(bool);
function uniqueDataTypeFunc(item, defaultValue) {
    return [item, defaultValue];
}
const str1 = uniqueDataTypeFunc("Hello", "World");
console.log(str1);
const dog1 = uniqueDataTypeFunc({
    name: "Buddy",
    breed: "Labrador",
}, {
    name: "default",
    breed: "unknown",
});
console.log(dog1);
//# sourceMappingURL=generics.js.map