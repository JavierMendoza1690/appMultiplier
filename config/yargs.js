const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { number } = require('yargs');
const argv = yargs(hideBin(process.argv))
    .options('b',{
    alias: 'base',
    type: 'number',
    describe: 'multiplication base',
    demandOption: true,
    })
    .options('l',{
    alias: 'listar',
    type: 'boolean',
    describe: 'muestra o no la multiplicacion en pantalla',
    demandOption: false,
    default: false,

    })
    .options('h',{
        alias: 'hasta',
        type: 'number',
        describe: 'indica hasta que numero se multiplica la base',
        demandOption: false,
        default: 10
    })
    .check((argv, options) => {
    if(isNaN(argv.b)){
        throw('La base tiene que ser un numero')
    }
    return true;
    }).argv


module.exports = argv