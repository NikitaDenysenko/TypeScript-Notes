//simple class
class Car {
    private name: string;

    constructor(name: string) {
        this.name = name
    }

    startEngine(this: Car): void {
        console.log('Starting engine of ' + this.name)
    }
}

const testCar = new Car('BMW')
