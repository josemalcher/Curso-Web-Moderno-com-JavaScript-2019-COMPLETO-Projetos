const notas = [5.5, 4.3 , 9.9, 10, 5.6]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Jose',
    sobrenome: 'malcher jr',
    idade: 35,
    peso: 95
}
for (let i in pessoa){
    console.log(`${i} = ${pessoa[i]} `)
}