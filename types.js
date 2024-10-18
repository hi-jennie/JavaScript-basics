// primitive type(copy by value)
let x = 10;
let y = x;
// y is still 10, x is 20
x = 20;
function increase(x) {
    x++;
}
increase(x); // x is still 20 not 21

// reference type(copy by reference)
let a = {value: 10};
let b = a;
// this will also change the value of b to 20
a.value = 20
function increaseObj(obj) {
    obj.value++;
}
increaseObj(a); // the value of a is 21 now