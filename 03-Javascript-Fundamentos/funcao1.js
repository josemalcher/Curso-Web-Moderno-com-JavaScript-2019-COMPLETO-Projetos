//função sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}
imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(12, 3, 4,5 ,6, 7,8 ,4 )
imprimirSoma()

/*
    5
    NaN
    15
    NaN
*/

// função com retorno
function soma(a,b = 0){
    return a + b
}
console.log(soma(2))
console.log(soma(2, 5))
/*
    2
    7
*/