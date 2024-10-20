const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

// clone circle object using for in loop
const copy = {};
for (let key in circle) copy[key] = circle[key];

// clone circle object using Object.assign
const copy2 = Object.assign({}, circle);
const copy3 = Object.assign({color: 'red'}, circle);

// clone circle object using spread operator
const copy4 = {...circle};

console.log(copy);
console.log(copy2);
console.log(copy3);
console.log(copy4);