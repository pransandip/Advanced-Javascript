const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key3: "value3",
  key4: "value4",
};

// javascript will create a link with obj3 to obj1 and create empty object
// const obj3 = Object.create({})
// const obj3 = Object.create(null)
const obj3 = Object.create(obj1);
console.log(obj3);

// If object can't find value in his local scope
// then it will look for linked object
obj3.key1 = "value5";
console.log(obj3.key1);
console.log(obj3.key2);

/*---------BREAK-----------*/

// In javascript __proto__, [[Prototype]] is same thing
// but prototype is completely other
console.log(obj3);
console.log(obj3.__proto__);
console.log(obj3.__proto__.__proto__);
