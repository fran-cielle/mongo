// 01: faça uma função que retorne se uma dada string contém a letra h nela
function retornaRegex(palavra){
    let regex = /h/       
    return regex.test(palavra)
}

const resultado = retornaRegex('Chocolate') 
console.log(resultado)

// 02: altere sua função para que ela aceite maiuscula e minuscula (case insensitive)
function regexCaseSensitive(palavra){
    let regex = /h/i       
    return regex.test(palavra)
}

const resultado1 = regexCaseSensitive('CHocolate') 
console.log(resultado1)

// 03: altere sua função para que ela retorne se a string
// termina com `a` ou comece com `b`
// aceitando maiuscula e minuscula tambem
function regexComeca(palavra){
    let regex = /a$|^b/      
    return regex.test(palavra)
}

const resultado2 = regexComeca('Bata') 
console.log(resultado2)

// DESAFIO: altere sua função pra verificar a string contem números
function verificarNum(palavra){
    let regex = /\d/     
    return regex.test(palavra)
}
const resultado3 = verificarNum('CHocolat1e') 
console.log(resultado3)