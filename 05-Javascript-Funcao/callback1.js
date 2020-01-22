const fabricantes = ['Mercedes' , 'Audi', 'bmw']

function imprimir(nome , indice){
    console.log(`${indice + 1} . $[nome]`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))

/*
    1 . $[nome]
    2 . $[nome]
    3 . $[nome]
    Mercedes
    Audi
    bmw
*/