// 1 – Crie uma função que receba um dos números da semana (1 ao 7) e possa printar no terminal o dia da semana em formato de string relativo ao número que foi passado por parâmetro.
// Por exemplo: passei o número 1 e foi printado o dia: domingo

function recebeNumero(dia){
    
    if(dia == 1)
    {numero = 'Domingo' 
       }if(dia == 2){
        numero = 'Segunda' 
       }if(dia == 3){
        numero = 'Terça' 
       }if(dia == 4){
        numero = 'Quarta'
       } if(dia == 5){
        numero = 'Quinta'
       }if(dia == 6){
        numero = 'Sexta'
       }if(dia == 7){
        numero = 'Sabado'
       }

       console.log (numero)
}

recebeNumero(3)


// 2 – Pensando que o exercício 1 seja um programa real que verifique qual é o dia da semana e que quiséssemos utilizar ele diversas 
// vezes, qual seria a desvantagem se o código não estivesse dentro de uma função e qual é a vantagem por estar dentro de uma função?  (RESPOSTA LIVRE)

// 3 - Faça uma função que peça duas notas de um aluno. Em seguida ela deve calcular a média do aluno e dar o seguinte resultado:
//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;


function notaAlunos(numero1, numero2){


    media = (numero1 + numero2) / 2
     if(media => 7){
         console.log('Aprovado', media)

     }else{
         console.log('Reprovado', media)
     }
    
}

notaAlunos(5,9)

// 4 – Crie uma função que retorne a multiplicação de dois números passados por parâmetro. 

function multiplicação(numero1, numero2){
    resultado = numero1 * numero2

    console.log(resultado)

}

multiplicação(2,5)

// 5 – Observando os exercícios acima, responda qual foi a vantagem de usar função?  


