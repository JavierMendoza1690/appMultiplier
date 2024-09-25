const fs = require("node:fs");
let colors = require('colors')

const crearArchivo = (base, listar, hasta) => {
  let salida = "";
  let consola = '';
  let i;

  const promesa = new Promise((resolve, reject) => {
    for (i = 0; i < hasta; i++) {
      consola += `${base}` + ' * '.cyan + `${i + 1}` + ` = ` + `${base * (i + 1)}\n`.grey;
      salida += `${base} * ${i + 1}  = ${base * (i + 1)}\n`;
    }

    if (listar) {
      console.log("========================");
      console.log("       TABLA DEL".green, colors.cyan(base));
      console.log("========================");
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    const respuesta = fs.readFileSync(`./salida/tabla-${base}.txt`, "utf-8");

    respuesta ? resolve("The file has been saved!") : reject("Error");
  });

  return promesa;
};

module.exports = {
  crearArchivo: crearArchivo,
};
