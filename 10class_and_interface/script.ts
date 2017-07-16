interface Human {
    firstName: string;
    lastName: string;
    name?: Function;
    isLate?(time: Date): Function;
}

class Person implements Human {
    constructor(public firstName: string, public lastName: string) {
    }
    public name() {
        return `${this.firstName} ${this.lastName}`;
    }
    protected whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}

class Student extends Person {
    course: string;
    constructor(firstName: string, lastName: string, course: string) {
        super(firstName, lastName);
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
}

let asim = new Student("Asim", "Hussain", "typescript");
console.log(asim.whoAreYou());