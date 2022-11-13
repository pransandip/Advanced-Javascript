/**
 * The Intl object is the namespace for the ECMAScript Internationalization API,
 *  which provides language sensitive string comparison, number formatting, and
 *  date and time formatting. The Intl object provides access to several constructors
 *  as well as functionality common to the internationalization constructors and other 
 * language sensitive functions.
 */

const formatter = Intl.NumberFormat('en', { notation: 'compact' })
let n = formatter.format(1_500)
console.log(n)

const formatter_ = Intl.NumberFormat('en', {
    notation: 'compact',
    style: 'currency',
    currency: 'INR'
})
let n_ = formatter_.format(5_50_000)
console.log(n_)


const amount = 3500;
const op_ = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "liter",
}).format(amount);

const _op = new Intl.NumberFormat("en-US", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
}).format(amount);

console.log(op_)
console.log(_op)


// The Intl.DateTimeFormat() constructor creates Intl.DateTimeFormat
// objects that enable language-sensitive date and time formatting.

const date = new Date(Date.UTC(2020, 10, 20)); // , 3, 23, 16, 738
console.log(date)


const date_ = new Date(Date.UTC(2019, 10, 26, 3, 23, 16, 738));
console.log(date_)


console.log(new Intl.DateTimeFormat('en-US').format())
console.log(new Intl.DateTimeFormat(['ind', 'id']).format());

console.log(new Intl.DateTimeFormat('en-US').format(date_))

// Specify date and time format using "style" options (i.e. full, long, medium, short)
const _date = (new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'medium' }).format());
console.log(_date)

