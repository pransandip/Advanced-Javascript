/* Dates */
let d1 = new Date()
console.log(d1)
console.log(d1.toString())
console.log(d1.toDateString())
console.log(d1.toTimeString())
console.log(d1.toLocaleTimeString())
console.log(d1.toLocaleString())
console.log(d1.toLocaleDateString())
console.log(d1.toUTCString())
console.log(d1.toISOString())
console.log(d1.toJSON())


//Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).
console.log(d1.getTimezoneOffset())


/* year-month-date:- month starts from 0*/
let d2 = new Date(2022, 0, 3, 14, 54, 36, 56)
console.log(d2)

let d3 = new Date(995252256)
console.log(d3.toJSON())

let d4 = new Date("November 13, 2022 11:13:00")
console.log(d4)

let d5 = new Date("2015-03-25")
console.log(d5)

let d6 = new Date("2015").getDate()
console.log(d6)

let d7 = new Date("08/22/2015").getDate()
console.log(d7)

let d8 = new Date("August 22 2022")
console.log(d8)

let d9 = new Date("Aug 22 2022")
console.log(d9)

let d11 = new Date(Date.UTC(""))
console.log(d11)

let d10 = new Date("1970-01-12T12:27:32.256Z")
console.log(d10.getDay())
console.log(d10)

//setters
d10.setFullYear(2022)
console.log(d10)

//difference
let start = new Date();
doSomething();
let end = new Date();

let elapsed = end.getTime() - start.getTime()
console.log(elapsed) // ms

function doSomething() {
    for (let i = 0; i < 100000; i++) {

    }
}