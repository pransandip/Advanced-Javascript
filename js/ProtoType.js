const obj1 = {
    key1: 'value1',
    key2: 'value2',
};

const obj2 = {
    key3: 'value3',
    key4: 'value4',
};

/** javascript will create a link with obj3 to obj1 */
// const obj3 = Object.create({})
// const obj3 = Object.create(null)
const obj3 = Object.create(obj1)
obj3.key5 = 'value5'

console.log(obj3.key5)
console.log(obj3.key1)

console.log(obj3)
console.log(obj3.__proto__)


const userMethods = {
    about: function () {
        return `${this.name} ===> you are inside about func`;
    },
    sing: function () {
        return `toon na na na your age is ===> ${this.age}`;
    }
}

function createUser({ name, age }) {
    const user = Object.create(userMethods)
    user.name = name;
    user.age = age;
    return user;
}

const user1 = createUser({ name: 'sandy roy', age: 27 });

console.log(user1)
console.log(user1.__proto__)
console.log(user1.about())
console.log(user1.sing())


function hello() {
    console.log('Hello World')
}

console.log(hello.name)
hello.app = 'app1'
hello.version = '1.02'
console.log(hello)

console.log(hello.prototype)
hello.prototype.details = 'Prototype details'
hello.prototype.amount = 202;
console.log(hello.prototype)

delete hello.app;
console.log(hello)

delete hello.prototype.details;
console.log(hello.prototype)
console.log(hello.prototype)

/*?------  ********  --------?*/
function createPerson({ name, age }) {
    const user = Object.create(createPerson.prototype)
    user.name = name;
    user.age = age;
    return user;
}

// __proto__
createPerson.prototype.about = function () {
    return `${this.name} ===> you are inside about func`;
}
createPerson.prototype.data = 'Development'

// func reference
const person1 = createPerson({ name: 'Sandy Roy', age: 27 });
person1.app = 'prototype test'

console.log(person1)
console.log(person1.about())


