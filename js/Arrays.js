// A JavaScript array is initialized with the given elements, except in 
//the case where a single argument is passed to the Array constructor
//and that argument is a number. Note that this special case only
// applies to JavaScript arrays created with the Array constructor,
// not array literals created with the bracket syntax

const user = Array(1)
console.log(user) // [empty]

const person = Array('person1')
console.log(person) // ['person1']
console.log(person.length) // 1

// Array constructor with a single parameter Arrays can be created using
// a constructor with a single number parameter. An array with its length
// property set to that number and the array elements are empty slots.

const fruits = new Array(2);
console.log(fruits.length) // 2
console.log(`fruits`, fruits) // fruits [ <2 empty items> ]
console.log(fruits[0]);  // undefined  

//Iterating over a TypedArray
const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
    console.log(value); // 0 255
}

// The values() method returns a new array iterator object that iterates the value of each index in the array.
const animal = new Array('Lion', 'Tiger', 'cheeta')
const iterator = animal.values()
// console.log(iterator.next().value) //Lion
for (const value of iterator) {
    console.log(value);  // 'Lion', 'Tiger', 'cheeta'
}

//Iterating sparse arrays
//values() will visit empty slots as if they are undefined.
for (const element of [, "a"].values()) {
    console.log(element); // undefined // a
}

// Calling values() on non-array objects
// The values() method reads the length property of this and then accesses each integer index.

const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
};

for (const entry of Array.prototype.values.call(arrayLike)) {
    console.log(entry); // a b c
}
