function numeropar(){
    soma = 0
for(i = 0;i <= 49; i++){
    soma = soma + 2   
    console.log(soma)
}

}
numeropar()


//2

function funcaorepetir(elemento, vezes){
    array = []
    for(var i = 0; i < vezes; i++){
        array.push(elemento)
    
    }
    return array
}

console.log(funcaorepetir('marcos',5))


3
function funcaorepetirstring(numero){
    resultado = ""
    for(var i = 0; i < numero; i ++){
        resultado = resultado + "ccc" 
    }
    return resultado
}
console.log(funcaorepetirstring(3))


4

numero = [ 2, 4, 5, 8, 9]

var funcaoreduzida = array => [array.shift(), array.pop()]

console.log(funcaoreduzida(numero))

5
conjuntos = ["amig", 2, true, 'curso']

function funcaoselecao(numero){
    arrayresultado = []
    for(i = 0; i < numero.length; i++){
    if(typeof numero[i] == 'number'){
        arrayresultado.push(numero[i])
    }
        return arrayresultado
    }
    
}
console.log(funcaoselecao())