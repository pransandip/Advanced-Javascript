// rduce-to-value
const number_set = [10, 20, 30, 40, 50, 60]
let total = 0
for (const value of number_set) {
    total += value
}
console.log(total)


const result = number_set.reduce((sum, value) => {
    sum += value
    return sum
}, 0)
console.log(result)


const numbers = [1, 2, 3, 4, 5, 6]
const sum = numbers.reduce((a, c) => a + c)
console.log(sum)

const avg = numbers.reduce((avg, value, _, array) => avg + (value / array.length), 0)
console.log(avg)


const cart = [
    { productId: 1, poductName: 'mobile', price: 20000 },
    { productId: 2, poductName: 'laptop', price: 60000 },
    { productId: 3, poductName: 'monitor', price: 15000 },
]
const totalAmount = cart.reduce((a, c) => a + c.price, 0)
console.log(totalAmount)


const names = ['LG', 'Kiwi', 'Dior', 'BMW']
const new_string = names.reduce((str, name) => str + name, "")
console.log(new_string)

// This is not the best possible way
const new_string2 = names.reduce((str, name, index) => str + (index > 0 ? ", " : "") + name, "")
console.log(new_string2)


const O_P = names.join("-")
console.log(O_P)



// reduce-to-object
// The Object.assign() method copies all enumerable own properties from one or more
// source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);
console.log(returnedTarget === target);
console.log(target.c)
console.log(source.a)


const testArray = Object.assign({}, numbers)
console.log(testArray)


const objA = { name: 'auturo', age: 53, gender: 'male' };
const objB = { employed: 'auturo', ownMessage: "Gift", token: "tok_1M2YRhJmR8D0Lrgbamjxyh6K" };
const array = [objA, objB];

const o = { ...objA, ...objB }
console.log(o)

const merge = array.reduce((a, c) => Object.assign(a, c), {})
console.log(merge)



//reduce-to-array
const positive_number_set = [1, 2, 3, 4, 5, 6]
let arr = []
for (const number of positive_number_set) {
    // arr.push(number)
    // arr = [...arr, number]
    arr = [number, ...arr] // to reverse

}
console.log(arr)



const reverse_arr = positive_number_set.reduce((arr, number) => [...arr, number], [])
console.log(reverse_arr)

const reverse_arr2 = positive_number_set.reduceRight((arr, number) => [...arr, number], [])
console.log(reverse_arr2) // it will start from end


//what you can do with reduce is you can produce different size of array
const groups = [
    [3, 2],
    [2, 5],
    [3, 7],
];
// op:- we need [2,2,2,5,5,7,7,7]
const a_times_b = groups.reduce((arr, [count, value]) => {
    for (let index = 0; index < count; index++) {
        arr.push(value)
    }
    return arr
}, [])
console.log(a_times_b)


// predefined the length of array
const temp = Array(3)
console.log(temp)
console.log(temp.fill(2))


const array_filler = groups.reduce((arr, [count, value]) => [
    ...arr,
    ...Array(count).fill(value)
], [])

console.log(array_filler)


//reduce to object
const num_set = [12, 15, 12, 2, 6, 6, 2, 12]

const lookup = {};
for (const number of num_set) {
    lookup[number] = (lookup[number] ?? 0) + 1
}
console.log(lookup)

// BREAK
test = {}
test[1] = (test[1] ?? 0) + 1
console.log(test)


const result_ = num_set.reduce((lookup, value) => ({
    ...lookup,
    [value]: (lookup[value] ?? 0) + 1
}), {})
console.log(result_)

// BREAK
console.log(Math.min(Infinity, 4))
console.log(Math.max(Infinity, 4))
console.log(Math.max(-Infinity, 4))

const min_value = num_set.reduce(({ min, max }, value) => ({
    min: Math.min(min, value),
    max: Math.max(max, value),
}), {
    min: Infinity,
    max: -Infinity
})
console.log(min_value)


// Reduce with includes
const _numbers = [1, 2, 3, 4, 5];
const _temp = _numbers.reduce((includes, value) => (includes ? includes : value === 3), false)
console.log(_temp)