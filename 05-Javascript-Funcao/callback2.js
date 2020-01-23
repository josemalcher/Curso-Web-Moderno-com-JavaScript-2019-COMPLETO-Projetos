const notas = [7.7, 8.8, 6.6, 4.4, 3.4, 9.0]

//sem callback
let notasBaixas1 = []
for (let i in notas){
    if(notas[i]< 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

/*
     [6.6, 4.4, 3.4 ]
    [ 6.6, 4.4, 3.4 ]
    [ 6.6, 4.4, 3.4 ]

*/