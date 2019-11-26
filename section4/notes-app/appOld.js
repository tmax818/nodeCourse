const validator = require('validator')
const chalk = require('chalk')

const getNotes = require('./notes.js')


const msg = getNotes()
console.log(msg)

// validator test

console.log(validator.isEmail('tmax818@mac.com'))

// chalk test

console.log(chalk.green('success'))
console.log(chalk.red.inverse('test error'))

console.log(process.argv)
console.log(process.argv[2])



