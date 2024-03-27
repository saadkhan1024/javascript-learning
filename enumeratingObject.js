//enumerating the properties of an object or getting the properties of an object

const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

//1. for-in loop
for(let key in circle)
    console.log(key, circle[key])
console.log('------')

//2. for-of loop
for(let key of Object.keys(circle))
    console.log(key)
console.log('------')

for(let entry of Object.entries(circle))
    console.log(entry)
console.log('------')

//3. in operator
if('radius' in circle)
    console.log('Yes')

if('draw' in circle)
    console.log('Yes')