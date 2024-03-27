let randomNumberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomValue = Math.random()
        if(randomValue > 0.5)
            resolve(randomValue)
        else
            reject(new Error('Value is too small'))
    }, 2000)
})

randomNumberPromise
    //promise resolve handler
    .then(result => {
        console.log('Promise is fulfilled with value: ', result)
    })
    //promise reject handler
    .catch(error => {
        console.error('Promise is rejected with error: ', error)
    })


//promise chaining
//output of promise 1 is passed as input for promise 2 and so on
function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value % 2 == 0)
                resolve(value)
            else
                reject(new Error('Value is not even number'))
        }, delay)
    })
}

getEvenNumber(4, 3000)
    .then(result => {
        console.log('1. Getting the result: ', result)
        return getEvenNumber(7, 1000)
    })
    .then(result => {
        console.log('2. Getting the result: ', result)
    })
    .catch(error => {
        console.error('Promise chain error', error)
    })

//promise.all()
//wait for all promises to complete before moving on
//returns an array containing outcome of all resolve promises

//case 1: all resolve promises
let function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from function 1')
        }, 2000)
    })
}

let function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from function 2')
        }, 2000)
    })
}

let function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from function 3')
        }, 2000)
    })
}

Promise.all([
    function1(),
    function2(),
    function3()
])
.then(results => {
    console.log('All data from functions: ', results)
})
.catch(errors => {
    console.error('Errors in promise: ', errors)
})

//case 2: 1 resolve promise, 1 reject promise
let function4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from function 4')
        }, 2000)
    })
}

let function5 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Data not available from function 5')
        }, 2000)
    })
}

Promise.all([
    function4(),
    function5()
])
.then(results => {
    console.log('All data from functions: ', results)
})
.catch(errors => {
    console.error('Errors in promise: ', errors)
})

//Promise.allSettled()
//used when we want to handle all promises, whether they are fulfilled or rejected
//returns an array containing outcome with status of individual promises

let function6 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from function 6')
        }, 2000)
    })
}

let function7 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Data not available from function 7')
        }, 2000)
    })
}

Promise.allSettled([
    function6(),
    function7()
])
.then(results => {
    results.forEach(result => {
        if(result.status == 'fulfilled')
            console.log('Promise value: ', result.value)
        else
            console.error('Reason for rejection: ', result.reason)
    })
})

//Promise.race()
//used to handle the promise which settles first

let function8 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from function 8')
        }, 500)
    })
}

let function9 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Data not available from function 9')
        }, 1000)
    })
}

Promise.race([
    function8(),
    function9()
])
.then(result => {
    console.log('Result: ', result)
})
.catch(error => {
    console.error('Error: ', error)
})

//Promise.any()
//used to handle multiple promises and resolves with the value of 1st fulfilled promise
//unlike Promise.race(), Promise.any() doesn't reject immediately as soon as a promise is rejected
//it waits until atleast 1 promise fulfills

let function10 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from function 10')
        }, 500)
    })
}

let function11 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Data not available from function 11')
        }, 200)
    })
}
let function12 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data not available from function 12')
        }, 1000)
    })
}

Promise.any([
    function10(),
    function11(),
    function12()
])
//will log the 1st fulfilled promise
.then(result => {
    console.log('Result: ', result)
})
//will log all rejection if all promises are rejected
.catch(errors => {
    console.error('All promises are rejected: ', errors)
})