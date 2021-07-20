console.log('---------------Exercicio 1-----------------' )
// 1 – Crie uma função que quando for chamada seja capaz de calcular a soma de todos os números impares que houver de 15 a 80.

function calculaImpa(num1, num2){
    num1 = 15
    num2 = 80
    calc = 0

    i = num1

    do{
        resto = i % 2
        if(resto == 1){
            calc += i
            console.log(`Numero ${i} é impar somado com o proximdo o resultador é ${calc}`)
        }
        
        i++
    }while(i <= num2)
    console.log()
}

calculaImpa()


console.log('---------------Exercicio 2-----------------' )
// 2 - Crie uma função que recebe o salário de um trabalhador e calcule o reajuste segundo o seguinte critério abaixo:
// Salários até R$ 280,00 (incluindo): aumento de 35%
// Salários entre R$ 281,00 e R$ 700,00: aumento de 25%
// Salários entre R$ 701,00 e R$ 1500,00: aumento de 5%
// Salários de R$ 1501,00 em diante: aumento de 3%

// Após o aumento ser calculado, deverá ser informado: o salário antes do
// reajuste; o percentual de aumento aplicado; o valor do aumento; o novo
// salário, após o aumento. 
// Exemplo: digamos que passamos 1600 para função.
// RETORNO:
// Percentual de aumento aplicado: 10%
// Salário antes do aumento: 1600
// Valor de aumento: 160
// Novo salário após o aumento: 1760

function salarioTrabalhador(salario){

    var reajuste = 0

    if(salario <= 281){
        aumento = salario * 35 / 100
        reajuste = aumento + salario

        console.log(`Percentual de aumento aplicado 35%`)
        console.log(`Salário antes do aumento ${salario}`)

    }else if(salario <= 700){
        aumento = salario * 25 / 100
        reajuste = aumento + salario

        console.log(`Percentual de aumento aplicado 25%`)
        console.log(`Salário antes do aumento ${salario}`)

    }else if(salario <= 1500){
        aumento = salario * 5 / 100
        reajuste = aumento + salario

        console.log(`Percentual de aumento aplicado 5%`)
        console.log(`Salário antes do aumento ${salario}`)

    }else if(salario > 1500){
        aumento = salario * 3 / 100
        reajuste = aumento + salario

        console.log(`Percentual de aumento aplicado 3%`)
        console.log(`Salário antes do aumento ${salario}`)
            
    }
    console.log(`valor de aumento: ${aumento} `)
    console.log(`Novo salário após o aumento: ${reajuste}`)

}

salarioTrabalhador(200)


console.log('---------------Exercicio 3-----------------' )
// 3 – Crie uma função capaz de retornar a soma de todos os elementos 
// dentro de um array passado por parâmetro. Utilize o array, [3, 5, 6, 8, 1, 2, 10], como exemplo.




array = [3, 5, 6, 8, 1, 2, 10];

function retornanumero(){
    
    soma = 0
    for(i = 0;i < array.length; i++){
        
        soma = soma + array[i]
        
        console.log(soma)

    }


}

retornanumero(array)


console.log('---------------Exercicio 4-----------------' )
// 4 – (DESAFIO) Crie uma função que consiga retornar o maior valor do array passado.
// A função precisa percorrer o array e encontrar o maior valor dentro do array. Utilize o array do exercício 3 como exemplo. 

function maiorNumero(){
    maior = 0
    for(i=0;i <= array.length; i++){
        
        if(maior <  array[i]){
            maior = array[i]
        }
       }
    console.log("O maior numero é ",maior)
}

maiorNumero(array)


console.log('---------------Exercicio 5-----------------' )


// 5 –  (DESAFIO) Crie uma função que seja capaz de inverter os valores dentro do array do exemplo abaixo, porém, utilize o for par tal:
// EX: [1, 2, 3, 4, 6, 6, 7, 8, 9]
// RESULTADO: [9, 8, 7, 6, 6, 4, 3, 2, 1]

function inverteValor(){
array2 = [1, 2, 3, 4, 6, 8, 7, 9, 15]
invert = []
invert2 = []
invert3 = []
cont = []

for(i = 0; i < array2.length; i++ ){
                
        invert.push(array2[i])
        // invert2 = invert.pop()
        // invert3.push(invert2) 
        
        console.log(invert)
}for(i = 0;i < array2.length;i ++){
    invert2 = invert.pop()
    invert3.push(invert2)
    console.log(invert3)
    
}

console.log(invert3)
}
inverteValor()

