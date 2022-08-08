const question = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? e o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + question[index] + " > ");
}

ask(0);

const answers = []  //Array de resposta

process.stdin.on("data", data =>{                          //Evento que fica esperando um dado de entrada para executar a função interna
    //process.stdout.write(data.toString().trim() + ' > ') //Mostra o dado de entrada do evento removendo espaços vazios
    answers.push(data.toString().trim())
    if(answers.length < question.length){
        ask(answers.length)
    }else{
        process.exit()                                      //Como fica em event loop(assincrono), não encerra o programa, precisa usar exit
    }
    
})

process.on('exit', () => {       //Fica em loop ouvindo o exit do processo para disparar essa ultima callback antes de encerrar o programa
    console.log(`
        Bacana João

        O que você aprendeu foi:
        ${answers[0]}

        O que te aborreceu e voce poderia melhorar foi:
        ${answers[1]}
        
        O que te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!!

        Volte amanhã para novas reflexões
    `);
})   


//Para rodar, coloca no terminal node  index ou node index.js