//Exercicios 01

//Exercicios A
console.log('Exercicios 01, letra A')

var macaco = []

console.log(typeof(macaco[0]))

//Exercicios B
console.log('Exercicios 01, letra B')

var macaco = ['', true]

console.log(typeof(macaco[1]))

//Exercicios C
console.log('Exercicios 01, letra C')

var macaco = ['', true, 63]

console.log(typeof(macaco[2]))


//Exercicios D
console.log('Exercicios 01, letra D')

var macaco = ['', true, 63, 'babuino']

console.log(typeof(macaco[3]))

//Exercicios E
console.log('Exercicios 01, letra E')

var macaco = ['', true, 63, 'babuino', false]

console.log(typeof(macaco[4]))

//Exercicios F
console.log('Exercicios 01, letra F')

var macaco = ['', true, 63, 'babuino', false, 54]

console.log(typeof(macaco[5]))

//Exercicios G
console.log('Exercicios 01, letra G')

var macaco = ['', true, 63, 'babuino', false, 54, [2, 3, 5, 6]]

console.log(typeof(macaco[6]))

//Exercicios H
console.log('Exercicios 01, letra H')

var macaco = ['', true, 63, 'babuino', false, 54, [2, 3, 5, 6], {
    pequeno: "amarelo",
    grande: [5,9,3,7]
}]

console.log(typeof(macaco[7]))
console.log(typeof(macaco[7].pequeno))
console.log(typeof(macaco[7].grande))
console.log((macaco[7].pequeno))
console.log((macaco[7].grande))


//Exercicios 02


//Exercicios A
console.log('Exercicios 02, letra A')

var macaco = ['', true, 63, 'babuino', false, 54, [2, 3, 5, 6], {
    pequeno: "amarelo",
    grande: [5,9,3,7]
}]

console.log(macaco[5] % macaco[7].grande[1])


//Exercicios B
console.log('Exercicios 02, letra B')

var macaco = ['', true, 63, 'babuino', false, 54, [2, 3, 5, 6], {
    pequeno: "amarelo",
    grande: [5,9,3,7]
}]

macaco.splice(3,4,'Maria', 'João')

console.log(macaco)

//Exercicios 03
console.log('Exercicios 03')
var variavelA = '9'
var variavelB = 5
var variavelC = 9
var variavelD = 10
//Exercicios A
console.log('Exercicios 02, letra B')

console.log(variavelA == variavelB)

//Exercicios B
console.log('Exercicios 02, letra B')
console.log(variavelA != variavelC)

//Exercicios C
console.log('Exercicios 02, letra C')
console.log(variavelC === variavelB)


//Exercicios 04
console.log('Exercicios 04')
var macaco = ['', true, 63, 'babuino', false, 54, [2, 3, 5, 6], {
    pequeno: "amarelo",
    grande: [5,9,3,7]
}]

resultado = macaco[5] * macaco[7].grande[1] 

console.log(resultado)