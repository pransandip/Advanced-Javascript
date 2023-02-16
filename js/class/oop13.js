// * Super: Its a reference to parent class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`your name: ${this.name}`);
    console.log(`your age: ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, gpa) {
    super(name, age);
    this.gpa = gpa;
  }

  hello() {
    super.hello();
    console.log(`your gpa: ${this.gpa}`);
  }
}

class Teacher extends Person {
  constructor(name, age, classSize) {
    super(name, age);
    this.classSize = classSize;
  }

  details() {
    super.hello();
    console.log(`your classSize: ${this.classSize}`);
  }
}

const student = new Student("Sandy Ry", 28, 89.5);
const teacher = new Teacher("Deep Ry", 28, 60);

console.log(student);
console.log(teacher);
student.hello();
teacher.details();
