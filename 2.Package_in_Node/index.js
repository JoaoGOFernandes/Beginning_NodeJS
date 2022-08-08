//INICIALIZANDO UM PACOTE
//Quando criamos um projeto em node usamos: npm init
//Para não responder as perguntas pode-se usar: npm init -y
//Se clonou o node_modules nao veio junto entao tem que dar: npm install


//ATENÇÃO EM UM .JSON
//Cuidado com a virgula em um .json, não é igual js que um array pode terminar com virgula
//Caso modifique o package.js atualizar o node com: npm update
//package-lock.json não se meche faz a manutenção dos modulos

//INSTALAÇÃO DE MODULOS DE TERCEIROS
//EX: cfonts - instala usando npm i cfonts ou npm install cfonts
//Vem com um package-lock.json - mapea os modulos que esta sendo usado, importante nao deletar, pq faz ficar mais rapido
//Vem com um node_modules - Registra os modulos instalados e dependecia desses modulos, pode ser deletada e voltar com: npm install


//MECHENDO NO PACKAGE.JSON
console.log("Rodando via script");  
//Substituindo o test do package.json por start podemos rodar como: npm run start ou npm start


//INSTALAÇÃO GLOBAL
//Basta usar o argumento -g. EX: npm cfonts -g
//Para saber o local da dependencia usa-se: npm root -g
//Para desistalar usa-se: npm unistall cfonts -g

//GERENCIAMENTO DE VERSÃO DAS DEPENDENCIAS
//instalando uma versão especifica: npm i moment@1.5.1 (tem q instalar o moment antes)
//Isso refere-se basicamente ao instalador "npm i" e o "nome da dependencia @ versão da dependencia" 
//Para gerencia(ver) as atualizações disponiveis basta usar: npm outdated
//Para atualizar de falto usa-se: npm upgrade
//Para usar a ultima versão usa-se: npm i moment@latest
//Isso refere-se basicamente ao instalador "npm i" e o "nome da dependencia @ latest"

//REMOVENDO UM PACOTE
//Desinstalando usa-se: npm unistall moment
//Isso refere-se basicamente ao desistalador "npm unistall" e o "nome da dependencia" 
