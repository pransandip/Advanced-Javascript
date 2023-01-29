class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isCute() {
    return true;
  }

  isSuperCute() {
    return this.age <= 1;
  }
}

// If extends "Animal" class then all the properties
// and methods will be available in "Dog" class
class Dog extends Animal {}

// If constructor is not present in "Dog" class then
// it will look for "Animal" class and create a obj

// "Dog" is a (sub/derived) class and "Animal" is a (parent/base)class
const pet1 = new Dog("Oscar", 1);
console.log(pet1.isSuperCute());
