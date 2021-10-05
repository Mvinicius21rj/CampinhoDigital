// 1 – (30) Crie uma função e passe um parâmetro que possa ser booleano ou que possa ser 
// numérico. Caso o argumento passado for do tipo booleano, a função então retornará o 
// inverso (se for true, ela retornará false e se for false, ela retornará true). Porém, 
// caso o  parâmetro for do tipo numérico, então o retorno deverá ser número do tipo inverso 
// (se for 2, então o retorno será de -2). Se o argumento de entrada não for nenhum dos tipos acima,
//  então retorne “parâmetro inválido!”.... OBS: ARGUMENTO E PARÂMETRO SÃO A MESMA COISA.

// Exercicio 01
console.log("Exercicio 01")

function inverter(inverte){

    tipo = typeof(inverte)

    if(tipo === "boolean" ){
        return !inverte
    }else if(tipo === "number"){
        return -inverte
    }else{
        return "valor inválido"
    }
    
}

console.log(inverter(-5))


// 2 – (10) Crie uma função que receba um array por parâmetro e retorne o primeiro e
//  o último elemento desse array, porém, como um novo array:

// Exercicio 02
console.log("Exercicio 02")


numero2 = [654,55,669,87745,22]

function array(numero){
    return [numero[0], numero[numero.length-1]]

}
console.log(array(numero2))



// Exercicio 03
console.log("Exercicio 03")

function saudacao(fala){
    if(fala.toLowerCase() == "manhã"){
        return "Bom dia!"
    }else if(fala.toLowerCase() == "tarde"){
        return "Bom Tarde!"
    }else if(fala.toLowerCase() == "noite"){
        return "Bom Noite!"
    }  else if(fala.toLowerCase() == "madrugada"){
        return "Mano vai Dormir!"
    }

}

console.log(saudacao("manhã"))


// Exercicio 04
console.log("Exercicio 04")


function numeroquadrado(numero){
    numero = numero**2
    NumeroQ = numero

    

console.log(NumeroQ)
}

numeroquadrado(5)


// Exercicio 05
console.log("Exercicio 05")


function media(nota1,nota2){
    
    numero = nota1 + nota2 / 2


    if(numero < 5){
        return "Reprovado!"
    }else if (numero == 5){
        return "Recuperação!"
    }else if (numero > 5 && numero < 7){
        return "Aprovado!"
    }else if (numero > 7){
        return "Aprovado com louvor"
    }
}
console.log(media(2,5))


