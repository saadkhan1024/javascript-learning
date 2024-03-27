//ES6 Template Literals using Back Tick characters ``

let receiver = 'Tom'
let sender = 'Saad'
let product = function() {
    return 'Book'
}

const mailBody = `Hello ${receiver},
This is ${sender} here.
Thanks for adding me in the 'mailing' list.
Your item is ${product()} and price is ${2 + 6}.

Regards,
${sender}`

console.log(mailBody)