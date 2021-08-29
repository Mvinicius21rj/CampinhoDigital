console.log("Exercicio 1")
//   1 – Seguindo as boas práticas determinadas para declaração de variáveis e sabendo que precisamos armazenar
//    informações pessoais dos alunos, como nome, endereço, telefone, e-mail, gênero e se está empregado ou não,
//     crie variáveis simulando o cadastro de um aluno no sistema, com identificadores que façam sentido e atribuindo
//      valores pertinentes. 
var nomeCompleto = "Marcos Vinicius Silva"

var endereco = "Rua do Carvalho n36, Bairro: agua nova, cidade: Rio de janeiro, Estado: RJ"

var telefone = "(21) 96937-3545"

var e_mail = "mviniciusrj21@gmail.com"

var genero = "Maculino"

var empregado = true


console.log("Exercicio 2")

// 2 – Com a finalidade de fazer um teste no sistema com 4 das variáveis que criamos acima,
//  faça uma concatenação entre elas, atribuindo-as para uma única variável que precisará ser
//   criada por você. Lembre-se de criar uma concatenação que faça sentido.


alunos = nomeCompleto + endereco + telefone + e_mail

console.log(alunos)

console.log("Exercicio 3")
// 3 – Crie um array que receba 3 cadastros de alunos do exercício 1, seguindo os seguintes passos:
// a) Cada aluno precisará ser cadastrado em uma posição
// b) Não esquecer de cadastrar as informações do aluno em cada posição do array.
// c) Na prática, estamos falando de um array de arrays ou, ainda melhor, um array de objetos.

Alunos =[
    [[], [], [], []],
    [[], [], [], []],
    [[], [], [], []]
]

console.log("Exercicio 4")

// 4 – Coloque a variável do exercício 2 em letra maiúscula.

alunosMaisculas = alunos.toUpperCase()

console.log(alunosMaisculas)


console.log("Exercicio 5")
// 5 – Crie um array com 3 elementos e siga o exemplo abaixo:
//     a) Acesse o primeiro índice do array.
//     b) Acesse o terceiro índice do array.
//     c) Adicione um novo elemento, utilizando atribuição dinâmica, especificamente no índice 2,
//      fazendo com que o elemento antigo seja substituído por esse novo elemento. 

array = ["gato", "Cachorro", "Leão"]
console.log(array[0] )
console.log(array[2] )

array[2] = "peixe"


console.log(array[2] )


console.log("Exercicio 6")
// 6 – Imprima a quantidade de elementos do array criado no exercício 3.

console.log(Alunos.length)


console.log("Exercicio 7")
// 7 – Ainda com o array criado no exercício 3, adicione, utilizando o método adequado, a string ‘RODOLFO’ como último elemento.

Alunos.push("RODOLFO")
console.log(Alunos)