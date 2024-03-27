//clone an object to another object
const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

//1. using for-in loop [old method]
const another1 = {}
console.log(another1)

for(let key in circle)
    another1[key] = circle[key]
console.log(another1)

//2. using Object.assign method [new method]
const another2 = Object.assign({}, circle)
console.log(another2)

const another3 = Object.assign({color: 'red'}, circle)
console.log(another3)

//3. using spread ... operator
const another4 = { ...circle}
console.log(another4)