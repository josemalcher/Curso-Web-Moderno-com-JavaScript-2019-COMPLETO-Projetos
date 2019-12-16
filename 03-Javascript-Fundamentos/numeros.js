const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avalia1 = 9.234
const avalia2 = 5.212

const total = avalia1 * peso1 + avalia2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binário
console.log(typeof media)
console.log(typeof total)

/* 
1 2
true
true
6.55
110.1000110101111011100100000000101011101100001101
number
number 
*/