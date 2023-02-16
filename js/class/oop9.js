// classes

// If we extends "Animal" class then all the properties
// and methods will be available in "Dog" class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating (Animal class)`;
  }

  isCute() {
    return this.age <= 2;
  }
}

// If constructor is not present in "Dog" class then
// it will look for "Animal" class and create a obj

// "Dog" is a (sub/derived) class and "Animal" is a (parent/base)class

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  eat() {
    return `${this.name} is eating (dog class)`;
  }

  run() {
    return `${this.name} got ${this.speed} km/hr`;
  }
}

const dog1 = new Dog("tommy", 1, 45);

// It will call dog class method, if not
// present then it check in base class.
console.log(dog1.eat());
console.log(dog1.isCute());
console.log(dog1.run());


const animal1 = new Animal('Bunny', 5)
console.log(animal1.eat())
