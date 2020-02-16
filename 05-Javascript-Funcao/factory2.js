 function criarProduto(nome, preco){
    return{
        nome, 
        preco,
        desconto: 0.1
    }
 }

 console.log(criarProduto('Notebook', 10000))
 console.log(criarProduto('Celular', 3000))