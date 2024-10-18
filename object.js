// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
// {}represents the object that is going create(this keyword)
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const circle2 = new Circle(2);


// built-in constructors
// new Function() 的作用就是动态定义了一个构造函数（即 Circle3），
// 描述了当你执行 new Circle3() 时会发生的行为。
const Circle3 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`);

const circle4 = new Circle3(3);
