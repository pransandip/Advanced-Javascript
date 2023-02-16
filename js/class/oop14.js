// * class expression
// unnamed
var Person = class {
  constructor(name, year_born) {
    this.name = name;
    this.year_born = year_born;
  }

  get age() {
    return new Date().getFullYear() - this.year_born;
  }
};

const person = new Person("sandy", 1994);
console.log(person);
console.log(person.age);

// named
var People = class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};
