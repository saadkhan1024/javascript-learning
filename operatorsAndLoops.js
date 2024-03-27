let x = 10
//strict equality (type and value should match)
console.log(x === 10) //true
console.log(x === '10') //false

let y = 1
//loose equality (value should match)
console.log(y == 1) //true
console.log(y == '1') //true

//logical operator with non boolean
//falsy values (false):
//undefined
//null
//0
//false
//''
//not a number
console.log(false || 'Saad') //Saad is not a falsy value
console.log(false || undefined) //undefined
console.log(false || null) //null
console.log(true || 'Saad') //true

console.log('------')
//objects and for-in loop
const person = {
    name: 'Saad',
    age: 31
}
for(let key in person) console.log(key, person[key])

console.log('------')
//arrays and for-in loop
const colors = ['red', 'blue', 'green']
for(let key in colors) console.log(key, colors[key]) //key returns index, colors[key] returns value at index

console.log('------')
//arrays and for-of loop
//used to get values in from arrays
for(let key of colors) console.log(key)