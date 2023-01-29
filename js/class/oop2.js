/** now if we need millions of objects then we will do in this manner
 *  We do not need to copy (about) and (is18) function all the time
 *  we just need a pointer of this
 **/

const userMethods = {
  about: function () {
    return `name=> ${this.firstName}, age=> ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = createUser("sandy", "roy", "pransandip@gmail.com", 28, "kolkata");
console.log(user1.about());
