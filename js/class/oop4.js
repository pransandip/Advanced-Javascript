const userMethods = {
  about: function () {
    return `${this.name} ===> you are inside about function`;
  },
  sing: function () {
    return `toon na na na your age is ===> ${this.age}`;
  },
};

function createUser({ name, age }) {
  const user = Object.create(userMethods);
  user.name = name;
  user.age = age;
  return user;
}

const user = createUser({ name: "sandy roy", age: 27 });

console.log(user);
console.log(user.__proto__);
console.log(user.about());
console.log(user.sing());

/*---------prototype-----------*/

function hello() {
  console.log("Hello World");
}

console.log(hello.name);
hello.app = "app1";
hello.version = "1.02";
console.log(hello);

/** when we create a function gives us free space
 * and that free space is a Object {}, called prototype
 * prototype is only provided by function
 */

console.log(hello.prototype);
hello.prototype.details = "Sandip Roy";
hello.prototype.amount = 202;
console.log(hello.prototype);
console.log(hello.prototype.details);

console.log(hello);
console.log(hello.prototype);

delete hello.app;
console.log({ hello });
delete hello.prototype.amount;
console.log(hello.prototype);
