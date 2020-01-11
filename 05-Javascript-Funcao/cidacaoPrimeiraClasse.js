// FUnção em JS é FIrst-Class Object (citizens)
// Higher-order function

//cria de forma literal
function fun1(){

}

//armazer em uma forma variável
const fun2 = function(){

}

//armazenar em um Array
const array = [function(a,b){return a+ b}, fun1, fun2]
console.log(array[0](2,3)) // 5

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar()) // Opa

// Passar função como param
function run(fun){
    fun()
}
run(function(){console.log('Executando...')}) //Executando...

// Uma função pode retornar//conter uma função

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4) // 9
const cincomais = soma(2,3)
cincomais(4) // 9