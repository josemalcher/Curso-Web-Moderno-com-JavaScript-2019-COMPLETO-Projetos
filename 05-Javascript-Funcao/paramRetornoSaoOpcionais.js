function area (largura, altura){
    const area = largura * altura
    if(area > 10){
        console.log(`valor acima do permitido ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2,1))
console.log(area(2))
console.log(area())
console.log(area(2,1,3,17,22,44))
console.log(area(5,5))
/*
    2
    NaN
    NaN
    2
    valor acima do permitido 25m2
    undefined
*/