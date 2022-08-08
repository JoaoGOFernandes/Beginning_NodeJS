const getFlagValue = require('./getFlag')

console.log(`Oie ${getFlagValue('--name')}. ${getFlagValue('--greeting')} `);

//Para rodar usamos: node greetings --name "Joao Gabriel" --greeting "Tudo bem com você?"