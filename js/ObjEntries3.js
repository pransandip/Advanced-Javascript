// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj));  // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]


console.log('=======*******=======')
const obj = { a: 5, b: 7, c: 9 };

const temp = {}
Object.entries(obj).forEach(([key, value]) => {
    temp[key] = value * 2;
});
console.log(temp)  // {a: 10, b: 14, c: 18}


// Converting an Object to a Map
// The Map() constructor accepts an iterable of entries. With Object.entries, you can easily convert from Object to Map:

const info = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(info));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}