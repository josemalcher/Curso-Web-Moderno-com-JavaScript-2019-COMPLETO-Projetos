function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))

console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())

/*
44
966
819

function rand({min = 0, max = 1000}){
               ^
TypeError: Cannot destructure property `min` of 'undefined' or 'null'.
*/