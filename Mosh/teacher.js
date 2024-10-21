export default class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    teach(){
        console.log('teach');
    }
}

export class Student extends Person {}