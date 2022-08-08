//teste pta ver se aprendi a usar os comando do index
//comandos:
//process.stdout  -.write
//process.stdin   -.on('data', data => {})  //Precisa encerrar: process.exit()
//process.on      -("exit", () => {})

const perguntas = [
    "O que comeu no almoço ontem?",
    "Como está o tempo hoje?",
    "O que pretende fazer no final de semana?"
]


const quiz = (index = 0) => {
    process.stdout.write(perguntas[index]  + " > ")
};

quiz(0); 

const respostas = [];

process.stdin.on("data", data => {
    respostas.push(data.toString().trim());
    if(respostas.length < perguntas.length){
        quiz(respostas.length);
    }else{
        process.exit();
    }
})

process.on('exit',()=>{
    console.log(`
        Respostas ao que foi perguntado...

        O que comeu no almoço ontem?
        ${respostas[0]}

        Como está o tempo hoje?
        ${respostas[1]}

        O que pretende fazer no final de semana?
        ${respostas[2]}
    `);
})