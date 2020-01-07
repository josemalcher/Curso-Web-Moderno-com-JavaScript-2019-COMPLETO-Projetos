function teste1(num){
    if(num > 7)
        console.log('teste1 - ' + num)

    console.log('FINAL... de teste 1')
}

teste1(8)
teste1(4)

function teste2(num){
    if(num > 7) ; { // atenção ao ';' não usar com as estrutudas  de controle
        console.log('Teste 2 - ' + num)
    }
}
teste2(6)
teste2(9)

/*
    teste1 - 8
    FINAL... de teste 1
    FINAL... de teste 1
    Teste 2 - 6
    Teste 2 - 9
*/