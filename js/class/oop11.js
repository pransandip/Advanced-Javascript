class Car {
  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

let car = new Car(400);

console.log(car);
console.log(car.power);
