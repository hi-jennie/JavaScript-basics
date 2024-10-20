// var: function-scoped variable
function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

// let/const: block-scoped variable
function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i); // Error: i is not defined
}




