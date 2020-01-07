function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até A próxima!')

/*
    Opção escolhida foi 9.
    Opção escolhida foi 5.
    Opção escolhida foi -1.
    Até A próxima!
*/