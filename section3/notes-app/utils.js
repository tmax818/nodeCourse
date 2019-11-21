
// test to see when file runs
console.log('This is from utils.js')

const name = 'Mike'

const add = function(a, b){
    return a + b
}

// each file has it's own scope
// must export

module.exports = add