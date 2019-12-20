# Curso Web Moderno com JavaScript 2019! COMPLETO + Projetos

https://www.udemy.com/course/curso-web/

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

![](img\01-01-introducao.PNG)


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
    ```javascript
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
    ```javascript
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

