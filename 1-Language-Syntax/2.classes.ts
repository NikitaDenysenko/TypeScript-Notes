//simple class
abstract class Car {
  constructor (
    private readonly name: string,
    public label: string,
    protected size: string
  ) {}

  startEngine (this: Car): void {
    console.log('Starting engine of ' + this.name)
  }

  abstract describe (): void
}

class SportCar extends Car {
  static releaseYear: number = 1990
  constructor (name: string) {
    super(name, 'Sport', 'S')
  }

  describe () {
    console.log(`A ${this.label} Car`)
  }

  get getSportCarLabel () {
    return this.label
  }

  set setSportCarLabel (value: string) {
    this.label = value
  }

  static createCar (name: string) {
    return { name }
  }
}

const testCar = new Car('BMW', 'Fast', 'M')
const sportCar = new SportCar('Mustang')
testCar.label = 'Truck'
sportCar.setSportCarLabel = 'SuperSport'
console.log(SportCar.releaseYear)
