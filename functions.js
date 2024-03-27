const circle = {
    radius: 1,
    visible: true,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw')
    }
}
//console.log(circle)
//console.log(circle.radius)
//console.log(circle.visible)
//console.log(circle.location.x)
//console.log(circle.location.y)
//console.log(circle.draw)

//factory function - to create multiple objects
//naming - camel case notation: oneTwoThree
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}
const c1 = createCircle(10) //calling factory function
console.log(c1)
console.log(c1.radius)
c1.draw()

const c2 = createCircle(100) //calling factory function
console.log(c2)
console.log(c2.radius)
c2.draw()

//constructor function - to create multiple objects
//naming - pascal case notation: OneTwoThree
function ConstructorCircle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw', radius)
    }
}
const c3 = new ConstructorCircle(20) //calling constructor function
console.log(c3)
console.log(c3.radius)
c3.draw()

const square = num => num * num
console.log(square(5))

const add = (a, b) => a + b
console.log(add(5, 6))


const person = {
    firstName: 'Tom',
    lastName: 'Hardy'
}
const fullName = person => `${person.firstName} ${person.lastName}`
console.log(fullName(person))

const greet = (userName = 'Guest', age = 0) => `Hello, ${userName}! You are ${age} years old.`
console.log(greet())
console.log(greet('Tom', '20'))

//rest parameter (...)
const sumNum = (...numbers) => numbers.reduce((sum, num) => sum + num, 0)
console.log(sumNum(1, 2, 3, 4, 5))