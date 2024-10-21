// This is my first JavaScript code!
console.log('hello world!');


// primitive types(String, Number, Boolean, undefined, null)
let name = 'jennie'; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let firstName = 'xue'; // undefined
let selectedColor = null; // null


// dynamic typing
age = 'Jennie'; // now age is string

// reference types(Object, Array, Function)
// object
let person = {
    name: 'jennie',
    age: 24
}
person.name = 'Rustin'; // use dot notation to access properties
console.log(person.name);

// Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; // the length of array is dynamic
selectedColors[3] = 1; // array can hold different types of values
console.log(selectedColors.length);

// Function - performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Jennie', 'Wang');

// Function - calculating a value
function square(number) {
    return number * number;
}
console.log(square(2));














