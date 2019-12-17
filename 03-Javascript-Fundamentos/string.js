const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'r'))

console.log('Ana, Maria,Jose'.split(','))

/* 
r

51
3
od3r
Cod
Escola Cod3r!
Escola Cod3r!
Codrr
[ 'Ana', ' Maria', 'Jose' ]
*/