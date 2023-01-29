function createPerson({ name, age }) {
  const user = Object.create(createPerson.prototype);
  user.name = name;
  user.age = age;
  return user;
}

// __proto__
createPerson.prototype.about = function () {
  return `${this.name}, ${this.age}`;
};
createPerson.prototype.data = { address: "tollygunge, kolkata-700040" };

// func reference
const person = createPerson({ name: "sandy ry", age: 27 });

console.log(person.name);
console.log(person.age);
console.log(person.about());
console.log(person.data);

console.log(person);
person.role = "dev";
console.log(person);
