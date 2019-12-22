const prod1 = {}
prod1.nome  = 'celular Ultra mega'
prod1.preco = 3344.88
prod1['Desconto Legal']  =  0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 90.99
}
console.log(prod2)

/* 
{ nome: 'celular Ultra mega', preco: 3344.88, 'Desconto Legal': 0.4 }
{ nome: 'Camisa Polo', preco: 90.99 }
*/