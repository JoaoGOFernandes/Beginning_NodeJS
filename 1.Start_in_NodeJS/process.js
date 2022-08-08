console.log(process);  //É um objeto que tras varias informações do processo que esta rodando no momento
console.log(process.argv);  //Argv é um array que tras a lista de argumentos que esta rodando no node

const firstName = process.argv[2] //Passando o nome na execução do programa ele sera pego na 3ª posição do argumento
const lastName = process.argv[3]  //O sobrenome sera pego na 4ª possição

console.log(`Seu nome é ${firstName} ${lastName}`);

const path = require('path');
const filename = path.basename(__filename);

console.log(`Você está rodando o arquivo ${filename} que permite visualizar o processo rodando no node`);
//Para rodar escreve no terminal: node process.js Joao Gabriel ou node process Joao Gabriel, pq o node já entende o que está sendo passado