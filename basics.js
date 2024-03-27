let person = 'Saad'
let age = 31
console.log(person)
console.log(age)

const range = 4
//range = 5
console.log(range)

//primitive data types
let str = 'Hello'
let num = 20
let flag = true
let price
let model = null
let make = undefined
price = 100
model = 2019
make = 'Sedan'

//dynamic typing
let x = 'Saad'
x = 50

//reference data types
//1. objects
let user = {
    name: 'Tom',
    age: 25
}
console.log(user)

//access - 1. dot notation
user.name = 'Jerry'
console.log(user.name)
console.log(user)

//access - 2. bracket notation
user['name'] = 'Harry'
console.log(user.name)
console.log(user)

//2. arrays (list of objects)
let language = ['java', 'javascript']
console.log(language)
console.log(language.length)

language[2] = 'python'
console.log(language)
console.log(language.length)
console.log(language[3])

//3. functions
function getName() {
    console.log('This is getName() function')
}
getName()

function printName(name, age) {
    console.log('Hello, ' + name + ' ' + age)
}
printName('Saad', 31)
printName('Tom')
printName()

function add(num1, num2) {
    return num1 + num2
}
let sum = add(10, 20)
console.log(sum)
console.log(add(30, 40))