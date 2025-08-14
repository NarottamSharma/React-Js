/**
 * ES6 / Modern JavaScript Revision Sheet
 * --------------------------------------
 * This file is annotated with detailed comments so you can quickly revise:
 *  - Short‑circuit evaluation (||)
 *  - Template literals
 *  - Ternary operator
 *  - Object literal property shorthand & destructuring
 *  - Array destructuring
 *  - Default parameters, Rest (...args) & Spread (...array)
 *  - Core array iteration / search helpers: map, find, filter, some, every,
 *    includes, indexOf, findIndex
 *  - Optional chaining (?.) usage in fetch block
 *  - Async / Await + fetch
 *  - Defensive DOM access when executing in Node (document may be undefined)
 *
 * Feel free to trim or collapse sections when you are comfortable.
 */

// Simple pure function – returns what it receives. Demonstrates a function expression.
function getName(name) {
    return name;
}

let a = false;
let b = false; // (b is unused – intentionally left to show you can have multiple operands)

// Logical OR (||) short‑circuits: it returns the first truthy value.
// Because 'a' is false, JS evaluates getName(...). If 'a' were truthy, the function would never run.
console.log(a || getName("Sangam Mukherjee"));

//Template literals

let name1 = "John";
let name2 = "Doe";

// Traditional concatenation vs template literal (cleaner & supports expressions)
console.log(name1 + " " + name2, `${name1} ${name2}`);

//Ternary operator

const showRecipeOne = false; // Flip to true to see the other branch below.

function getRecipeOneName(recipeName) {
    return recipeName;
}

function getRecipeTwoName(recipeName) {
    return recipeName;
}

// Classic if/else
if (showRecipeOne) {
    console.log(getRecipeOneName("Pizza"));
} else {
    console.log(getRecipeTwoName("Coke"));
}

// Equivalent using ternary (use for expressions / inline selection)
showRecipeOne
    ? console.log(getRecipeOneName("Pizza"))
    : console.log(getRecipeTwoName("Coke"));

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
    // Object literal property shorthand (id: id → id)
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

// Object destructuring – pull only what you need.
const { description } = product2;

console.log(description);

const array = [1, 2, 3, 4];

// Pre‑ES6 manual indexing
let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
console.log(getArrayFirstValue, getArraySecondValue);

// Array destructuring – concise extraction in positional order.
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
    // Default parameters make arguments optional
    console.log(num1, num2);
    return num1 * num2;
}

console.log(mulOfTwoNumbers(10));

const array2 = [2, 3, 4];
const array3 = [10, 11, 12];

// Spread merges array contents into a new array (does not mutate originals)
console.log([999, ...array2, 90, ...array3, 10000]);

function getInfo(a, ...c) {
    // Rest parameter '...c' collects remaining arguments into an array
    console.log(a, c);
    return "Narottam Sharma";
}

console.log(getInfo(1, 2, 3, 4, 5, 5, 6, 6, 7, 4, 2, 2, 2));

// ES6 array method
// ARRAY UTILITY METHODS SUMMARY
// map      → transforms each item; returns new array of same length
// filter   → selects items matching a condition; returns *potentially shorter* array
// find     → returns the *first* matching item (or undefined)
// some     → true if *any* item matches condition
// every    → true if *all* items match condition
// includes → true if array contains a primitive value
// indexOf  → index of primitive (or -1)
// findIndex→ index of first match by predicate (or -1)

const personArray = [
    {
        name: "Narottam",
        age: 30,
        country: "India",
    },
    {
        name: "Narottam-2",
        age: 40,
        country: "USA",
    },
    {
        name: "Narottam-3",
        age: 50,
        country: "Russia",
    },
    {
        name: "Narottam-4",
        age: 45,
        country: "USA",
    },
];

// MAP: create an array of formatted strings
let getAllName = personArray.map((singlePerson, index) => {
    console.log(singlePerson, index); // side effect – usually avoid inside map unless for learning
    return `${singlePerson.name} age is ${singlePerson.age}`;
});
console.log(getAllName);

// FIND: only the first match (country === 'USA')
let getPersonFromUSA = personArray.find((singlePerson) => {
    return singlePerson.country === "USA";
});
console.log(getPersonFromUSA); // note: NOT all USA persons, just the first

// If you truly want *all* persons from USA use filter instead of find
let getAllPersonsFromUSA = personArray.filter((singlePerson) => {
    return singlePerson.country === "USA";
});
console.log(getAllPersonsFromUSA);

// SOME: true if any person is older than 45
let checkSomeArray = personArray.some((singlePerson) => singlePerson.age > 45);
console.log(checkSomeArray);

// EVERY: true only if *all* ages equal 40 – will be false here. (Changed from earlier equality demo.)
let checkEveryArray = personArray.every((singlePerson) => singlePerson.age >= 30);
// Above: now testing that all persons are at least 30.
console.log(checkEveryArray);

const fruitsArray = ["apple", "orange"];

console.log(fruitsArray.includes("apple")); // true
console.log(fruitsArray.includes("banana"), fruitsArray.indexOf("apple")); // false 0
console.log(fruitsArray.includes("banana"), fruitsArray.indexOf("ba")); // false -1 (partial string not found)

console.log(fruitsArray.findIndex((singleObject) => singleObject === "apple")); // 0
console.log(fruitsArray.findIndex((singleObject) => singleObject === "banana")); // -1

// DOM + FETCH SECTION -----------------------------------------------------
// When this file runs in a browser we can render into the DOM.
// When it runs in Node (e.g., `node main.js`) there is no 'document', so we guard it.
const getListofProductElement =
    typeof document !== "undefined" ? document.querySelector(".list-of-products") : null;

function renderProduct(getProducts) {
    if (!getListofProductElement) return; // Skip silently in non-browser environments
    getListofProductElement.innerHTML = getProducts
        .map((singleObject) => `<p>${singleObject.title}</p>`)
        .join("");
}

async function fetchListofProduct() {
    try {
        const apiResponse = await fetch("https://dummyjson.com/products", { method: "GET" });
        const result = await apiResponse.json();
        console.log(result); // Inspect shape of returned data
        // Optional chaining (?.) avoids errors if 'products' is undefined
        if (result?.products?.length > 0) renderProduct(result.products);
    } catch (e) {
        console.log("Fetch error:", e);
    }
}

fetchListofProduct();

/**
 * NEXT STUDY SUGGESTIONS:
 *  - forEach vs map (when to use each – map returns array, forEach doesn't)
 *  - Reduce for aggregation.
 *  - Promises (then/catch) vs async/await equivalence.
 *  - Error handling patterns & retry logic.
 *  - Nullish coalescing (??) vs || differences.
 *  - Optional chaining deep patterns & safe navigation.
 *  - ES Modules (import/export) vs CommonJS (require/module.exports).
 *  - Set / Map / WeakSet / WeakMap use‑cases (dedupe, metadata, memory).
 *  - Event loop: call stack, microtasks (Promise), macrotasks (setTimeout), rendering.
 *  - Debounce & throttle patterns for input / scroll listeners.
 *  - Immutability strategies (spread, Object.freeze, structuredClone).
 *  - Destructuring with defaults and renaming (const {a: aliasA = 0} = obj).
 *  - Generator functions & iterators (lazy sequences, custom iteration).
 *  - Proxy for meta‑programming (validation, logging, access control).
 *  - Symbol usage (private-ish keys, well‑known symbols like Symbol.iterator).
 *  - Performance basics: avoiding unnecessary re-renders (in React) & GC pressure.
 *  - Memoization strategies (simple cache, Map-based keying).
 *  - Tree shaking & bundling concepts (dead code elimination).
 *  - Basic TypeScript migration (types, interfaces, generics).
 *  - Testing fundamentals (Jest: arrange-act-assert, mocking fetch).
 */

// ============================================================================
// DEEP DIVE EXAMPLES FOR STUDY TOPICS (Feel free to collapse while revising)
// ============================================================================

// 1. forEach vs map ----------------------------------------------------------
const numbersForEachMap = [1, 2, 3];
// forEach: executes side effects, returns undefined
numbersForEachMap.forEach((n, i) => {
    // side effect (logging)
    if (i === 0) console.log("forEach first element", n);
});
// map: transforms and returns new array (do NOT use only for side effects)
const doubled = numbersForEachMap.map((n) => n * 2);
console.log("map result (doubled)", doubled);

// 2. Reduce for aggregation --------------------------------------------------
const cart = [
    { id: 1, price: 499.99, qty: 1 },
    { id: 2, price: 199.5, qty: 2 },
];
const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
console.log("cart total", cartTotal.toFixed(2));

// 3. Promises then/catch vs async/await --------------------------------------
function fakeApi(value, shouldFail = false, delay = 300) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) reject(new Error("API failed"));
            else resolve({ data: value });
        }, delay);
    });
}
// then/catch
fakeApi("then-chain value").then((res) => console.log(res.data)).catch(console.error);
// async/await (more linear & try/catch for sync-like flow)
async function demoAsyncAwait() {
    try {
        const res = await fakeApi("async-await value");
        console.log(res.data);
    } catch (e) {
        console.log("error in async/await", e.message);
    }
}
demoAsyncAwait();

// 4. Error handling patterns & retry logic ----------------------------------
async function retry(fn, attempts = 3, delay = 200) {
    let lastErr;
    for (let i = 1; i <= attempts; i++) {
        try {
            return await fn();
        } catch (e) {
            lastErr = e;
            if (i < attempts) await new Promise((r) => setTimeout(r, delay));
        }
    }
    throw lastErr;
}
retry(() => fakeApi("retry success", false, 100)).then((r) => console.log("retry result", r.data));

// 5. Nullish coalescing ?? vs || --------------------------------------------
const zeroNumber = 0;
console.log(zeroNumber || 42); // 42 because 0 is falsy
console.log(zeroNumber ?? 42); // 0 because ?? only checks null or undefined
const maybeUndefined = undefined;
console.log(maybeUndefined ?? "default used"); // 'default used'

// 6. Optional chaining deep navigation --------------------------------------
const nestedUser = { profile: { address: { city: "Pune" } } };
console.log(nestedUser.profile?.address?.city); // 'Pune'
console.log(nestedUser.profile?.contacts?.email); // undefined (no throw)

// 7. ES Modules vs CommonJS (comment only) ----------------------------------
// CommonJS (this file style in Node): const mod = require('./mod'); module.exports = fn;
// ES Module (browser / modern bundlers / type=module): import mod from './mod.js'; export default fn;
// Node can use ES Modules via package.json { "type": "module" } or .mjs extension.

// 8. Set / Map / WeakSet / WeakMap ------------------------------------------
const uniqueIds = new Set([1, 2, 2, 3]); // duplicates removed
uniqueIds.add(3).add(4);
console.log("Set contents", [...uniqueIds]); // [1,2,3,4]
const userVisits = new Map();
userVisits.set("alice", 1).set("bob", 2);
console.log("Map get alice", userVisits.get("alice"));
let weakMap = new WeakMap();
let objKey = {}; // if objKey becomes unreachable, entry can be GC'd
weakMap.set(objKey, { meta: "attached" });
// WeakSet similar but only stores objects, no iteration.

// 9. Event loop ordering -----------------------------------------------------
console.log("event loop: sync start");
setTimeout(() => console.log("macrotask (timeout)"), 0);
Promise.resolve().then(() => console.log("microtask (promise then)"));
console.log("event loop: sync end");

// 10. Debounce & Throttle ----------------------------------------------------
function debounce(fn, wait = 200) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), wait);
    };
}
function throttle(fn, wait = 200) {
    let last = 0;
    return (...args) => {
        const now = Date.now();
        if (now - last >= wait) {
            last = now;
            fn(...args);
        }
    };
}
const debouncedLog = debounce((v) => console.log("debounced", v), 100);
const throttledLog = throttle((v) => console.log("throttled", v), 100);
debouncedLog(1); debouncedLog(2); debouncedLog(3); // only last (3) logs
throttledLog(1); throttledLog(2); // only first (1) logs quickly
setTimeout(() => throttledLog(3), 150); // logs after window

// 11. Immutability strategies ------------------------------------------------
const state = { user: { name: "Bob", score: 10 }, items: [1, 2] };
// Shallow copy + update (nested still references original child objects)
const nextState = { ...state, user: { ...state.user, score: 11 }, items: [...state.items, 3] };
console.log("immutable update", nextState);
// Deep freeze example (for learning – performance cost!)
function deepFreeze(o) { Object.keys(o).forEach(k => (typeof o[k] === 'object' && o[k] !== null) && deepFreeze(o[k])); return Object.freeze(o); }
deepFreeze(nextState);

// 12. Destructuring defaults & renaming -------------------------------------
const apiPayload = { idApi: 9, config: { retries: 2 } };
const { idApi: identifier, missing = "fallback", config: { retries: retryCount = 0 } } = apiPayload;
console.log(identifier, missing, retryCount);

// 13. Generator functions & custom iterator ---------------------------------
function* idGenerator(start = 1) {
    let i = start;
    while (true) yield i++;
}
const gen = idGenerator(100);
console.log(gen.next().value, gen.next().value); // 100 101

// 14. Proxy for meta-programming --------------------------------------------
const targetUser = { name: "Carol", age: 33 };
const userProxy = new Proxy(targetUser, {
    get(obj, prop) {
        if (!(prop in obj)) return `Property '${String(prop)}' not found`;
        return obj[prop];
    },
    set(obj, prop, val) {
        if (prop === "age" && typeof val !== "number") throw new TypeError("age must be number");
        obj[prop] = val;
        return true;
    },
});
console.log(userProxy.name);
try { userProxy.age = "bad"; } catch (e) { console.log("proxy validation", e.message); }

// 15. Symbol usage -----------------------------------------------------------
const PRIVATE = Symbol("privateField");
const symObj = { visible: 1, [PRIVATE]: 42 };
console.log(Object.keys(symObj)); // ['visible'] (symbol not enumerated by keys)
console.log(symObj[PRIVATE]); // 42
// Custom iterator using Symbol.iterator
const range = {
    start: 1,
    end: 3,
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        return {
            next() {
                if (current <= end) return { value: current++, done: false };
                return { done: true };
            },
        };
    },
};
console.log([...range]); // [1,2,3]

// 16. Performance basics (micro example) ------------------------------------
// Expensive computation (simulated) – wrap with memoization if reused with same input
function expensiveSquare(n) {
    for (let i = 0; i < 1e5; i++); // burn CPU (demo)
    return n * n;
}
// 17. Memoization strategy ---------------------------------------------------
function memoize(fn) {
    const cache = new Map();
    return (arg) => {
        if (cache.has(arg)) return cache.get(arg);
        const val = fn(arg);
        cache.set(arg, val);
        return val;
    };
}
const memoSquare = memoize(expensiveSquare);
console.log(memoSquare(8)); // computed
console.log(memoSquare(8)); // cached

// 18. Tree shaking & bundling (concept) -------------------------------------
// Exporting *unused* pure functions allows bundlers to drop them. Example (conceptual):
// export function helper() { return 123; } // If not imported anywhere, removed in prod build.

// 19. Basic TypeScript migration (concept) ----------------------------------
// Step 1: Rename file to .ts, add types: function add(a: number, b: number): number { return a + b }
// Step 2: Configure tsconfig.json. Step 3: Fix implicit any warnings. Step 4: Use interfaces for shapes.

// 20. Testing fundamentals (Jest pseudo example) ----------------------------
// test('add sums two numbers', () => { expect(add(2,3)).toBe(5); });
// Arrange (setup data) → Act (execute function) → Assert (verify result).
// For fetch: global.fetch = jest.fn(() => Promise.resolve({ json: () => ({ ok: true }) }));

// (End of learning section) --------------------------------------------------
