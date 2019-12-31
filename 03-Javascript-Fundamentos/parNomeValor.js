// par nome/valor
const saudacao = 'opa!' // contexto léxico 1

function exec(){
    const saudacao = 'Função Exec' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome valor
const cliente = {
    nome : 'José',
    idade : 35,
    pesio : 90,
    endereco : {
        rua: 'Rua tal tal ',
        numero: 376
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
/*
    opa!
    Função Exec
    {
    nome: 'José',
    idade: 35,
    pesio: 90,
    endereco: { rua: 'Rua tal tal ', numero: 376 }
    }
*/