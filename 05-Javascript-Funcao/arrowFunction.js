let dobro = function(a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
} 

dobro = a => 2 * a // return está inplícito 
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())

/*
6.283185307179586
Olá
*/