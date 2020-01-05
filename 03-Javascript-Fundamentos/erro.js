function tratarErrorElancar(erro){
    //throw new Error('...')
    //throw true
    //throw 10
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErrorElancar(e)
    }finally{
        console.log('Final...')
    }
}
const obj = {nome: 'José'} //erro
imprimirNomeGritando(obj)