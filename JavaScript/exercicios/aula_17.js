// (25) 1 –  Crie uma variável do tipo Object, respeitando os seguintes passos:
// a) Variável precisa iniciar vazia.
var animais = {}

    
console.log(typeof animais)

// b) Variável precisa ter 3 propriedades do tipo string e 2 do tipo boolean atribuídas de maneira dinâmica.
animais.animal = 'Gato'
animais.animal2 = 'Leão'
animais.animal3 = 'Tigre'
animais.tipo = true
animais.tipo2 = false


console.log(animais)



// c) Adicione uma última propriedade do tipo object que tenha mais 2 propriedades internas do tipo string, também atribuídas de maneira dinâmica. 
animais.cachorro = {
    cachorro1: "james",
    cachorro2: 'jubileu'

}

console.log(animais)

var chaves = Object.keys(animais)
console.log(chaves)

// d) Printe a variável na tela, de maneira que seja possível observar todas as propriedades. 




 
// (25) 2 – Crie uma outra variável do tipo object, porém, dessa vez, fazendo a declaração das propriedades entre chaves.
// a) A variável precisa ter 3 propriedades do tipo number e 2 propriedades do tipo boolean.

  
frutas = {
    abacate:1,
    mamao:2,
    banana:12,
    manga:true,
    melancia:false
}
   





// b) Adicione uma última propriedade do tipo object que seja vazio.

frutas.abacaxi = ''

console.log(frutas)

// c) Printe, unicamente, a propriedade do tipo object. 


 
// (20) 3 – Crie uma nova variável que receba a concatenação das propriedades das variáveis criadas no exercício 1 e no exercício 2:



// (10) 4 – Crie uma nova variável que receba unicamente as chaves da variável criada no exercício 3



// (10) 5 – Crie uma nova variável que receba unicamente os valores da variável criada no exercício 3. 


// (0,5) 6 – Com suas palavras, explique o que você entendeu sobre o tipo object. (APENAS O QUE VOCÊ ENTENDEU, NÃO PRECISA ABORDAR ASSUNTOS MAIS AVANÇADOS SOBRE ESSE TIPO)


// (0,5) 7- Explique como é possível inicializar uma variável sem que seja necessário fazer a atribuição de um valor específico. 


 