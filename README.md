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

![mapa](img\01-01-introducao.PNG)

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

- 044 Operadores Aritmeticos

- 045 Operadores Relacionais

- 046 Operadores Logicos

- 047 Operadores Unarios

- 048 Operadores Ternario

- 049 Contexto de Execução Browser vs Node

- 050 Tratamento de Erro (TryCatchThrow)

[Voltar ao Índice](#indice)

---


## <a name="parte4"> Javascript: Estruturas de Controle - 11 aulas</a>



[Voltar ao Índice](#indice)

---


## <a name="parte5"> Javascript: Função - 24 aulas</a>



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

