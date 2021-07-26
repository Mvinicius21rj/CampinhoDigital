// Já conhecemos o exercício do Sr José, porém, agora, precisamos completar a tarefa para poder ajuda-lo. Então,
//  vamos lá: Sr José já viu como funciona o sistema em sua lanchonete e agora quer ir além.  
//  O teu trabalho é fazer com que o sistema do Sr José possa registrar todos os clientes da tabela,
//   porém dividindo-os em dois grupos, um feminino e outro masculino, pois ele quer conseguir criar uma 
//   análise melhor sobre esses dois públicos. Além disso, ele pediu para ser printado o nome do pedido que 
//   cada cliente consumiu, além do valor do pedido, exemplo: Roberto consumiu chocolate e gastou R$ 4,60. 
// Para isso, observe as dicas abaixo:
// ORGANIZANDO AS IDEIAS: 
//     • Criar uma forma de simular os dois grupo separadamente, um masculino e outro feminino.
//     • Demonstrar quanto de lucro Sr José ganhou nesse dia com cada grupo (lucro líquido).  
//     • Demonstrar quanto foi o imposto total que Sr José precisou pagar de cada grupo. 
//     • Demonstrar qual o valor total que foi gerado nesse dia (sem descontar os impostos) de cada grupo. 
//     • Printar quanto cada cliente de cada grupo vai ter que pagar e o nome do pedido do cliente.  




var alimentos = [

    {alimento:'Café' ,preco: 3 ,codigo: 1 ,imposto:2 },
    {alimento:'Pingado' ,preco: 5 ,codigo: 5 ,imposto:5 },
    {alimento:'Chocolate' ,preco: 8 ,codigo: 8 ,imposto:7 },
    {alimento:'Pão na chapa' ,preco: 5.50 ,codigo: 10 ,imposto:1 },
    {alimento:'Pão de queijo' ,preco: 5 ,codigo: 7 ,imposto: 6 },
    {alimento:'Salgado' ,preco: 3 ,codigo: 3 ,imposto:8 },
    {alimento:'Americano' ,preco: 12 ,codigo: 22 ,imposto:4 },
    {alimento:'Bauru' ,preco: 15.50 ,codigo: 34 ,imposto:6 },
    {alimento:'Xburguer' ,preco: 15.50 ,codigo: 54 ,imposto:6 },
    {alimento:'Xbancon' ,preco: 17.50 ,codigo: 23 ,imposto:8 },
    {alimento:'Xtudo' ,preco: 19.50 ,codigo: 80 ,imposto:3 },
    {alimento:'Hot Dog' ,preco: 19.50 ,codigo: 12 ,imposto:2 },
    {alimento:'Calabrasa' ,preco: 21.50 ,codigo: 15 ,imposto:6 },
    {alimento:'Fritas' ,preco: 22 ,codigo: 15 ,imposto:6 },
    {alimento:'Frango' ,preco: 20 ,codigo: 98 ,imposto:1 },
    {alimento:'Frios' ,preco: 25 ,codigo: 43 ,imposto:7 },
    {alimento:'Peixe' ,preco: 32 ,codigo: 23 ,imposto:5 },
    
]


clientes = [

    {cliente: 'Claudio', grupo:'Masculino' , pedido:"Chocolate"},
    {cliente: 'Roberto', grupo:'Masculino' , pedido:"Salgado"},
    {cliente: 'Marcos', grupo:'Masculino' , pedido:"Xtudo"},
    {cliente: 'Carol', grupo:'Feminino' , pedido:"Café"},
    {cliente: 'Susie', grupo:'Feminino', pedido:"Peixe"},
    {cliente: 'Marta', grupo:'Feminino' , pedido:"Frango"},
    {cliente: 'Aline', grupo:'Feminino' , pedido:"Xbancon"},
    {cliente: 'Jùlia', grupo:'Feminino' , pedido:"Frios"},
    {cliente: 'Pablo', grupo:'Masculino' , pedido:"Salgados"},
    {cliente: 'Alice', grupo:'Feminino', pedido:"Calabresa"},
    
]

grupoM = []
grupoF = []
pedidosM = []
pedidosF = []
valor = 0



    

for(i = 0; i < clientes.length; i++){
     if(clientes[i].grupo == 'Masculino'){
        grupoM.push(clientes[i].cliente)
        pedidosM.push(clientes[i].pedido)
        
     }else{
         grupoF.push(clientes[i].cliente)
         pedidosF.push(clientes[i].pedido) 
     }

}

for(y = 0; y < alimentos.length; y++){
    if(alimentos[y].alimento == pedidosM[y]){
        valor = 1 
     }
}

contgrupoM = grupoM.length
contgrupoF = grupoF.length

console.log(valor)

console.log(grupoM)
console.log(grupoF)

console.log(contgrupoF)
console.log(contgrupoM)

console.log(pedidosF)
console.log(pedidosM)

console.log('A Quantidade de pessoas no Grupo masculino é de',contgrupoM, 'e feminino',contgrupoF)



