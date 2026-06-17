//number , string , boolean , undefined, null, briglnt ,symbol -> primitive data types

// JavaScript Data Types

// 1. Number
let age = 20;
console.log(age); // 20

// 2. String
let name = "Chandan";
console.log(name); // Chandan

// 3. Boolean
let isStudent = true;
console.log(isStudent); // true

// 4. Undefined
let city;
console.log(city); // undefined

// 5. Null
let car = null;
console.log(car); // null

// 6. BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);

// 7. Symbol
let uniqueId = Symbol("id");
console.log(uniqueId);

// Non-Primitive Data Type

// 8. Object
let person = {
    name: "Chandan",
    age: 20,
    course: "B.Tech CS/AI"
};
console.log(person);

// Array (Object Type)
let subjects = ["HTML", "CSS", "JavaScript"];
console.log(subjects);

// Function (Object Type)
function greet() {
    console.log("Hello World");
}
greet();

// typeof Operator
okk
console.log(typeof age);        // number
console.log(typeof name);       // string
console.log(typeof isStudent);  // boolean
console.log(typeof city);       // undefined
console.log(typeof car);        // object (JavaScript bug/quirk)
console.log(typeof bigNumber);  // bigint
console.log(typeof uniqueId);   // symbol
console.log(typeof person);     // object
console.log(typeof subjects);   // object
console.log(typeof greet);      // function