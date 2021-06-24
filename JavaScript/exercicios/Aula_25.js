console.log('---------------Exercicio 1-----------------' )

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



