const argv = require('yargs')
    .command('sum', 'Add a + b', {
        parameter1: {
            alias: 'a',
            desc: 'a is a number'
        },
        parameter2: {
            alias: 'b',
            desc: 'b is a number'
        }
    })
    .command('minus', 'Minus a - b', {
        parameter1: {
            alias: 'a',
            desc: 'a is a number'
        },
        parameter2: {
            alias: 'b',
            desc: 'b is a number'
        }
    })
    .command('product', 'Product a * b', {
        parameter1: {
            alias: 'a',
            desc: 'a is a number'
        },
        parameter2: {
            alias: 'b',
            desc: 'b is a number'
        }
    })
    .command('divide', 'Divide a / b ^ b <> 0', {
        parameter1: {
            alias: 'a',
            desc: 'a is a number'
        },
        parameter2: {
            alias: 'b',
            desc: 'b is a number'
        }
    })
    .command('hypo', 'Hypotenuse c = √(a*a + b*b)', {
        parameter1: {
            alias: 'a',
            desc: 'a is a number'
        },
        parameter2: {
            alias: 'b',
            desc: 'b is a number'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}