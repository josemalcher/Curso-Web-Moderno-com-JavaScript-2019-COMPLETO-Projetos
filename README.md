# Curso Web Moderno com JavaScript 2019! COMPLETO + Projetos

<https://www.udemy.com/course/curso-web/>

Curso Web 13 cursos - Javascript React Vue JS Node HTML CSS jQuery Bootstrap 4 Webpack Gulp Banco de Dados e muito mais

## <a name="indice">Índice</a>

1. [Introdução - 5 aulas](#parte1)
2. [Configuração do Ambiente - 4 aulas](#parte2)
3. [Javascript: Fundamentos - 42 aulas](#parte3)
4. [Javascript: Estruturas de Controle - 11 aulas](#parte4)
5. [Javascript: Função - 24 aulas](#parte5)
6. [Javascript: Objeto - 17 aulas](#parte6)
7. [Javascript: Array - 16 aulas](#parte7)
8. [Node - 23 aulas](#parte8)
9. [ESNext - 14 aulas](#parte9)
10. [Conceitos sobre Web - 10 aulas](#parte10)
11. [HTML - 22 aulas](#parte11)
12. [CSS - 39 aulas](#parte12)
13. [Integrando HTML, CSS e JS - 23 aulas](#parte13)
14. [Ajax - 12 aulas](#parte14)
15. [Gulp - 14 aulas](#parte15)
16. [Webpack - 10 aulas](#parte16)
17. [jQuery - 18 aulas](#parte17)
18. [Bootstrap - 24 aulas](#parte18)
19. [Projeto Galeria (Bootstrap/jQuery/Webpack) - 8 aulas](#parte19)
20. [React - 8 aulas](#parte20)
21. [Projeto Calculadora - 7 aulas](#parte21)
22. [Projeto Cadastro de Usuário - 15 aulas](#parte22)
23. [VueJS - 10 aulas](#parte23)
24. [Projetos VueJS - 3 aulas](#parte24)
25. [Projeto Calculadora (Vue) - 6 aulas](#parte25)
26. [Projeto Monty Hall (Vue) - 5 aulas](#parte26)
27. [Banco Relacional - 24 aulas](#parte27)
28. [Banco Não Relacional - 16 aulas](#parte28)
29. [Express - 12 aulas](#parte29)
30. [Projeto Base de Conhecimento • Backend - 25 aulas](#parte30)
31. [Projeto Base de Conhecimento • Frontend - 31 aulas](#parte31)
32. [Conclusão - 1 aula](#parte32)

---

## <a name="parte1">Introdução - 5 aulas</a>

![mapa](https://github.com/josemalcher/Curso-Web-Moderno-com-JavaScript-2019-COMPLETO-Projetos/blob/master/img/01-01-introducao.PNG?raw=true)

[Voltar ao Índice](#indice)

---

## <a name="parte2"> Configuração do Ambiente - 4 aulas</a>

- install node
- install VS Code
- Extesão "Run"

[Voltar ao Índice](#indice)

---

## <a name="parte3"> Javascript: Fundamentos - 42 aulas</a>

- 014 O Basico de Var Let e Const 
  - 03-Javascript-Fundamentos\variaveisEConstantes.js

```js
var a = 3
let b = 4

var a = 20;
b = 40;

console.log(a, b)

a = 300
b = 500
console.log(a, b)

const c = 5
//c = 50
console.log(c)
```

- 015 Tipagem Fraca
  - 03-Javascript-Fundamentos\tipagemFraca.js

```js
    let qualquer = 'texto'
    console.log(qualquer)
    console.log(typeof qualquer)

    qualquer = 200
    console.log(qualquer)
    console.log(typeof qualquer)

    /*
    texto
    string
    200
    number
    */
```

- 016 Tipos em JavaScript Number
  - 03-Javascript-Fundamentos\numeros.js

```javascript
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
```

- 018 Usando Math
  - 03-Javascript-Fundamentos\math.js

```js
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)

/*
98.5203456165759
object
*/
```

- 019 Tipos em JavaScript String
  - 03-Javascript-Fundamentos\string.js

```js
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
```

- 020 Usando Template Strings
  - 03-Javascript-Fundamentos\templateString.js
  
```js
const nome = 'Jose'
const contatenacao = 'Olá ' + nome  + '!'
const template = `
    Olá
    ${nome}!`

console.log(contatenacao , template)

// expressões
console.log(` 1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Fale ${up('cuidado')}`)

/*
Olá Jose!
    Olá
    Jose!
1 + 1 = 2
Fale CUIDADO
*/
```

- 021 Tipos em JavaScript Boolean
  - 03-Javascript-Fundamentos\booleanos.js
  
```js
    let isAtivo = false
    console.log(isAtivo)

    isAtivo = true
    console.log(isAtivo)

    isAtivo = 1
    console.log(!!isAtivo)

    console.log('os verdadeiros... ')
    console.log(!!3)
    console.log(!!-1)
    console.log(!!' ')
    console.log(!!'TEXTO')
    console.log(!![])
    console.log(!!{})
    console.log(!!Infinity)
    console.log(!!(isAtivo = true))

    console.log('os falsos...')
    console.log(!!0)
    console.log(!!'')
    console.log(!!null)
    console.log(!!NaN)
    console.log(!!undefined)
    console.log(!!(isAtivo = false))

    console.log('finalizando...')
    console.log(!!('' || null || 0 || ' '))

    let nome = ''
    console.log(nome || 'Desconhecido')

    /*

    false
    true
    true
    os verdadeiros...
    true
    true
    true
    true
    true
    true
    true
    true
    os falsos...
    false
    false
    false
    false
    false
    false
    finalizando...
    true
    Desconhecido

    */
```

- 022 Tipos em JavaScript Array
  - 03-Javascript-Fundamentos\arrays.js

    ```js
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
    ```

- 023 Tipos em JavaScript Object
  - 03-Javascript-Fundamentos\objeto.js

```js
const prod1 = {}
prod1.nome  = 'celular Ultra mega'
prod1.preco = 3344.88
prod1['Desconto Legal']  =  0.40 // evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 90.99
}
console.log(prod2)

/*
{ nome: 'celular Ultra mega', preco: 3344.88, 'Desconto Legal': 0.4 }
{ nome: 'Camisa Polo', preco: 90.99 }
*/
```

- 024 Entendendo o Null  Undefined
  - 03-Javascript-Fundamentos\nullUnderfined.js

```js
let valor // não inicializada
console.log(valor)

valor = null
console.log(valor)
// console.log(valor.toString) // Erro!
/*
    undefined
    null
*/

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.99
console.log(produto)

produto.preco = undefined // Evitar atribuir Uniderfined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)
/*
    undefined
    {}
    { preco: 3.99 }
    false
    {}
*/

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(!!produto)
/*
    false
    true
*/
```

- 025 Quase Tudo e Função
  - 03-Javascript-Fundamentos\funcaoEmQuaseTudo.js

```js
    console.log(typeof Object)

    class Produto{}
    console.log(typeof Produto)

    /*
    function
    function
    */
```

- 026 Exemplos Basicos de Funções 01
  - 03-Javascript-Fundamentos\funcao1.js

```js
    //função sem retorno
    function imprimirSoma(a,b){
        console.log(a + b)
    }
    imprimirSoma(2,3)
    imprimirSoma(2)
    imprimirSoma(12, 3, 4,5 ,6, 7,8 ,4 )
    imprimirSoma()

    /*
        5
        NaN
        15
        NaN
    */

    // função com retorno
    function soma(a,b = 0){
        return a + b
    }
    console.log(soma(2))
    console.log(soma(2, 5))
    /*
        2
        7
    */
```

- 027 Exemplos Basicos de Funções 02
  - 03-Javascript-Fundamentos\funcao2.js

```js
// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2,4)

// Armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b
}
console.log(soma(2,2))

// Retorno inplícito
const subtracao = (a,b) => a - b
console.log(subtracao(4,2))

const imprimir2 = a => console.log(a)
imprimir2("Teste!")

/*
    6
    4
    2
    Teste!
*/
```

- 028 Declarac227o de Variaveis Com Var 01
  - 03-Javascript-Fundamentos\usandoVar.js

```js
{
    {
        {
            {
                var sera = 'Será??'
                console.log(sera)
            }
        }
    }
}
//console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //ReferenceError: local is not defined

/*
Será??
123

*/
```

- 029 Declarac227o de Variaveis Com Var 02
  - 03-Javascript-Fundamentos\usandoVar2.js

```js
var num = 11
{
    var num = 22
    console.log('dentro', num)
}
console.log('fora', num)

/*
dentro 22
fora 22
 */
```

- 030 Declarac227o de Variaveis Com Let
  - 03-Javascript-Fundamentos\usandoLet1.js

```js
//var num = 1
let num = 1
{
    let num = 22
    console.log('Dentro = ', num)
}
console.log('Fora = ', num)
/*
Dentro =  22
Fora =  1
*/
```

- 031 Usando Var em Loop 01
- 032 Usando Let em Loop 01
  - 03-Javascript-Fundamentos\usandoVarEmLoop.js

```js
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
```

- 033 Usando Var em Loop 02
- 034 Usando Let em Loop 02
  - 03-Javascript-Fundamentos\usandoVarEmLoop2.js

```js
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
```

-  
  - 03-Javascript-Fundamentos\hoisting.js
  
```js
console.log(' a = ' , a)
var a = 22
console.log(' a = ' , a)

console.log(' b = ' , b)
let b = 88
console.log(' b = ' , b)
/*
 a =  undefined
 a =  22

console.log(' b = ' , b) // error
ReferenceError: Cannot access 'b' before initialization
*/
```

- 036 Funções Vs Objeto
  - 03-Javascript-Fundamentos\objeto2.js

```js
console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)
/*
function
object
function
object
function
object
*/
```

- 037 Par NomeValor
  - 03-Javascript-Fundamentos\parNomeValor.js

```js
// par nome/valor
const saudacao = 'opa!' // contexto léxico 1

function exec(){
    const saudacao = 'Função Exec' // contexto léxico 2
    return saudacao
}

// objetos são grupos aninhados de pares nome valor
const cliente = {
    nome : 'José',
    idade : 35,
    pesio : 90,
    endereco : {
        rua: 'Rua tal tal ',
        numero: 376
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
/*
    opa!
    Função Exec
    {
    nome: 'José',
    idade: 35,
    pesio: 90,
    endereco: { rua: 'Rua tal tal ', numero: 376 }
    }
*/
```

- 038 Notação Ponto
  - 03-Javascript-Fundamentos\notacaoPonto.js

```js
console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'
// obj1['nome'] = 'Bola 2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec... Obj')
    }
}
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()

/*
    7
    Bola
    Cadeira
    Mesa
    Exec... Obj
*/
```

- 039 Operadores Atribuição
  - 03-Javascript-Fundamentos\atribuicao.js
```js
const a = 7
let b = 3

b += a // b = b + a
console.log(b)

b -= 4 // b = b - 4
console.log(b)

b *= 2 // b = b * 2
console.log(b)

b /= 2 // b = b / 2
console.log(b)

b %= 2 // b = b % a
console.log(b)
/*
    10
    6
    12
    6
    0
*/
```

- 040 Operadores Destructuring 01/4
  - 03-Javascript-Fundamentos\destructuring.js

```js
// novo recurso do ES2015

const pessoa = {
    nome: 'José',
    idade: 35,
    endereco: {
        rua: 'Rua tal tal tal',
        numero: 33
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

const {conta:{ag, cc}} = pessoa
console.log(ad, cc)

/*
    José 35
    José 35
    undefined true
    Rua tal tal tal 33 undefined

    const {conta:{ag, cc}} = pessoa
                ^
    TypeError: Cannot destructure property `ag` of 'undefined' or 'null'.
*/
```

- 041 Operadores Destructuring 02/4
  - 03-Javascript-Fundamentos\destructuring2.js

```js
    const [a] = [10]
    console.log(a)

    const [n1,n2, n3, n4 = 22] = [10,30,9,9]
    console.log(n1,n2,n3,n4)

    const [,[,nota]] = [[,8,8],[9,6,8]]
    console.log(nota)
    /*
        10
        10 30 9 9
        6
    */
```

- 042 Operadores Destructuring 03/4
  - 03-Javascript-Fundamentos\destructuring3.js
  
```js
function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))

console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())

/*
44
966
819

function rand({min = 0, max = 1000}){
               ^
TypeError: Cannot destructure property `min` of 'undefined' or 'null'.
*/
```

- 043 Operadores Destructuring 04/4
  - 03-Javascript-Fundamentos\destructuring4.js

```js
    function rand([min = 0, max =1000]){
        if(min > max) [min, max] = [max, min]
        const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }
    console.log(rand([50,40]))
    console.log(rand([992]))
    console.log(rand([,10]))
    console.log(rand([]))
    //console.log(rand()) // erro
```

- 044 Operadores Aritmeticos
  - 03-Javascript-Fundamentos\aritimetico.js

```js
    const [a,b,c,d] = [3,5,1,15]

    const soma = a + b + c + d
    const sub  = d - c  
    const mult = a * b
    const div = d / a
    const modulo = a % 2

    console.log(soma, sub, mult, div, modulo) // 24 14 15 5 1
```

- 045 Operadores Relacionais
  - 03-Javascript-Fundamentos\relacionais.js

```js
    console.log('01) ', '1' == 1) // 01)  true
    console.log('02) ', '1' === 1) // 02)  false
    console.log('03) ', '3' != 3) // 03)  false
    console.log('04) ', '3' !== 3) // 04)  true
    console.log('05) ', 3 < 2) //false
    console.log('06) ', 3 > 2) // true
    console.log('07) ', 3 <= 2) // false
    console.log('08) ', 3 >= 2) // true

    const d1 = new Date(0)
    const d2 = new Date(0)

    console.log('9) ', d1 === d2) // false
    console.log('10) ', d1 == d2) // false
    console.log('11) ', d1.getTime() === d2.getTime()) // true

    console.log('12) ', undefined == null) // true
    console.log('13) ', undefined === null) // false

```

- 046 Operadores Logicos
  - 03-Javascript-Fundamentos\logicos.js

```js
function compras(trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2
    const compraTV50 = trabalho1 && trabalho2
    //const compraTV32 =  !!(trabalho1 ^ trabalho2) // bitwise XOR
    const compraTV32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete // operador unário

    return { compraSorvete, compraTV50, compraTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/*
    {
    compraSorvete: true,
    compraTV50: true,
    compraTV32: false,
    manterSaudavel: false
    }
    {
    compraSorvete: true,
    compraTV50: false,
    compraTV32: true,
    manterSaudavel: false
    }
    {
    compraSorvete: true,
    compraTV50: false,
    compraTV32: true,
    manterSaudavel: false
    }
    {
    compraSorvete: false,
    compraTV50: false,
    compraTV32: false,
    manterSaudavel: true
    }
    */


```

- 047 Operadores Unarios
  - 03-Javascript-Fundamentos\unarios.js

```js
let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
console.log(num1 === num2)

/*
    2
    1
    true
    false
*/
```

- 048 Operadores Ternario
  - 03-Javascript-Fundamentos\ternario.js

```js
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))

/*
    Aprovado
    Reprovado
*/
```

- 049 Contexto de Execução Browser vs Node

- 050 Tratamento de Erro (TryCatchThrow)
  - 03-Javascript-Fundamentos\erro.js
```js
function tratarErrorElancar(erro){
    //throw new Error('...')
    //throw true
    //throw 10
    //throw 'Mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        tratarErrorElancar(e)
    }finally{
        console.log('Final...')
    }
}
const obj = {nome: 'José'} //erro
imprimirNomeGritando(obj)

/*
  throw {
    ^
{
  nome: 'TypeError',
  msg: "Cannot read property 'toUpperCase' of undefined",
  date: 2020-01-05T20:47:14.557Z
}
*/

```

[Voltar ao Índice](#indice)

---


## <a name="parte4"> Javascript: Estruturas de Controle - 11 aulas</a>

- 052 Usando a Estrutura IF 01/2
  - 04-Javascript-Estruturas-de-Controle\if_1.js
  
```js
    function soBoaNoticia(nota){
        if(nota >= 7){
            console.log('Aprovado com ' + nota)
        }
    }

    soBoaNoticia(8.1)
    soBoaNoticia(6.1)

    function seForVerdadeEuFalo(valor){
        if(valor){
            console.log('É verdade... ' + valor)
        }
    }

    seForVerdadeEuFalo()
    seForVerdadeEuFalo(null)
    seForVerdadeEuFalo(undefined)
    seForVerdadeEuFalo(NaN)
    seForVerdadeEuFalo('')
    seForVerdadeEuFalo(0)
    seForVerdadeEuFalo(-1)
    seForVerdadeEuFalo(' ')
    seForVerdadeEuFalo('?')
    seForVerdadeEuFalo([])
    seForVerdadeEuFalo([1,2])
    seForVerdadeEuFalo({})

    /*
        provado com 8.1
        É verdade... -1
        É verdade...  
        É verdade... ?
        É verdade... 
        É verdade... 1,2
        É verdade... [object Object]
    */
```

- 053 Usando a Estrutura IF 02/2
  - 04-Javascript-Estruturas-de-Controle\if_2.js
```js
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
```

- 054 Usando a Estrutura IFELSE
  - 04-Javascript-Estruturas-de-Controle\ifelse.js

```js
const imprimirResultado = function (nota){
    if(nota >= 7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}
imprimirResultado(5)
imprimirResultado(7)
imprimirResultado(3)
imprimirResultado('FAIL!') // atenção!
/*
Reprovado
Aprovado
Reprovado
Reprovado
*/
```

- 055 Usando a Estrutura IFELSE IF...
  - 04-Javascript-Estruturas-de-Controle\ifElse_if.js

```js
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimeResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    }else if(nota.entre(7 , 8.99)){
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if(nota.entre(0,3.99)){
        console.log('Reprovado')
    }else{
        console.log('Nota inválida')
    }
}

imprimeResultado(10)
imprimeResultado(8.9)
imprimeResultado(6.55)
imprimeResultado(3)
imprimeResultado(0)
/*
    Quadro de Honra
    Aprovado
    Recuperação
    Reprovado
    Reprovado
*/
```

- 056 Usando a Estrutura SWITCH
  - 04-Javascript-Estruturas-de-Controle\switch.js

```js
const impriResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovrado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Inválida!!!')
            break
    }
}

impriResultado(10)
impriResultado(7)
impriResultado(5)
impriResultado(2)
impriResultado(0)
/*
    Quadro de Honra
    Aprovrado
    Recuperação
    Reprovado
    Nota Inválida!!!
*/
```

- 057 Usando a Estrutura WHILE
  - 04-Javascript-Estruturas-de-Controle\while.js

```js
function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até A próxima!')

/*
    Opção escolhida foi 9.
    Opção escolhida foi 5.
    Opção escolhida foi -1.
    Até A próxima!
*/
```

- 058 Usando a Estrutura DOWHILE
  - 04-Javascript-Estruturas-de-Controle\dowhile.js

```js
function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}while(opcao != -1)

console.log('Até A próxima!')

/*
    Opção escolhida foi 7.
    Opção escolhida foi 3.
    Opção escolhida foi -1.
    Até A próxima!
*/
```

- 059 Usando a Estrutura FOR
  - 04-Javascript-Estruturas-de-Controle\for.js

```js
let contador = 1
while(contador <= 5){
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 0 ; i <= 5 ; i++){
    console.log(`i = ${i}`)
}
const notas = [5.5, 4.3 , 9.9, 10, 5.6]
for(let i = 0 ; i < notas.length ; i++){
    console.log(`notas = ${notas[i]}`)
}
/*
    contador = 1
    contador = 2
    contador = 3
    contador = 4
    contador = 5
    i = 0
    i = 1
    i = 2
    i = 3
    i = 4
    i = 5
    notas = 5.5
    notas = 4.3
    notas = 9.9
    notas = 10
    notas = 5.6
*/
```

- 060 Usando a Estrutura FORIN
  - 04-Javascript-Estruturas-de-Controle\for_in.js

```js
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
/*
    0 5.5
    1 4.3
    2 9.9
    3 10
    4 5.6
    nome = Jose
    sobrenome = malcher jr
    idade = 35
    peso = 95
*/
```

- 061 Usando Break Continue
  - 04-Javascript-Estruturas-de-Controle\breackContinue.js
  
```js
const nums = [1,2,3,4,5,6,7]

for(x in nums){
    if(x == 3){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if(y == 3){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}
exteno:
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3){
            break exteno
        }
        console.log(`Par = ${a}, ${b}`)
    }
}
/*
    0 = 1
    1 = 2
    2 = 3
    0 = 1
    1 = 2
    2 = 3
    4 = 5
    Par = 0, 0
    Par = 0, 1
    Par = 0, 2
    Par = 0, 3
    Par = 0, 4
    Par = 1, 0
    Par = 1, 1
    Par = 1, 2
    Par = 1, 3
    Par = 1, 4
    Par = 2, 0
    Par = 2, 1
    Par = 2, 2
*/
```

[Voltar ao Índice](#indice)

---

## <a name="parte5"> Javascript: Função - 24 aulas</a>

- 062 Cidadão de Primeira Linha
  - 05-Javascript-Funcao\cidacaoPrimeiraClasse.js

```js
// FUnção em JS é FIrst-Class Object (citizens)
// Higher-order function

//cria de forma literal
function fun1(){

}

//armazer em uma forma variável
const fun2 = function(){

}

//armazenar em um Array
const array = [function(a,b){return a+ b}, fun1, fun2]
console.log(array[0](2,3)) // 5

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar()) // Opa

// Passar função como param
function run(fun){
    fun()
}
run(function(){console.log('Executando...')}) //Executando...

// Uma função pode retornar//conter uma função

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(4) // 9
const cincomais = soma(2,3)
cincomais(4) // 9
```

- 063 Parametros e Retorno São Opcionais
  - 05-Javascript-Funcao\paramRetornoSaoOpcionais.js

```js
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
```

- 064 Parametros Variaveis
  - 05-Javascript-Funcao\paramvariaveis.js

```js
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a','b','c'))

/*
    0
    1
    6.6
    3.3000000000000003Teste
    0abc
*/
```

- 065 Parametro Padrão
  - 05-Javascript-Funcao\paramPadrao.js
  
```js
// estrategia 1 para gerar valor padrão
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1,2,3),soma1(0,0,0))

//  estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a,b,c,){
    a = a !== undefined ? a : 1
    b = 1 in arguments  ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// valor padrão do es2015
function soma3(a =1, b = 1, c = 1 ){
    return a + b + c 
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))


/*
    3 5 6 3
    3 5 6 0
    3 5 6 0

*/
```

- 066 this pode Variar
- 067 this e a Funcão bind 01
- 068 this e a Funcão bind 02
- 069 Funcões Arrow 01
- 070 Funcões Arrow 02
- 071 Funcões Arrow 03
- 072 Funcões Anônimas
- 073 Funcões Callback 01
- 074 Funcões Callback 02
- 075 Funcões Callback 03
- 076 Funcões Construtoras
- 077 Tipos de Declaracão
- 078 Contexto Lexico
- 079 Closures
- 080 Funcão Factory 01
- 081 Funcão Factory 02
- 082 Classe vs Funcão Factory
- 083 Desafio Funcão Construtora
- 084 IIFE
- 085 Call  Apply

[Voltar ao Índice](#indice)

---
"

## <a name="parte6"> Javascript: Objeto - 17 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte7"> Javascript: Array - 16 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte8"> Node - 23 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte9"> ESNext - 14 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte10"> Conceitos sobre Web - 10 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte11"> HTML - 22 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte12"> CSS - 39 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte13"> Integrando HTML, CSS e JS - 23 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte14"> Ajax - 12 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte15"> Gulp - 14 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte16"> Webpack - 10 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte17"> jQuery - 18 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte18"> Bootstrap - 24 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte19"> Projeto Galeria (Bootstrap/jQuery/Webpack) - 8 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte20"> React - 8 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte21"> Projeto Calculadora - 7 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte22"> Projeto Cadastro de Usuário - 15 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte23"> VueJS - 10 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte24"> Projetos VueJS - 3 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte25"> Projeto Calculadora (Vue) - 6 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte26"> Projeto Monty Hall (Vue) - 5 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte27"> Banco Relacional - 24 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte28"> Banco Não Relacional - 16 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte29"> Express - 12 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte30"> Projeto Base de Conhecimento • Backend - 25 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte31"> Projeto Base de Conhecimento • Frontend - 31 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte32"> Conclusão - 1 aula</a>



[Voltar ao Índice](#indice)

---

