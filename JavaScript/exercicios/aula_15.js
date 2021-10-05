 
// (20) 1 –  Crie uma variável e atribua um valor numérico que seja decimal. Demonstre como podemos saber que esse valor é do tipo decimal. Obs: leia com atenção. 
 
var numDecimal = 8.5

console.log(Number.isInteger(numDecimal))



// (30) 2 – Siga passo a passo:
// a) Crie duas variáveis do tipo Number: uma com número inteiro (var numeroInteiro) e outra com número decimal de 5 casas após a vírgula (var numeroDecimal).
// Exemplo (NÃO UTILIZAR ESSES EXEMPLOS): 
// numeroInteiro: 2     
// numeroDecimal: 3,65432 

var numeroInteiro = 52
var numeroDecimal = 52.54545



// b) Utilizando um dos métodos de Number, faça a variável numeroDecimal retornar com apenas 2 casas decimais.

console.log(numeroDecimal.toFixed(2))


// c) Armazene o texto a seguir, da forma como está estruturado, numa variável do tipo string, concatenando as variáveis numéricas criadas acima exatamente no espaço sublinhado:
// “O valor __(numeroInteiro)__ é inteiro porque não tem casas decimais,
// porém,
// caso tivesse as casas decimais poderia ser chamado de float, 
// como o seguinte exemplo __(numeroDecimal)__”

var frase = "O valor " + numeroInteiro + " é inteiro porque não tem casas decimais,porém,caso tivesse as casas decimais poderia ser chamado de float, como o seguinte exemplo " + numeroDecimal 

console.log(frase) 

// (20) 3 – Observando o exercício 2:
// a) Crie uma variável que recebe 4 dígitos da variável numeroDecimal.

var numDecimal1 = numeroDecimal.toFixed(4)

console.log(numDecimal1)

// b) Transforme a nova variável criada em tipo String

numDecimal1 = numDecimal1.toString()


console.log(typeof(numDecimal1))


// c) Verifique o tipo da nova variável criada.

// (20) 4 – Ainda observando o exercício 2, arredonde a variável numeroDecimal, de maneira que ela fique com apenas 2 dígitos no total.  Obs: leia com atenção.

console.log(numeroDecimal.toPrecision(2))



// (10) 5 – 
// a) Explique com suas palavras o que entendeu sobre o tipo Boolean. 
// b) Crie duas variáveis do tipo boolean e atribua um valor verdadeiro e outro falso.
 

var boll1 = false
var boll2 = true
 
console.log(typeof(boll1))
console.log(typeof(boll2))
