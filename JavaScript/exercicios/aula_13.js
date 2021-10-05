
// (10) 1 –  Explique 2 características essenciais para uma variável ser considerada STRING.

// Esta entre apas e ter letras
 
// (20) 2 – Crie uma variável que tenha o texto abaixo armazenado, porém colocando variáveis criadas, que façam sentido com o valor atribuído, no lugar de cada espaço sublinhado:
//  “Ontem, meu ____ me ajudou no exercício de ____ do curso que eu faço on line” 

var frase = "Ontem, meu " + animal + " me ajudou no exercício de" + curso + " do curso que eu faço on line"
var animal = "cachorro"
var curso = "concentração"
 

console.log(frase)






// (30) 3 – Observando o exercício 2:
// a) Qual é o índice da letra ‘x’.

// b) Qual é a letra que ocupa o índice 12.

console.log(frase[12])

// c) Coloque toda a frase em letras maiúsculas

console.log(frase.toUpperCase())

// d) mostre quais letras estão ocupando do índice 8 ao 15.

console.log(frase.slice(8,15))


// (30) 4 – Armazene os resultados das letras a, b e d do exercício 3 em uma única variável, concatenando-as de maneira que fiquem separadas por um literal, que pode ser um traço ou vírgula.

var respostas = 35 + ", n " + ", eu unde " 

console.log(respostas)



// (10) 5 – Explique com suas palavras o que conseguiu entender sobre o conceito de método.
 
