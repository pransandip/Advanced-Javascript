// Object.fromEntries()
// The Object.fromEntries() method transforms a list of key-value pairs into an object

// NOTE Converting a Map to an Object
// With Object.fromEntries, you can convert from Map to Object
const map = new Map([['foo', 'bar'], ['baz', 42]])
const obj = Object.fromEntries(map);
console.log(obj) // {foo: 'bar', baz: 42}

// #Description
// The Object.fromEntries() method takes a list of key-value pairs
// and returns a new object whose properties are given by those entries.
// The iterable argument is expected to be an object that implements an
// @@iterator method, that returns an iterator object, that produces a
// two element array-like object, whose first element is a value that will
// be used as a property key, and whose second element is the value to
// associate with that property key.

// NOTE Object.fromEntries() performs the reverse of Object.entries().

// Converting an Array to an Object
// With Object.fromEntries, you can convert from Array to Object:

const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
const o = Object.fromEntries(arr);
console.log(o); // { 0: "a", 1: "b", 2: "c" }


const data = { a: 10, b: 22, c: 33 };
const temp = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, value * 2])
)
console.log(temp) // {a: 20, b: 44, c: 66}
