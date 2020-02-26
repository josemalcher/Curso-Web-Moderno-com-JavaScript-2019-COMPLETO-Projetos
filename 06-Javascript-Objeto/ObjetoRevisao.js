// Coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)
/* 
{ nome: 'Cadeira', 'marca do produto': 'Generica', preco: 200 }
{ nome: 'Cadeira' }
*/

const carro = {
    modelo: 'A4',
    valor: 10000,
    proprietario: {
        nome:'Jose',
        idade: 35,
        endereco:{
            rua: 'Rua tal tal',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Jose Malcher Jr',
        idade: 35
    },{
        nome: 'Luciana Barbosa',
        idade: 34
    }],
    calculaValorSeguro: function(){
        // ...
    }

}
carro.proprietario.endereco.numero = 4455
carro['proprietario']['endereco']['rua'] = 'Av. GOv. jose malcher'
console.log(carro)

delete carro.condutores
delete carro.proprietario
delete carro.calculaValorSeguro
console.log(carro)
console.log(carro.condutores) // undefined
//console.log(carro.condutores.length) // erro

/* 
{
  modelo: 'A4',
  valor: 10000,
  proprietario: {
    nome: 'Jose',
    idade: 35,
    endereco: { rua: 'Av. GOv. jose malcher', numero: 4455 }
  },
  condutores: [
    { nome: 'Jose Malcher Jr', idade: 35 },
    { nome: 'Luciana Barbosa', idade: 34 }
  ],
  calculaValorSeguro: [Function: calculaValorSeguro]
}
{ modelo: 'A4', valor: 10000 }
undefined
*/