const nome = 'Jose'
const contatenacao = 'Olá ' + nome  + '!'
const template = `
    Olá
    ${nome}!`

console.log(contatenacao , template)

// expressões
console.log(` 1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Fale ${up('cuidado')}`)

/* 
Olá Jose! 
    Olá
    Jose!
 1 + 1 = 2
Fale CUIDADO
*/