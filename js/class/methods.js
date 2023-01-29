// methods: when you define function inside object its called method
const person = {
  name: "sandy",
  age: 28,
  about: function () {
    console.log(this);
  },
};
person.name = "droid@01";
person.about();

/*---------BREAK-----------*/

function details() {
  console.log(`INFO: ${this.name} ROLE: ${this.role}`);
}

const info1 = {
  name: "Rammy",
  role: "sys-admin",
  printDetails: details,
};
const info2 = {
  name: "Danny",
  role: "manager",
  printDetails: details,
};
const info3 = {
  name: "Jemmy",
  role: "dev",
  printDetails: details,
};

// details()
info1.printDetails();
info2.printDetails();
info3.printDetails();

// this: typeof globalThis
// if you run it on browser it will be (Window Object)
console.log(this);

/*---------BREAK-----------*/

function myFunc() {
  "use strict";
  console.log(this);
}
myFunc();

/*---------CALL BIND APPLY-----------*/

const user1 = {
  name: "Adam",
  age: 8,
  about: function (param1, param2) {
    console.log(this.name, this.age, param1, param2);
  },
};

const obj = { name: "Neo", age: 12 };

// We can bind the context of another object to function
// We can pass arguments as well

user1.about("key", "value");
user1.about.call(obj, "success", "failure");
user1.about.call(user1, "love", "hate");

const about = user1.about;
about("key", "value"); // you changing the context of the function it will print: undefined undefined undefined undefined

/*---------BREAK-----------*/

function sing(song1, song2) {
  console.log(
    `default-song: ${this.default}, song1: ${song1}, song2: ${song2}`
  );
}

const data1 = { default: "tu na" };
const data2 = { default: "Snake" };
const data3 = { default: "Company" };

sing.call(data1, "Sorry1", "Depesito1");
sing.apply(data2, ["Sorry2", "Depesito2"]);

// Bind method will return a function
const play = sing.bind(data3, "song3", "song3");
play();
