/*----Bind method creates a new function----*/

const module = {
    x: 42,
    getX: function () {
        return this.x
    }
}

const unboundGetx = module.getX.bind(module)
console.log(unboundGetx())


/*---------BREAK-----------*/

const person = {
    firstName: "Sandy",
    lastName: "Roy",
    display: function () {
        return this.firstName + " " + this.lastName;
    }
}

let display = person.display.bind(person);
console.log(display())
// setTimeout(console.log(display()), 2000);


/*---------BREAK-----------*/
const user1 = {
    name: 'Alex',
    days: 65,
    details: function () {
        return (
            `Hello ${this.name} your work days: ${this.days}`
        )
    }
}

const user2 = {
    name: 'Sandy',
    days: 45,
}
const user3 = {
    name: 'Alex',
    days: 28,
}

const userInfo = user1.details.bind(user2)
const userInfo2 = user1.details.bind(user3)
console.log(userInfo())
console.log(userInfo2())


/*---------BREAK-----------*/

function log(...args) {
    console.log(this, ...args)
}

const boundLog = log.bind("sandy", 1, 2)
const boundLog2 = boundLog.bind("sandy overide", 3, 4)
boundLog2(5, 6)


/*---------BREAK-----------*/

class Base {
    constructor(...args) {
        console.log(new.target === Base);
        console.log(args);
    }
}

const BoundBase = Base.bind(null, 1, 2);

new BoundBase(3, 4);