class Vehicle {
  constructor(public color: string) {}

  private honk(): void {
    console.log("Vehicle Honk");
  }

  public drive(): void {
    console.log("Driving my vehicle");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  public drive(): void {
    console.log("Driving Car");
  }

  startDriving(): void {
    this.drive();
    console.log(this.color);
  }
}

const car = new Car(4, "orange");
car.startDriving();
