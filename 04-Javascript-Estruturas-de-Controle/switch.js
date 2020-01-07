const impriResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovrado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida!!!')
            break
    }
}

impriResultado(10)
impriResultado(7)
impriResultado(5)
impriResultado(2)
impriResultado(0)
/*
    Quadro de Honra
    Aprovrado
    Recuperação
    Reprovado
    Nota Inválida!!!
*/