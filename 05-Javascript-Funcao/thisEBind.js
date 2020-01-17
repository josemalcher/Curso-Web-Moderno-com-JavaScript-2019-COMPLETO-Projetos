const pessoa = {
    saudacao : 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()
/*
    Bom dia
    undefined
*/

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// Bom dia
