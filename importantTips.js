//1. find unique values from array
let array = [1,2,3,2,3,4,3,4,5]
let uniqueArray = [...new Set(array)]
console.log(uniqueArray)
console.log('------')

//2. int to string
let num = 32
let str1 = num + ''
console.log(str1 + ' ' + typeof str1)
console.log(str1 + 10)
console.log('------')
//or
let str2 = String(num)
console.log(str2 + ' ' + typeof str2)
console.log(str2 + 10)
console.log('------')

//3. float to int
let floatNum = 45.75
let intNum = parseInt(floatNum)
console.log(intNum + ' ' + typeof intNum)
console.log('------')

//4. string to int/float
let str3 = '45.75'
let intNum1 = parseInt(str3)
let floatNum1 = parseFloat(str3)
console.log(intNum1 + ' ' + typeof intNum1)
console.log(floatNum1 + ' ' + typeof floatNum1)
console.log('------')

//5. check if variable is a number
let value = 52
if(typeof value === 'number' && !isNaN(value))
    console.log(value + ' is a number')
console.log('------')

//6. check if Array conatains a value
let roles = ['admin', 'customer', 'vendor', 'seller']
console.log(roles.includes('admin'))
console.log('------')

//7. join array elements in a string
let words = ['admin', 'customer', 'vendor', 'seller']
console.log(words.join(' '))
console.log('------')

//8. clone an array or object using spread operator
let user = {
    name: 'Tom',
    age: 20
}
let copyUser = {...user}
console.log(copyUser)

let roles1 = ['admin', 'customer', 'vendor', 'seller']
let copyRoles1 = [...roles1]
console.log(copyRoles1)

console.log('------')

//9. convert an object to array
let employee = {
    name: 'Tom',
    age: 20
}
//a. keys array
console.log(Object.keys(employee))
//b. values array
console.log(Object.values(employee))
//c. key:value array
console.log(Object.entries(employee))

console.log('------')

//10. truncate an array
let numbers = [1,2,3,4,5,6,7,8]
console.log(numbers)
numbers.length = 3
console.log(numbers)
console.log('------')