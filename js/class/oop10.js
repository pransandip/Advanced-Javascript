// * getters and setters
// * static = belongs to class, not to objects
// *          properties: useful for caches, fixed-configurations
// *          methods:    useful for utility functions

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static props = "static properties excess it with class name";

  static classInfo() {
    return `This is static method you can't call it with a obj reference`;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullname) {
    const [firstName, lastName] = fullname.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person = new Person("Sandip", "Roy", 25);

console.log(person.fullName);
person.fullName = "Deep Ry";
console.log(person.fullName);
console.log(Person.classInfo());
console.log(Person.props);

/*---------BREAK-----------*/

// * static methods and properties
class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }

  static startRace() {
    return "3...2...1...GO!";
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(car1);
console.log(car2);

// * if you not making static every obj will have his
// * own instance of this methods and properties
console.log(Car.numberOfCars);
console.log(Car.startRace());
