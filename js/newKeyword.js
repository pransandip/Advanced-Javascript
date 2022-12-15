// new keyword, new keyword creates empty Object this = {}
// then we added key value to that object,then return this = {}
// if we define prototype it create a __proto__ link automatically
// __proto__ will take us to prototype
// if javascript cant find any element in normal object it will go to prototype
function createUser({ name, age }) {
    this.name = name;
    this.age = age;
}

createUser.prototype.about = function(){
    return `${this.name} ===> ${this.age}`
}

const user1 = new createUser({ name: 'Deep Ry', age: 27 })
console.log(createUser.prototype.about())
user1.year = 2022;
console.log(user1)
console.log(user1.about())