class Car {
    constructor(name, price, model, color) {
        this.name = name
        this.price = price
        this.model = model
        this.color = color
    }

    refuel() {
        console.log(this.name + ' car is refueled')
        console.log('---------')
    }
}

const c1 = new Car('bmw', 100, '520d', 'black')
console.log(c1.name)
console.log(c1.price)
console.log(c1.model)
console.log(c1.color)
c1.refuel()

const c2 = new Car('honda', 60, 'civic', 'white')
console.log(c2.name)
console.log(c2.price)
console.log(c2.model)
console.log(c2.color)
c2.refuel()

class Vehicle {
    brand = 'vehicle'
    static wheels  = 4
    constructor(name, model, price) {
        this.name = name
        this.model = model
        this.price = price
    }
    start() {
        console.log('vehicle start')
    }
    drive() {
        console.log(this.name + ' is driving')
    }
    static stop() {
        console.log('vehicle stop')
    }
}
let v1 = new Vehicle('honda', 2024, 50)
console.log(v1.name, v1.model, v1.price, Vehicle.wheels)

v1.drive()
//v1.stop() //error
//Vehicle.drive() // error
Vehicle.stop()

class Truck extends Vehicle {
    brand = 'truck'
    start() {
        console.log('truck start')
    }
}

let obj = new Vehicle()
obj.start()
console.log(obj.brand)

//Object prototype
let Work = function(locality) {
    this.locality = locality
}

Work.prototype.city = 'lucknow'

let w1 = new Work('gn')
console.log(w1.locality)
console.log(w1.city)
console.log(Work.prototype)