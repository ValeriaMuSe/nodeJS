const fs = require('fs');
const path = require('path');

function copyFile() {
  const archivoOriginal = path.join(__dirname, 'files', 'original.txt');
  const archivoCopia = path.join(__dirname, 'files', 'copy.txt');

  fs.readFile(archivoOriginal, 'utf8', (err, data) => {
    if (err) {
      console.log('Error al escribir en el archivo de copia:', err);
      throw err;
    }

    fs.writeFile(archivoCopia, data, (err) => {
      if (err) {
        console.log('Error al escribir en el archivo de copia:', err);
        throw err;
      }
      console.log(`Copia exitosa! Contenido copiado: ${data}`);
    });
  });
}

module.exports = {
  copyFile: copyFile
};
