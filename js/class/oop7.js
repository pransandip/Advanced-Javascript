// If you print this prototype will show array
// but by default prototype is a object

const numbers = new Array(1, 2, 3);
console.log(Array.prototype);
console.log(Object.getPrototypeOf(numbers));

// But we can change the default behavior
// we can change the array as well

function Hello(name, age) {
  this.name = name;
  this.age = age;
}
console.log(Hello.prototype);

Hello.prototype = [];
console.log(Hello.prototype);

Hello.prototype.push("item");
console.log(Hello.prototype);

const temp = new Hello("dd", 12);
console.log(temp);
