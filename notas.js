const readline = require('readline-sync')

let soma = 0

let situacao = ""

 

const nome = readline.question("Nome: ")

 

for(let c = 0; c < 4; c++){

    let nota = readline.questionFloat(`Nota ${c + 1}: `)

    while(nota < 0 || nota > 10){

        nota = readline.questionFloat("Nota invalida! Nota deve ser entre 0 e 10: ")

    }

    soma += nota

 

    // soma = soma + nota

}

 

const media = soma / 4

 

if(media >= 7){

    situacao = "Aprovado"

} else if(media >= 4){

    situacao = "Recuperação"

} else {

    situacao = "Reprovado"

}

 

console.log("---BOLETIM---")

console.log(`Nome: ${nome}`)

console.log(`Media: ${media}`)

console.log(`Situacao: ${situacao}`)