// novo recurso do ES2015

const pessoa = {
    nome: 'José',
    idade: 35,
    endereco: {
        rua: 'Rua tal tal tal',
        numero: 33
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

const {conta:{ag, cc}} = pessoa
console.log(ad, cc)

/*
    José 35
    José 35
    undefined true
    Rua tal tal tal 33 undefined

    const {conta:{ag, cc}} = pessoa
                ^
    TypeError: Cannot destructure property `ag` of 'undefined' or 'null'.
*/