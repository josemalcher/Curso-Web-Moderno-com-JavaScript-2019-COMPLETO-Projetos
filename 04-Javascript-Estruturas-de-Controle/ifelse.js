const imprimirResultado = function (nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
imprimirResultado(5)
imprimirResultado(7)
imprimirResultado(3)
imprimirResultado('FAIL!') // atenção!
/*
Reprovado
Aprovado
Reprovado
Reprovado
*/