var keys = ['foo', 'bar', 'qux']
var values = ['1', '2', '3']
// console.log({ ...keys }) // {0: 'foo', 1: 'bar', 2: 'qux'}


// BREAK
const result = keys.reduce(
    (obj, k, i) => (
        { ...obj, [k]: values[i] }
    ), {})
console.log({ result }) // {result: {…}}



// BREAK
// simplified: I like the idea of using reduce, but you don't 
// need to re-create the outer object every iteration.
const outcome = keys.reduce((acc, k, i) => (acc[k] = values[i], acc), {})
console.log({ outcome })  // {outcome: {…}}



// BREAK
const user = ['foo', 'bar', 'qux']
const age = ['one', 'two', 'three']

const res = user.reduce((accumulator, currentValue, index) => (accumulator[currentValue] = age[index], accumulator), {})
console.log(res)



// BREAK
let numbers = [1, 2, 3]
let names = ["John", "Mike", "Colin"]

let a = Object.assign({}, ...numbers.map((n, index) => ({ [n]: names[index] })))

console.log(a);