/*----Bind method creates a new function----*/

const module = {
    x: 42,
    getX: function () {
        return this.x
    }
}

const newTObj = {
  x: 66,
};

const unboundGetx = module.getX.bind(module);
// const unboundGetx = module.getX.bind(newTObj);
console.log(unboundGetx());



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

/*---------BREAK-----------*/

/**
 * * The new.target meta-property lets you detect whether a function or
 * * constructor was called using the new operator. In constructors and
 * * functions invoked using the new operator, new.target returns a reference
 * * to the constructor or function that new was called upon. In normal function
 * * calls, new.target is undefined.
 */

function Foo() {
  if (!new.target) {
    throw new TypeError("calling Foo constructor without new is invalid");
  }
}

try {
  // new Foo();
  Foo();
} catch (e) {
  console.log(e);
  // Expected output: TypeError: calling Foo constructor without new is invalid
}

/*---------BREAK-----------*/

class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

const a = new A(); // Logs "A"
const b = new B(); // Logs "B"