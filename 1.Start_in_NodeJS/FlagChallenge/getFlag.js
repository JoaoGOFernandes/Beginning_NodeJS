function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1; //Pega a posição da flag no argv e soma mais um pra ter o valor da flag
    return process.argv[index]  //Valor da flag passada
}
module.exports = getFlagValue;