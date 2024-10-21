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

// this keyword
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); 
        },this);
    }
};
// if we don't pass the second argument to forEach, this.title will refer to the global object, which is undefined in strict mode.

// 	1.	forEach 回调中的 this 默认不会继承外层作用域的 this，需要显式指定。
// 	2.	forEach 的第二个参数 可以传递一个值作为回调函数的 this，确保 this 在回调中指向我们想要的对象。
//	3.	如果不使用第二个参数，还有其他解决方案，比如箭头函数（箭头函数不会改变 this 的指向）。

// this key word
const person = {
    talk(){
        var self = this;
        setTimeout(function(){
            // console.log('this', this); // here this refers to Window object
            console.log('self', self); // if we don't want to use the default this, we can use self to refer to the person object
        }, 1000);
    }
}

// arrow function don't rebind this keyword 
const person2 = {
    talk(){
        setTimeout(() => {
            console.log('this', this); // here this refers to person object
        }, 1000);
    }
}






