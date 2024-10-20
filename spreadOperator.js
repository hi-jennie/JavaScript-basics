const odd = [1, 3, 5];
const even = [2, 4, 6];

// const combined = odd.concat(even); // concat() method
const combined = [...odd, ...even]; // spread operator

// we can also use spread operator to copy an array
const copy = [...combined]; // square brackets

// similarly
const first = {name: 'Jennie'};
const second = {job: 'developer'};

// not only we can combine two objects, but also add new properties to the combined object
const user = {...first, ...second, location: 'Seoul'};// curly brackets
const copyUser= {...user};