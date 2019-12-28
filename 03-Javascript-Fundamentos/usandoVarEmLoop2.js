const funcs = []

for (var i = 0 ; i < 5 ; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[1]()
funcs[4]()

console.log('---------')

const funcsLet = []

for (let j = 0 ; j < 5 ; j++){
    funcsLet.push(function(){
        console.log(j)
    })
}

funcsLet[1]()
funcsLet[3]()
/*
5
5
---------
1
3
*/