const valores = [7.7, 8.8, 6.3, 2.3]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, 'teste')
console.log(valores)

valores.pop(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

/* 
7.7 2.3
undefined
[ 7.7, 8.8, 6.3, 2.3, 10 ]
5
[
  7.7,     8.8,
  6.3,     2.3,
  10,      { id: 3 },
  false,   null,
  'teste'
]
[ <1 empty item>, 8.8, 6.3, 2.3, 10, { id: 3 }, false ]
object
*/