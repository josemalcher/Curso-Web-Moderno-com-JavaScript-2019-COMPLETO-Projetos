let valor // não inicializada
console.log(valor)

valor = null
console.log(valor)
// console.log(valor.toString) // Erro!
/* 
    undefined
    null
*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.99
console.log(produto)

produto.preco = undefined // Evitar atribuir Uniderfined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)
/* 
    undefined
    {}
    { preco: 3.99 }
    false
    {}
*/

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(!!produto)
/* 
    false
    true
*/