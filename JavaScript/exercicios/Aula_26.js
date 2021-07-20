// 1 – O Carol e Alan estão fazendo uma sociedade e, por isso, acabam de adquirir uma panificadora e pretendem implantar a metodologia da tabelinha
// , que já é um sucesso na sua loja de 1,99. Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães,
//  a partir do preço do pão informado abaixo, conforme o exemplo abaixo (Pode ou não fazer dentro de função, fica facultativo):
// Preço do pão: R$ 0.18
// Panificadora Pão de Ontem - Tabela de preços
// 1 - R$ 0.18
// 2 - R$ 0.36
// ...
// 50 - R$ 9.00
console.log('------Exerxercicio 1-------')





function TabelaDePao(quant){
    var pao = 0.18
    for(i = 0;i <= quant; i++){

        total = pao * i

        console.log(total)
    }
    
    

}

TabelaDePao(20)




// 2 - Faça uma função que receba o valor de uma dívida e mostre uma tabela com os seguintes dados: valor da dívida, valor dos juros,
//  quantidade de parcelas e valor da parcela.
// Os juros e a quantidade de parcelas seguem a tabela abaixo:
// Quantidade de Parcelas |  % de Juros sobre o valor inicial da dívida
// 1                                   			 0
// 3                                      		10
// 6                                      		15
// 9                                      		20
// 12                                    		25
// Exemplo de saída do programa (não precisa seguir a mesma diagramação):

// Valor da Dívida| Valor dos Juros| Quantidade de Parcelas|  Valor da Parcela
// R$ 1.000,00      | 0                      |1                                     |  R$  1.000,00
// R$ 1.100,00      | 100                  |3                                     |  R$    366,00
// R$ 1.150,00      | 150                  | 6                                     |  R$    191,67
console.log('------Exerxercicio 2-------')





function CalculaJuros(valor){
    var vParcela = 0
    var valorDivida = 0
    var vJuro = 0

    var parcelaseJuros = [
        {parcelas:1,juros: 0},
        {parcelas:3,juros: 0.10},
        {parcelas:6,juros:0.15},
        {parcelas:9,juros:0.20},
        {parcelas:12,juros:0.25},
    ]


    console.log(" Valor da divida|   Valor dos Juros|  Quantidade de Parcelas|  Valor da Parcela")
    for(i = 0; i < parcelaseJuros.length; i++){
        
        
        vJuro = parcelaseJuros[i].juros * valor
        valorDivida = valor + vJuro
        vParcela = valorDivida / parcelaseJuros[i].parcelas



       console.log(valorDivida, vJuro,parcelaseJuros[i].parcelas, vParcela )
    }    



}
CalculaJuros(1000)






// 3 – O cardápio de uma lanchonete é o seguinte:
// Especificação    	Código 	 Preço
// Cachorro Quente  	    100 	    R$ 1,20
// Bauru Simples           101     	    R$ 1,30
// Bauru com ovo         102     	    R$ 1,50
// Hambúrguer              103     	    R$ 1,20
// Cheeseburguer          104             R$ 1,30
// Refrigerante               105             R$ 1,00

// Faça uma função que receba um array por parâmetro com um objeto representando os clientes em cada elemento do array (coloque 5 clientes), por exemplo:

// arrayClientes = [
// {cliente: "Roberto, CodigoPedido: 100, preco: 1.20, nomePedido:  "Cachorro Quente"}, 
// {cliente: "Marta, CodigoPedido: 101, preco: 1.30, nomePedido: "Bauru Simples"}, 
// {cliente: "Roberto, CodigoPedido: 104, preco: 1.30, nomePedido: "Cheeseburguer"}
// ]

// Passando por cada elemento, imprima o valor de cada pedido, o nome do pedido que o cliente fez e o nome do cliente que pediu. Por exemplo:
// “Roberto pediu cachorro quente por 1.30”
// No final da execução, faça a soma total que o caixa recebeu por todos os pedidos, por exemplo: 
// “Hoje, o faturamento foi de: xxx”


console.log('------Exerxercicio 3-------')



function lanchonete(){
arrayClientes = [
    {cliente: "Roberto", CodigoPedido: 100, preco: 1.20, nomePedido:  "Cachorro Quente"},
    {cliente: "Marta", CodigoPedido: 101, preco: 1.30, nomePedido: "Bauru Simples"}, 
    {cliente: "Roberto", CodigoPedido: 104, preco: 1.30, nomePedido: "Cheeseburguer"}
    ]

    var soma = 0

    for(i = 0; i < arrayClientes.length; i++){
     
        client = arrayClientes[i].cliente
        pedido = arrayClientes[i].nomePedido
        valor = arrayClientes[i].preco
        soma = soma + valor

        console.log(`${client} pediu ${pedido}, por R$ ${valor}`)
        
    }
    console.log('Hoje o faturamento foi de R$',soma)
}

lanchonete()