import fs from 'fs';
import chalk from 'chalk';

function controlError (error) {
     console.log(error);
     throw new Error (chalk.red(error.code, 'Missing file or directory'));
}

async function getFile (filePath) {
     const encoding = 'UTF-8';
     const text = await fs.promises.readFile(filePath, encoding)
     console.log(chalk.green(text));
}

// function getFile (filePath) {
//      const encoding = 'UTF-8';
//      fs.promises
//      .readFile(filePath, encoding)
//      .then((text) => console.log(chalk.green(text)))
//      .catch(controlError);
// }


getFile ('./arquivos/texto.md');