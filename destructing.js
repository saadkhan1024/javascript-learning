//array
let numbers = [1,2,3,4,5]
let [a, b, c, d] = numbers //destructing
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let lang = ['Java', 'JavaScript', 'Python', 'Ruby']
let [p, q, ...r] = lang //destructing
console.log(p)
console.log(q)
console.log(r)

//object
let user = {
    firstName: 'Tom',
    lastName: 'Hardy',
    age: 30
}
let {firstName, lastName, age, city = 'NY'} = user //destructing
console.log(firstName)
console.log(lastName)
console.log(age)
console.log(city)

//function without destructing
function printUserName1(person1) {
    console.log(person1.firstName + ' ' + person1.lastName)
}

let person1 = {
    firstName: 'Jack',
    lastName: 'Sparrow',
}
printUserName1(person1)

//function with destructing
function printUserName2({firstName, lastName}) { //destructing
    console.log(firstName + ' ' + lastName)
}

let person2 = {
    firstName: 'Yagami',
    lastName: 'Light',
}
printUserName2(person2)
