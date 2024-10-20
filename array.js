// filter() method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter(function(number) {
    return number % 2 === 0; // return even numbers
});
// we can use arrow function to simplify the code.
const evenNumbers = numbers.filter(number => number % 2 === 0); // arrow function


// map() method
const items = evenNumbers.map(n => '<li>' + n + '</li>'); // map numbers yo strings

const html = '<ul>' + items.join('') + '</ul>'; // join() method concatenates all elements of an array into a string.
console.log(html);

const items2 = numbers
    .filter(n => n % 2 === 0)
    .map(n => ({value: n}))// if we want to return an object, we need to use parentheses to wrap the object.
    .filter(obj => obj.value > 2)
    .map(obj => obj.value) // map objects to numbers;
console.log(items2);

// reduce() method

let s = 0;
for(let i of numbers) {
    s += i;
}

// reduce will loop through the array and the currentValue is the current element of the array.
// the second argument is the initial value of accumulator.
// if we don't pass the second argument, the initial value of accumulator will be the first element of the array.
const sum = numbers.reduce((accumulator, currentValue) => 
    {return accumulator + currentValue}, 0); // 0 is the initial value of accumulator
