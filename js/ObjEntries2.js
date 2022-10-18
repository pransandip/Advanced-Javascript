console.log(['Z', 'a', 'z', 'ä'].sort())
console.log(['Z', 'B', 'a', 'z', 'ä'].sort((a, b) => a.localeCompare(b)))

const object1 = {
    b: 'sis',
    a: 'bro',
    d: 'dogy',
    k: 'kick',
    c: 'chow'
};

console.log(Object.entries(object1).sort((a, b) => a[0].localeCompare(b[0]))) // 1st item sorted of every arary ['a', 'bro'] ['b', 'sis'] ['c', 'chow']
console.log(Object.entries(object1).sort((a, b) => a[1].localeCompare(b[1]))) // 2nd item sorted of every arary ['a', 'bro'] ['c', 'chow'] ['d', 'dogy']

// BREAK

// -1 (Negative) when the referenceStr occurs before compareString
//  0 if the two strings are equal
//  1 (Positive) when the referenceStr occurs after compareString

// -1 if sorted before
// 1 if sorted after
// 0 if equal

// localeCompare(compareString, locales, options)
// The 'locales' and 'options' parameters customize the behavior of the function and let applications specify the language whose formatting conventions should be used.

const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

console.log(a.localeCompare(b)); // 1 positive

console.log(a.localeCompare(b, 'en')); // 1 positive

console.log(a.localeCompare(b, 'en', { sensitivity: 'base' })); // 0 equal

console.log('=======*******=======')

console.log('a'.localeCompare('c')) // -1

console.log('check'.localeCompare('against')) // 1

console.log('a'.localeCompare('a')) // 0

console.log('=======*******=======')

// BREAK

// Sort an array
// localeCompare() enables case-insensitive sorting for an array.

const items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];

const normSort = items.slice(0).sort()
console.log(normSort) // ['Adieu', 'Cliché', 'Premier', 'café', 'communiqué', 'réservé'] ==> normal sorting

console.log(items)    // ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu']

const caseInsensitiveSort = items.slice(0).sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }))
console.log(caseInsensitiveSort) // ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']



console.log('=======*******=======')

// by default, "2" > "10"
console.log("2".localeCompare("10")); // 1

// numeric using options:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// numeric using locales tag:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1