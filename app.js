const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

            
console.clear();


crearArchivo(argv.b, argv.l, argv.h)
  .then(respuesta => console.log(respuesta))
  .catch(err => console.log(err))
