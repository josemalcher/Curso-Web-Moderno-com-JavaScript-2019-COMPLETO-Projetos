for (var i = 0 ; i < 5 ; i++){
    console.log(i)
}
console.log('--')
console.log(i)
/*
0
1
2
3
4
--
5
*/

for(let j = 0 ; j < 5; j++){
    console.log(j);
}
console.log(j);
/*
0
1
2
3
4

console.log(j);
            ^

ReferenceError: j is not defined
*/