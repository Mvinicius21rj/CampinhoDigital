// 1 – Utilizando WHILE, escreva uma função que possa receber um número por parâmetro e mostre 
// todos os números que são pares e ímpares até chegar ao número passado. 

function verificanumeros(numero){
   
    i = 1
    tiponumero = ""

    do{ 
        contNumero = i % 2
        if(contNumero == 0){
            tiponumero = "Par"
        }else {
            tiponumero = "Impar"
        }
        console.log(`O numero ${i} é ${tiponumero}`)
         
      i++  
    }while(i <= numero)

}
verificanumeros(8)


// 2 – Utilizando WHILE, escreva uma função que possa receber um array com 5 objetos de nomes
//  de alunos e notas, por exemplo {aluno: ...., nota: .......} e depois calcule a média dos alunos printando na tela o resultado. 





// 3 – Escreva uma função que quando for chamada possa calcular a tabuada de um valor a outro
//  de dois números passados por parâmetro. Por exemplo: 
// funcaoTabuada(2, 5) -> Essa tabuada gerada pela função terá que ser de 2 até o número 5.
//  Obs: o primeiro parâmetro precisará ser menor que o segundo.
// Tabuada de 2
// Tabuada de 3
// Tabuada de 4
// Tabuada de 5


// 4 – Crie uma função que receba dois números e retorne se o primeiro é maior, menor ou igual
// ao segundo. Deverá diferenciar números de strings, alertando que o número não é number, caso ele for uma string. 