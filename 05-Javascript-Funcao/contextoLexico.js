const valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}
function exer(){
    const valor = 'Local'
    minhaFuncao()
}
exer() // Global