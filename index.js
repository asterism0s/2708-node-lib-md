import fs from 'fs';
import chalk from 'chalk';


function getFile (filePath) {
     const encoding = 'UTF-8';
     fs.readFile(filePath, encoding, (_, text) => {
          console.log (chalk.green(text));
     })
}

getFile ('./arquivos/texto.md');