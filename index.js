import fs from 'fs';
import chalk from 'chalk';

function controlError (error) {
     console.log(error);
     throw new Error (chalk.red(error.code, 'Missing file or directory'));
}

function extractLinks (text) {
     const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
     const captures = [...text.matchAll(regex)];
     const results = captures.map (captures => ({[captures[1]]: captures[2]}));
     return results;
}

async function getFile (filePath) {
     try {
          const encoding = 'UTF-8';
          const text = await fs.promises.readFile(filePath, encoding)
          console.log (extractLinks (text));
     } catch (error) {
          controlError(error);
     }
}

getFile ('./arquivos/texto.md');
