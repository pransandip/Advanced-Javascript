const user = {
    firstname: 'sandy',
    lastname: 'roy',
    birthYear: 1994,
    job: 'computer programmer',
    friends: ['Riya', 'puja', 'Alex'],
    hasDrivingLicense: true,

    calcAge: function (birthYear) {
        return 2022 - birthYear
    }
}

console.log(user['calcAge'](1994)) // 28

// BREAK

const user2 = {
    firstname: 'sandy',
    lastname: 'roy',
    birthYear: 1995,
    job: 'computer programmer',
    friends: ['Riya', 'puja', 'Alex'],
    hasDrivingLicense: true,

    calcAge: function () {
        console.log(this)   // {firstname: 'sandy', lastname: 'roy', birthYear: 1995, job: 'computer programmer', friends: Array(3), …}
        return 2022 - this.birthYear
    }
}

console.log(user2.calcAge()) // 27

// BREAK

const user3 = {
    firstname: 'sandy',
    lastname: 'roy',
    birthYear: 1996,
    job: 'computer programmer',
    friends: ['Riya', 'puja', 'Alex'],
    hasDrivingLicense: true,

    calcAge: function () {
        this.age = 2022 - this.birthYear  // age property added to user3
        return this.age
    },

    getSummary: function () {
        return `${this.firstname} is a ${this.calcAge()} years old, ${this.job} and he has ${this.hasDrivingLicense ? 'Diving permit' : 'No Diving permit'}`
    }


}

console.log(user3.calcAge()) // 26
console.log(user3.age) // 26
console.log(user3.getSummary()) // sandy is a 26 years old, computer programmer and he has Diving permit