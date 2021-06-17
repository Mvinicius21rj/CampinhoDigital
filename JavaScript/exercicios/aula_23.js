// Exercicio 01


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

// Exercicio 02

numero = [5, 2, 6 ,4, 88, 66, 89]

numero2 = [654,55,669,87745,22]

function array(numero){
    return [numero[0], numero[numero.length-1]]

}
console.log(array(numero2))

// Exercicio 03

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

console.log(saudacao("madrugada"))


// Exercicio 04


function numeroquadrado(numero){

    return numero **2
}

numero = numeroquadrado(5)
console.log(numero)


// Exercicio 05


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


