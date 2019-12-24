// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2,4)

// Armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,2))

// Retorno inplícito
const subtracao = (a,b) => a - b
console.log(subtracao(4,2))

const imprimir2 = a => console.log(a)
imprimir2("Teste!")

/*
    6
    4
    2
    Teste!
*/