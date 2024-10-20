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

// Constructor Function
function Circle(radius){
    this.radius = radius;
    // both defaultLocation and computeOptimumLocation are local variables, not properties of the circle object
    let defaultLocation = {x: 0, y: 0}; // encapsulation
    let computeOptimumLocation = function(factor) {
        // ...
    }
    this.draw = function() {
        computeOptimumLocation(0.1); 
        // this.radius 
        console.log('draw');
    }
    
    // getter and setter
    Object.defineProperty(this,'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    }

    );
}
// {}represents the object that is going create(this keyword)
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);
// adding/removing properties
const circle2 = new Circle(2);
circle2.location = {x: 1};
const propertyName = 'center location'; // 当属性名不确定时（如参数传递时才能确定的那种情况）
circle2[propertyName] = {x: 1};
delete circle2[location]; // delete the property

// enumerating properties
for (let key in circle2) {
    if (typeof circle2[key] !== 'function')
        console.log(key, circle2[key]); // key: property name, circle2[key]: property value
}

const keys = Object.keys(circle2); // return an array of keys

if ('radius' in circle2) console.log('Circle has a radius.');

const person = {
    name: 'Jennie',
    age: 25,
    walk(){},
    talk(){}
}

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember] = 'Rustin';