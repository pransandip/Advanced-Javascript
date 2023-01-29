// Now that constructor function name will be "class name" and
// function will be "constructor" now, and all prototype func
// or objects will be methods or properties

class CreateUser {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }

  badge = {
    first: "US Navy seal",
    second: "Black oops seal",
  };

  about() {
    return this.name;
  }

  func(_) {
    console.log(_);
  }
}

const user = new CreateUser({ name: "DD", age: 150 });
console.log(user.about());

user.year = 2023;
console.log(user);

console.log(Object.getPrototypeOf(user));
user.func(12345);
