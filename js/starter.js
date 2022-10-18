// statements and expressions
// Expression is a piece of code that produces value :-
console.log(3 + 4) // 7

// Statement is a bigger piece of code that is executed and which does not produce a value by it self
if (23 > 15) {
    const str = '23 is bigger'
}

// templete literls does not support statements


if (true) console.log("Hello \n\Hunuman 🚀");

if (true) console.log(`Hollo 
Rama
`);

// Type coercion :- It's happend whenever operation get value of two different type.
console.log('23' - '10' - 3) // 10
console.log('23' + '10' + 3) // 23103 :- it's a string + sign makes any number to string
console.log('23' * '11') // 253
console.log('23' / '2') // 11.5

console.log(Number('sandy')) // NaN


let n = '1' + 1
n = n - 1
console.log(n) // 10


// Truthy and Falsy values
console.log(Boolean(0))  // false
console.log(Boolean(undefined)) // false
console.log(Boolean('Laxmana')) // true
console.log(Boolean({})) // true
console.log(Boolean('')) // false

