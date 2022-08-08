//Node executa o js na maquina, antes só seria possivel no browser
console.log("Hello");

//No node temos as variaveis globais
global.console.log("Variavel global");  //O proprio log pertence a varaveis globais
console.log(__dirname);                 //Mostra o diretorio local, onde está o arquivo que estamos executando
console.log(__filename);                //Mostra o caminho completo, incluindo o nome do arquivo

//Uso de modulos nativos
const path = require('path')            //Require é uma maneira de chamar modulos do node, seja nativos, criados ou instalados, retorna um objeto
                                        //Path é um modulo nativo do node

console.log(path.basename(__filename)); //Basename é uma função do path que retorna o nome do arquivo, no caso o proprio arquivo em execução
console.log(path.basename("/Users/starter/docs_exemplo.js")); //Pra esse caso vai retorna o nome base do arquivo passado

//Uso de modulos nao nativos(Complemento em export.js)
const myModule = require("./export")    //Para usar um modulo criado, é passado o arquivo

console.log(myModule);


console.log(process);                 //Processos que estão rodando no node(Mais em process.js e FlagChallenge)

//Para rodar escreve no terminal: node index.js ou node index, pq o node já entende o que está sendo passado
