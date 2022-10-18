const obj = {
    a: 'something',
    b: 42
};

console.log(obj) // { a: 'something', b: 42 }
console.log(Object.entries(obj)) // 0: ['a', 'something'] 1: ['b', 42]

for (const [key, value] of Object.entries(obj)) {
    console.log(`key => ${key} | value => ${value}`) // key => a | value => something ...
}

// BREAK

const params = new URLSearchParams(Object.entries(obj))
console.log(params.toString()) // a=something&b=42

// BREAK

const user = {
    name: 'Don',
    age: 28,
    occupation: 'Web developer'
}

console.log(Object.keys(user)) // (3) ['name', 'age', 'occupation']

for (const key of Object.keys(user)) {
    console.log(`${key} => ${user[key]}`) // name => Don
}


console.log(Object.values(user)) // (3) ['Don', 28, 'Web developer']

console.log("==============================================")

for (const entry of Object.entries(user)) {
    console.log(entry)  // ['name', 'Don']
    console.log(`${entry[0]} => ${entry[1]}`) // 
}