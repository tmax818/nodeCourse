const chalk = require('chalk')

// playing

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);