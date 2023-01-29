/** new keyword, new keyword creates empty Object this = {}
 *  then we added key value to that object,then return this = {}
 *  if we define prototype it create a __proto__ link automatically
 *  __proto__ will take us to prototype
 *  if javascript cant find any element in normal object it will go to prototype
 **/

// constructor function: Its constructing object for us.
// Its a convention for constructor functions to Start with Cap letter
// So that Developer will know that we have to call with new Keyword

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const male = new Person("Sandy Ry", 27);
const female = new Person("Kaju katli", 27);
console.log(male);
console.log(female);

// new keyword
// 1.) creates empty object {} called (this)
// 2.) return this
// 3.) automatically create __proto__ link to prototype if define any

// constructor function
function CreateUser({ name, age }) {
  this.name = name;
  this.age = age;
}
CreateUser.prototype.about = function () {
  return this.name;
};

const user = new CreateUser({ name: "Deep Ry", age: 27 });
user.year = 2022;
console.log(user);
console.log(user.about());
console.log(CreateUser.prototype.about());

// its bringing the keys from prototype functions
for (let key in user) {
  console.log(key);
}

console.log(Object.keys(user));

for (let key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(key);
  }
}
