//adding elements to an array
const num = [3, 4]
const number = [1, 2, 3, 4]

//1. push
//add elements at the end of array
num.push(5, 6)
console.log(num)

//2. pop
//remove elements at the end of array
let last = number.pop()
console.log(number)
console.log(last)

//3. unshift
//add elements at the start of array
num.unshift(1, 2)
console.log(num)

//4. shift
//remove elements at the start of array
let first = number.shift()
console.log(number)
console.log(first)

//5. splice
//add or delete elements at the middle of array
num.splice(2, 0, 'a', 'b') //add without removing elements
num.splice(2, 2, 'a', 'b') //add after  removing elements
console.log(num)

//delete elements from specified index of array
number.splice(2, 1)
console.log(number)

//delete all elements after specified index
number.splice(2)

//6. slice
//returns array elements from start index (inclusive) to end index (exclusive) // like string substring() in java
let num3 = [1, 2, 3, 4]
let slicedArr = num3.slice(1, 3)
let lastElement = num3.slice(-1)
console.log(slicedArr)
console.log(lastElement)

//7. concat
//returns concatenated array from 2 arrays
let fruit = ['apple', 'banana']
let num4 = [1, 2, 3, 4]
let concatedArr = fruit.concat(num4)
console.log(concatedArr)

//8. indexOf OR lastIndexOf
//returns first index of element in array
let color = ['red', 'green', 'red', 'yellow']
console.log(color.indexOf('red'))
console.log(color.indexOf('red', 2))
console.log(color.lastIndexOf('yellow'))

//9. includes
//returns true or false if element in present in array
let roles = ['admin', 'customer', 'vendor', 'seller']
console.log(roles.includes('admin'))
console.log(roles.includes('saad'))

//10. forEach
//iterate through all the elements in array
let n = [1, 2, 3, 4, 5, 6]
n.forEach((e) => {
    console.log(e)
})

//11. every
//returns true if all the elements pass the condition in callback function
let n1 = [1, 2, 3, 4, 5, 6]
let flag1 = n1.every((num) => num < 10)
console.log(flag1)

//12. some
//returns true if atleast 1 element pass the condition in callback function
let n2 = [1, 2, 3, 4, 5, 6]
let flag2 = n1.some((num) => num > 10)
console.log(flag2)

//array containing objects
const courses = [
    {id: 1, value: 'a'},
    {id: 2, value: 'b'}
]

console.log('------')
console.log(courses.includes({id: 1, value: 'a'})) // false

//13. find
//find the first element that satisfies the condition
console.log('------')
const c1 = courses.find(function(course) {
    return course.value === 'a'
})
console.log(c1)
console.log(c1.id)
console.log(c1.value)

//14. findIndex
//find the index of first element that satisfies the condition
console.log('------')
const c2 = courses.findIndex(function(course) {
    return course.value === 'a'
})
console.log(c2)

//15. reverse
//reverse the array
let frt = ['apple', 'banana', 'mango']
console.log(frt.reverse())

//16. sort
//sort the array
let frt2 = ['apple', 'banana', 'mango']
console.log(frt2.sort())

console.log('------')
const c3 = courses.find(course => course.value === 'a')
console.log(c3)
console.log(c3.id)
console.log(c3.value)

//emptying an array
let num2 = [1, 2, 3, 4]

//1. using blank array
num2 = []
console.log(num2)

//2. using length method
num2.length = 0
console.log(num2)

//3. using splice method
num2.splice(0)
num2.splice(0, num2.length)
console.log(num2)

//4. using pop method
while(num2.length > 0)
    num2.pop()
console.log(num2)

//1. map
//calls the callback function for each element of array and return the result as an array
let number1 = [1, 2, 3, 4]
let doubleNum = number1.map((num) => num * 2)
console.log(doubleNum)

let fahTemp = [32, 68, 86, 104, 212]
function fahToCel(fah) {
    return (fah - 32) * (5 / 9)
}
let celTemp = fahTemp.map(fahToCel)
console.log(celTemp)

console.log('-----')

//2. filter
//returns the elements of an array that satisfy the condition in the callback function
let evenNum = number1.filter((num) => num % 2 === 0)
console.log(evenNum)

let employee = [
    {eName: 'Tom', eAge: 25, eGender: 'male'},
    {eName: 'Bob', eAge: 37, eGender: 'male'},
    {eName: 'Lisa', eAge: 32, eGender: 'female'},
    {eName: 'Jenny', eAge: 28, eGender: 'female'}
]
let femaleEmpOver30 = employee.filter((emp) => {
    return emp.eGender === 'female' && emp.eAge > 30
})
console.log(femaleEmpOver30)

console.log('-----')

//3. reduce
//calls the callback function for each element of array and returns the accumulated value based on callback function operation
let sumNum = number1.reduce((sum, num) => sum + num, 0)
console.log(sumNum)

let top = [10, 5, 25, 8, 30, 15]
let maxNum = top.reduce((max, num) => {
    if(num > max)
        return num
    else
        return max
}, top[0])
console.log(maxNum)

console.log('-----')