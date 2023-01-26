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

// not the best possible way
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


const number = [1, 2, 3, 4, 5];
const temp_ = number.reduce((includes, value) => (includes ? includes : value === 3), false)
const _temp = number.reduce((includes, value) => (includes ? includes : value === 10), false)
console.log(temp_)
console.log(_temp)


const hourAndMinutes = (minutes) => {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    return h + ':' + m;
}
console.log(hourAndMinutes(125))

console.log((125 % 60))
console.log(Math.floor(125 / 60))

const date = new Date();
console.log(`${date.getHours()}:${date.getMinutes()}`)


const people = [
    { id1: 1, name1: "Alex" },
    { id2: 2, name2: "Roger" },
    { id3: 3, name3: "puja" },
    { id4: 3, name4: "riya" },
    { id5: 3, name5: "kajol" },
    { id6: 3, name6: "dolly" },
    { id7: 3, name7: "neha" },
    { id8: 3, name8: "sima" },
    { id9: 3, name9: "sikha" },
    { id10: 3, name10: "mon" },
];
const counter = 3
const check = people.slice(0, counter)
const new_data = check.reduce((lookup, value) => lookup.add(value), new Set())
console.log(new_data)
console.log([...new_data])

const l = [
    { id: 1, name: "Alex" },
    { id: 2, name: "Roger" },
    { id: 3, name: "puja" },
    { id: 4, name: "riya" },
    { id: 5, name: "kajol" },
    { id: 6, name: "dolly" },
    { id: 7, name: "neha" },
    { id: 8, name: "sima" },
    { id: 9, name: "sikha" },
    { id: 10, name: "mon" },
]

const selected = l.map(({ id, name }) => (id == 3 && `${name}` || id))
const selected2 = l.map(({ id, name }) => (id == 3 ? `${name}` : id))
console.log(selected)
console.log(selected2)


const final = l.map(({ id, name }) => (id == 3 && `${name}` || id)).filter(item => item == 'puja')
console.log(final)

const myArr = ['abc', 'def', '532', '4ad', 'qwe', 'hf', 'fjgfj'];
const res = myArr.reduce((rows, key, index, array) => (index % array.length == 0 ? rows.push([key]) 
  : rows[rows.length-1].push(key)) && rows, []);

  console.log(res)

  const newArray = myArr.reduce((a,b, index, array) => (index % array.length == 0 ? a.push([b]) : a[a.length-1].push(b)) && a,[])
  console.log(newArray)


  console.log(Object.entries(person1))
console.log(Object.values(person1))


const rows = ['row1', 'row2', 'row3', 'row4', 'row5']
const result_ = rows.reduce((a, b, index) => [new Array(index).fill()], [])
console.log(result_)



const array_3 = ['abc', 'def', '532', '4ad', 'qwe', 'hf', 'fjgfj'];
const COL = 3;
const matrix = array_3.reduce((matrix, item, index) => {
    if (index % COL === 0) {
        matrix.push([]);
    }
    matrix[matrix.length - 1].push(item);
    return matrix;
}, [])
console.log(matrix);

var arr2D = new Array(1).fill(new Array(3).fill(2))
console.log(arr2D)


const arr_j = [] 
arr_j.push([])
arr_j
console.log(arr_j.length)
console.log(arr_j[arr_j.length-1])
console.log(arr_j.length-1)
arr_j[arr_j.length-1].push('b')
arr_j
arr_j.push([])
arr_j
console.log(arr_j.length)
console.log(6%3)