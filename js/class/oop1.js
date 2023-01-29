const user = {
  firstName: "Sandip",
  lastName: "Roy",
  email: "pransandip@gmail.com",
  age: 28,
  address: "Tollygunge, Golf green Kolkata-700040 WB",
  about() {
    return `name=> ${this.firstName}, age=> ${this.age}`;
  },
  is18() {
    return this.age >= 18;
  },
};

// Now if we need many objects what we will do we
// will create a function that to return object

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `name=> ${this.firstName}, age=> ${this.age}`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser("sandy", "roy", "pransandip@gmail.com", 23, "kolkata");
console.log(user1);
console.log(user1.is18());
console.log(user1.about());
