import fs from 'fs';
import chalk from 'chalk';

function controlError (error) {
     throw new Error (error);
}

function getFile (filePath) {
     const encoding = 'UTF-8';
     fs.readFile(filePath, encoding, (error, text) => {
          if (error) {
               controlError (error);
          }
          console.log (chalk.green(text));
     })
}

getFile ('./arquivos/texto.md');