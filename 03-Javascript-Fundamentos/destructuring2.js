const [a] = [10]
console.log(a)

//const [n1,n2, n3, n4 = 22] = [10,30,9,9]
//console.log(n1,n2,n3,n4)

const [n1, , n3, , n5, n6 = 22] = [10,30,9,9]
console.log(n1,n3,n5,n6) 
// 10 9 undefined 22

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)
/*
    10
    10 30 9 9
    6
*/