//callback function
//async call/task -> once this task is completed, only then callback function is called

//1. basic callback example
function greet(name, callback) {
    //normal sync function or task or step, but could also be an async api call
    console.log('Hello, ' + name)
    callback()
}

//callback function
function welcome() {
    console.log('Welcome!')
}

greet('Saad', welcome)

//2. async callback example 1
function printInfo(name, callback) {
    //async function or task or step
    setTimeout(function() {
        console.log('Printing info for ' + name)
        callback('Done')
    }, 5000)
}

//callback function
function displayMessage(message) {
    console.log(message)
}

printInfo('Saad', displayMessage)

//3. async callback example 2
function fetchUserData(userID, callback) {
    //async function or task or step
    setTimeout(function() {
        let users = {
            1: {id: 1, name: 'Saad'},
            2: {id: 2, name: 'Tom'}
        }
        let user = users[userID]
        if(user)
            callback(null, user)
        else
            callback('User not found!', null)
    }, 5000)
}

//callback function
function handleUserData(error, user) {
    if(error)
        console.error('Error: ', error)
    else
        console.log('User: ', user)
}

fetchUserData(1, handleUserData)
fetchUserData(2, handleUserData)
fetchUserData(3, handleUserData)