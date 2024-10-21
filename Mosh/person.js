export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walk() {
        console.log('walk');
    }
}

const person = new Person('Jennie', 25);
const person2 = new Person('Rustin', 28);

console.log(person.name);